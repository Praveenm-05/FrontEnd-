import React from "react";

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
          Contact | Cart | Login
        </div>

      </div>
    </div>
  );
}

export default TopBar;