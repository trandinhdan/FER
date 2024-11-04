import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { regester } from '../../services/userServices'

const Register = () => {

    const [error, setError] = useState('')
    const [newUser, setNewUser] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await regester(newUser)
        if (response) {
            navigate('/login')
        } else {
            setError('Existed username')
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1 className="text-center mb-4">Register</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="form-control"
                                onChange={handleChange}
                                value={newUser.username}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                onChange={handleChange}
                                value={newUser.password}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="form-control"
                                onChange={handleChange}
                                value={newUser.firstName}
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
                                value={newUser.lastName}
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
                                value={newUser.email}
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
                                value={newUser.mobile}
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
                                value={newUser.address}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
