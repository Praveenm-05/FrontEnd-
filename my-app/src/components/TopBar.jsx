import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topbar py-2 border-bottom">

      <div className="container d-flex justify-content-between align-items-center">

        {/* Social Icons */}

        <div className="topbar-icons">
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-youtube"></i>
        </div>

        {/* Offer Text */}

        <div className="topbar-offer">
          <strong>Special Offer:</strong> Free Shipping on orders above $100
        </div>

        {/* Navigation Links */}

        <div className="topbar-links">

          <Link to="/contact" className=" nav-btn me-3">
            Contact
          </Link>

          <Link to="/cart" className=" nav-btn me-3">
            Cart
          </Link>

          <Link to="/register" className=" nav-btn login-btn">
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default TopBar;