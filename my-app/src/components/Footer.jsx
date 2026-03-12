import React from "react";

function Footer() {
  return (
    <footer className="footer-section text-light pt-5">

      <div className="container">

        <div className="row">

          {/* Brand */}

          <div className="col-md-3 mb-4">
            <h4 className="fw-bold">PraveenStylish</h4>
            <p className="footer-desc">
               With a diverse portfolio of Apparel, Footwear & Accessories for Men, Women & Kids, we cater to fashion-conscious millennials and tech-savvy young families alike
            </p>

            <div className="social-icons">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter me-3"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>

          {/* Info */}

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Info</h6>
            <ul className="footer-links">
              <li>Track Order</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* About */}

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">About</h6>
            <ul className="footer-links">
              <li>History</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Stores</li>
            </ul>
          </div>

          {/* Newsletter */}

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Subscribe</h6>

            <p>Get the latest offers and discounts.</p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
              <button className="btn btn-warning">
                Subscribe
              </button>
            </div>

            <p className="mt-3 small">
              contact@praveenstyles.com
            </p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="text-center border-top pt-3 mt-4">
          <p className="mb-0">
            © 2026 PraveenStylish Store | All Rights Reserved
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;