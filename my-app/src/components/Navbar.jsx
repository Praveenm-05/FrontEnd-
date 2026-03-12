import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold">Stylish</a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item mx-2">
              <button className="btn btn-outline-dark">Home</button>
            </li>

            <li className="nav-item mx-2">
              <button className="btn btn-outline-dark">Men</button>
            </li>

            <li className="nav-item mx-2">
              <button className="btn btn-outline-dark">Women</button>
            </li>

            <li className="nav-item mx-2">
              <button className="btn btn-outline-dark">Shop</button>
            </li>

          </ul>

          <div>
            <i className="bi bi-person me-3"></i>
            <i className="bi bi-cart me-3"></i>
            <i className="bi bi-search"></i>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;