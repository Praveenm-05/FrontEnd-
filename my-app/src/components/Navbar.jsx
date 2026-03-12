import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold logo-text">
          PraveenStylish
        </a>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item mx-2">
              <button className="nav-btn">Home</button>
            </li>

            <li className="nav-item mx-2">
              <button className="nav-btn">Men</button>
            </li>

            <li className="nav-item mx-2">
              <button className="nav-btn">Women</button>
            </li>

            <li className="nav-item mx-2">
              <button className="nav-btn">Shop</button>
            </li>

          </ul>

          {/* Icons */}

          <div className="nav-icons">

            <i className="bi bi-person me-3"></i>

            <div className="cart-icon me-3">
              <i className="bi bi-cart"></i>
              {/* <span className="cart-badge">Cart</span> */}
            </div>

            <i className="bi bi-search"></i>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;