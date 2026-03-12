import React from "react";

import img1 from "../assets/images/card-large-item1.jpg";
import img2 from "../assets/images/card-large-item2.jpg";
import img3 from "../assets/images/card-large-item3.jpg";

function HeroSection() {
  return (
    <div className="container my-4">

      <div className="row g-4">

        {/* Left Big Image */}

        <div className="col-md-6">
          <img
            src={img1}
            alt="shoe"
            className="img-fluid rounded hero-img"
          />
        </div>

        {/* Right Two Images */}

        <div className="col-md-6 d-flex flex-column gap-4">

          <img
            src={img2}
            alt="shoe"
            className="img-fluid rounded hero-img"
          />

          <img
            src={img3}
            alt="shoe"
            className="img-fluid rounded hero-img"
          />
        
        </div>

      </div>

    </div>
  );
}

export default HeroSection;