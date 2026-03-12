import React from "react";

import card1 from "../assets/images/card-item1.jpg";
import card2 from "../assets/images/card-item2.jpg";
import card3 from "../assets/images/card-item3.jpg";

function FeaturedProducts() {

  const products = [
    { img: card1, name: "Running shoes for men", price: "$99" },
    { img: card2, name: "Running shoes for men", price: "$99" },
    { img: card3, name: "Running shoes for men", price: "$99" }
  ];

  return (
    <div className="container my-5">

      {/* Section Title */}

      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">FEATURED PRODUCTS</h4>
        <p className="text-dark">VIEW ALL</p>
      </div>

      <div className="row">

        {products.map((product, index) => (

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>

            <div className="card featured-card border-0">

              <div className="featured-img">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt="shoe"
                />
              </div>

              <div className="card-body text-center">

                <p className="mb-1">{product.name}</p>

                <strong>{product.price}</strong>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FeaturedProducts;