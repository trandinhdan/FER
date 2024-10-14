import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { regester } from '../services/userServices'

const Register = () => {

    const [error , setError] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await regester(username, password);
        if (response) {
            localStorage.setItem('user', JSON.stringify(response))
            navigate('/home')
        }
        else {
            setError('Invalid username')
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
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
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
