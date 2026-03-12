import React from "react";

function DiscountBanner() {
  return (
    <div className="bg-light py-5">
      <div className="container d-flex justify-content-between align-items-center">

        <div>
          <h2>10% OFF Discount Coupons</h2>
          <p>Subscribe us to get 10% OFF on all purchases</p>
        </div>

        <button className="btn btn-dark">EMAIL ME</button>

      </div>
    </div>
  );
}

export default DiscountBanner;