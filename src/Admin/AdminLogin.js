import React from "react";
import logo from "../../src/assets/Logo.png"


const AdminLogin = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="mb-2" />
            </div>
            <h2 className="text-center">Admin Login</h2>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <input type="email" className="form-control mb-3" placeholder="Email address" />
                <input type="password" className="form-control mb-3" placeholder="Password" />
                <button className="btn w-100" style={{ backgroundColor: '#BE6E02', color: 'white' }}>
                    Admin Login
                </button>
            </div>
        </div>
  );
};

export default AdminLogin;