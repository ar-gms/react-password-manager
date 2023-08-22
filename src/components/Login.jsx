import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const isAuthenticated = true; // für zukunftige api

        if (isAuthenticated) {
            {/* wenn die Daten stimmen wird nach PasswordList navigiert*/}
            navigate('/PasswordList');
        }
    };

    return (
        <div className='center-form'>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h2 className="text-center">Log in</h2>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Username" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder="Password" required />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="float-left form-check-label"><input type="checkbox" /> Remember me</label>
                        <a href="#" className="float-right">Forgot Password?</a>
                    </div>
                </form>
                <p className="text-center"><a href="#">Create an Account</a></p>
            </div>
        </div>
    );
}

export default Login;
