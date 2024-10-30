import React, { useEffect, useState } from "react";
import { listAllUsers, updateUser } from "../../../services/userServices";

const ShowAccount = () => {
    const [users, setUsers] = useState([]);
 
    const [isSortedList, setIsSortedList] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);

    const [isChangeList, setIsChangeList] = useState(false);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await listAllUsers();
            setUsers(response);
            setUserList(response);
        };
        fetchUsers();
    }, []);

    const handleUpdateRole = async (id, role) => {
        const response = await updateUser({ id, role });
        return response.data;
    };

    const handleSortByName = () => {
        setIsSortedList(true);
        setUserList(users.sort((a, b) => a.username.localeCompare(b.username)));
    };

    const handleFilterByRole = (role) => {
        setIsFiltered(true);
        setUserList(users.filter((user) => user.role === role));
    };

    const handleReset = () => {
        setIsChangeList(false);
        setUserList(users);
    };

    const filterByGender = (gender) => {
        setIsFiltered(true);
        setUserList(users.filter((user) => user.gender === gender));
    };

    const searchByName = (name) => {
        setIsChangeList(true);
        setUserList(users.filter((user) => user.username.toLowerCase().includes(name.toLowerCase())));
    };

    const sortByDOB = () => {
        setIsSortedList(true);
        setUserList(users.sort((a, b) => new Date(a.dob) - new Date(b.dob)));
    };


    return (
        <>
            <div className="show-account">
                <h2>User Accounts</h2>
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Search by name"
                        onChange={(e) => searchByName(e.target.value)}
                    />
                    <button onClick={() => handleSortByName()}>Sort by Name</button>
                    <button onClick={() => sortByDOB()}>Sort by DOB</button>
                    <select onChange={(e) => handleFilterByRole(e.target.value)}>
                        <option value="">Filter by Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <select onChange={(e) => filterByGender(e.target.value)}>
                        <option value="">Filter by Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <button onClick={handleReset}>Reset Filters</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.gender}</td>
                                <td>{user.dob}</td>
                                <td>
                                    <button onClick={() => handleUpdateRole(user.id, user.role === "admin" ? "user" : "admin")}>
                                        Toggle Role
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShowAccount;