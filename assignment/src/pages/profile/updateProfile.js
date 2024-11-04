import React, { useState, useEffect } from "react";
import { updateUser, takeUser } from "../../services/userServices";


const UpdateProfile = ({ userData }) => {
    const [user, setUser] = useState([]);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await takeUser(userData.id);
            setUser(response);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        {
            e.preventDefault();
            try {
                const response = await updateUser(user);
                localStorage.removeItem('token');
                localStorage.setItem("token", JSON.stringify(response));

                console.log(response);

            } catch (error) {
                console.error(error);
            }
            window.location.href = "/";
        }
    }


    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <h1 className="text-center mb-4">Update Profile</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.username}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'} // Toggle between text and password
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={user.password}
                                    />
                                    <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.firstName}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.lastName}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.email}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.mobile}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.address}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}

export default UpdateProfile;