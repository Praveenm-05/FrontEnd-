import React from "react";

function Footer() {
  return (
    <footer className="bg-light py-5 mt-5">

      <div className="container">

        <div className="row">

          <div className="col-md-3">
            <h6>Info</h6>
            <p>Track Order</p>
            <p>Blog</p>
            <p>Privacy Policy</p>
          </div>

          <div className="col-md-3">
            <h6>About</h6>
            <p>History</p>
            <p>Our Team</p>
          </div>

          <div className="col-md-3">
            <h6>Popular</h6>
            <p>Prices Drop</p>
            <p>Best Sales</p>
          </div>

          <div className="col-md-3">
            <h6>Contact</h6>
            <p>Stylish Online Store</p>
            <p>contact@yourwebsite.com</p>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;