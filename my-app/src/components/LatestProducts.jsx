import React from "react";

import item1 from "../assets/images/card-item1.jpg";
import item2 from "../assets/images/card-item2.jpg";
import item3 from "../assets/images/card-item3.jpg";
import item4 from "../assets/images/card-item4.jpg";
import item5 from "../assets/images/card-item5.jpg";

function LatestProducts() {

  const products = [
    { img: item1, name: "Running shoes for men", price: "$99" },
    { img: item2, name: "Running shoes for men", price: "$99" },
    { img: item3, name: "Running shoes for men", price: "$99" },
    { img: item4, name: "Running shoes for men", price: "$99" },
    { img: item5, name: "Running shoes for men", price: "$99" }
  ];

  return (
    <div className="container my-5">

      <div className="d-flex justify-content-between mb-4">
        <h4 className="fw-bold">LATEST PRODUCTS</h4>
        <p className="text-dark">VIEW ALL</p>
      </div>

      <div className="row">

        {products.map((product, index) => (

          <div className="col-md-2" key={index}>

            <div className="card border-0">

              <img
                src={product.img}
                className="card-img-top"
                alt="shoe"
              />

              <div className="card-body p-2">

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