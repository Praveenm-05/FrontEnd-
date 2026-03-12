import React, { useState } from "react";

import item1 from "../assets/images/card-item1.jpg";
import item2 from "../assets/images/card-item2.jpg";
import item3 from "../assets/images/card-item3.jpg";
import item4 from "../assets/images/card-item4.jpg";
import item5 from "../assets/images/card-item5.jpg";
import item6 from "../assets/images/card-item6.jpg";
import item7 from "../assets/images/card-item7.jpg";
import item8 from "../assets/images/card-item8.jpg";
import item9 from "../assets/images/card-item9.jpg";
import item15 from "../assets/images/card-item10.jpg";
import item10 from "../assets/images/card-large-item1.jpg";
import item11 from "../assets/images/card-large-item2.jpg";
import item12 from "../assets/images/card-large-item3.jpg";
import item13 from "../assets/images/card-large-item4.jpg";
import item14 from "../assets/images/card-large-item5.jpg";

function LatestProducts() {

  const [showAll, setShowAll] = useState(false);

  const products = [
    { img: item1, name: "Running shoes for men", price: "$99" },
    { img: item2, name: "Running shoes for men", price: "$99" },
    { img: item3, name: "Running shoes for men", price: "$99" },
    { img: item4, name: "Running shoes for men", price: "$99" },
    { img: item5, name: "Running shoes for men", price: "$99" },
    { img: item6, name: "Running shoes for men", price: "$99" },
    { img: item7, name: "Running shoes for men", price: "$99" },
    { img: item8, name: "Running shoes for men", price: "$99" },
    { img: item9, name: "Running shoes for men", price: "$99" },
    { img: item10, name: "Running shoes for men", price: "$99" },
    { img: item11, name: "Running shoes for men", price: "$99" },
    { img: item12, name: "Running shoes for men", price: "$99" },
    { img: item13, name: "Running shoes for men", price: "$99" },
    { img: item14, name: "Running shoes for men", price: "$99" },
    { img: item15, name: "Running shoes for men", price: "$99" }
  ];

  const visibleProducts = showAll ? products : products.slice(0, 5);

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">LATEST PRODUCTS</h4>

        <p
          className="text-dark"
          style={{ cursor: "pointer" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "SHOW LESS" : "VIEW ALL"}
        </p>

      </div>

      <div className="row">

        {visibleProducts.map((product, index) => (

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>

            <div className="card product-card border-0">

              <div className="product-img-wrapper">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt="shoe"
                />
              </div>

              <div className="card-body p-2 text-center">
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

export default LatestProducts;