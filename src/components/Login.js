import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo.png";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async () => {
        if (!formData.email || !formData.password) {
            Swal.fire("Error", "Both email and password are required.", "error");
            return;
        }

        try {
            const res = await axios.post("https://anm-backend.onrender.com/api/auth/login", formData);
            Swal.fire("Success", res.data.message, "success").then(() => {
                navigate("/home"); // Redirect after successful login
            });
        } catch (error) {
            Swal.fire("Error", error.response?.data?.message || "Login failed.", "error");
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="mb-2" />
            </div>
            <h2 className="text-center">Sign in to your account</h2>
            <p className="text-center text-dark">
                Or <a href="/signup" style={{ color: "#BE6E02", textDecoration: "none" }}>create a new account</a>
            </p>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <input type="email" name="email" className="form-control mb-3" placeholder="Email address" onChange={handleChange} />
                <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} />
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="ms-2">Remember me</label>
                    </div>
                    <a href="#" style={{ color: "#BE6E02", textDecoration: "none" }}>Forgot your password?</a>
                </div>
                <button className="btn w-100" style={{ backgroundColor: "#BE6E02", color: "white" }} onClick={handleSignIn}>
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Login;
