import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import "./Style/Header.css";
import logo from "../../src/assets/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cartCount = 3; // Example cart count

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>

            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="/" 
                id="categoriesDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><a className="dropdown-item" href="/">Cups</a></li>
                <li><a className="dropdown-item" href="/">Mugs</a></li>
                <li><a className="dropdown-item" href="/">T-Shirts</a></li>
                <li><a className="dropdown-item" href="/">Hoodies</a></li>
              </ul>
            </li>

            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
          </ul>
          
          {/* Search Box */}
          <div className="position-relative ms-auto" style={{ width: "250px" }}>
            <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search designs..."
              style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                height: "40px",
              }}
            />
          </div>

          {/* Cart and Profile Icons */}
          <div className="d-flex align-items-center ms-3">
            <a href="/cart" className="me-3 text-dark position-relative">
              <FaShoppingCart size={20} />
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ backgroundColor: "#BE6E02", color: "white" }}
              >
                {cartCount}
              </span>
            </a>
            <a href="/" className="text-dark"><FaUser size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
