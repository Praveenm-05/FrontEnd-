import React from "react";
import { Link } from "react-router-dom";
<Link to="/register">Login</Link>

function TopBar() {
  return (
    <div className="bg-light py-2 border-bottom">
      <div className="container d-flex justify-content-between">

        <div>
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-youtube"></i>
        </div>

        <div>
          <strong>Special Offer:</strong> Free Shipping on orders above $100
        </div>

        <div>
          <Link to="/contact" className="me-3 text-dark text-decoration-none">
            Contact
          </Link>

          <Link to="/cart" className="me-3 text-dark text-decoration-none">
            Cart
          </Link>

          <Link to="/register" className="text-dark text-decoration-none">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default TopBar;