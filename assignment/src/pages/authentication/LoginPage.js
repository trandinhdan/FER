import React from 'react'
import { useState } from 'react'
import { login } from '../../services/userServices'
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(username, password);
        if (response.length > 0) {
            localStorage.setItem('user', JSON.stringify(response))
            console.log(response)
            window.location.href = '/home'
        }
        else {
            alert('Invalid username or password')
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1 className="text-center mb-4">Login</h1>
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

                        <div>
                            <a className="btn btn-link" href="/register">Register</a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Login