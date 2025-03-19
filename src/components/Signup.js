import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import logo from "../../src/assets/Logo.png";

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async () => {
        if (!formData.fullName || !formData.email || !formData.password) {
            Swal.fire("Error", "All fields are required.", "error");
            return;
        }

        try {
            const res = await axios.post("https://anm-backend.onrender.com/api/auth/signup", formData);
            Swal.fire("Success", res.data.message, "success").then(() => {
                navigate("/login"); // Redirect after successful signup
            });
        } catch (error) {
            Swal.fire("Error", error.response?.data?.message || "Signup failed.", "error");
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="text-center mb-4">
                <img src={logo} alt="Logo" className="mb-2" />
            </div>
            <h2 className="text-center">Create an Account</h2>
            <p className="text-center text-dark">
                Already have an account?
                <a href="#" style={{ color: "#BE6E02", textDecoration: "none" }} onClick={() => navigate("/login")}> Sign in</a>
            </p>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <input type="text" name="fullName" className="form-control mb-3" placeholder="Full Name" onChange={handleChange} />
                <input type="email" name="email" className="form-control mb-3" placeholder="Email address" onChange={handleChange} />
                <input type="password" name="password" className="form-control mb-3" placeholder="Password" onChange={handleChange} />
                <button className="btn w-100" style={{ backgroundColor: "#BE6E02", color: "white" }} onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Signup;
