import React, { useEffect, useState } from "react";
import { listAllUsers, updateUser } from "../../../services/userServices";

const ShowAccount = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await listAllUsers();
            setUsers(response);
            setFilteredUsers(response);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        applyFiltersAndSearch();
    }, [searchTerm, genderFilter, roleFilter, users]);

    const applyFiltersAndSearch = () => {
        let updatedUsers = [...users];

        if (searchTerm) {
            updatedUsers = updatedUsers.filter(user =>
                user.username.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (genderFilter) {
            updatedUsers = updatedUsers.filter(user => user.gender === genderFilter);
        }

        if (roleFilter) {
            updatedUsers = updatedUsers.filter(user => user.role === roleFilter);
        }

        setFilteredUsers(updatedUsers);
    };

    const handleUpdateRole = async (user, newRole) => {
        const updatedUser = { ...user, role: newRole };
        const response = await updateUser(updatedUser);
        if (response.data) {
            setUsers(prevUsers =>
                prevUsers.map(u => (u.id === user.id ? updatedUser : u))
            );
        }
    };

    const sortByName = () => {
        const sortedUsers = [...filteredUsers].sort((a, b) =>
            a.username.localeCompare(b.username)
        );
        setFilteredUsers(sortedUsers);
    };

    const sortByDOB = () => {
        const sortedUsers = [...filteredUsers].sort((a, b) =>
            new Date(a.dob) - new Date(b.dob)
        );
        setFilteredUsers(sortedUsers);
    };



    return (
        <div className="container mt-5">

            <div className="row mt-3">
                <div className="col-md-3">
                    Filter by gender
                    <select
                        className="form-control"
                        value={genderFilter}
                        onChange={(e) => setGenderFilter(e.target.value)}
                    > Gender
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="col-md-3">
                    Filter by role
                    <select
                        className="form-control"
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                    > Role
                        <option value="">All</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            setSearchTerm("");
                            setGenderFilter("");
                            setRoleFilter("");
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <button
                        className="btn btn-primary"
                        onClick={sortByName}
                    >
                        Sort by name
                    </button>
                </div>
                <div className="col-md-3">
                    <button
                        className="btn btn-primary"
                        onClick={sortByDOB}
                    >
                        Sort by date of birth
                    </button>
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col-md-3">
                    <input
                        type="text"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name"
                    />
                </div>
            </div>

            <br />

            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Username</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>

                            <td>{user.gender}</td>
                            <td>{user.dob}</td>
                            <td>
                                <select
                                    value={user.role}
                                    onChange={(e) => handleUpdateRole(user, e.target.value)}
                                >
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default ShowAccount;
