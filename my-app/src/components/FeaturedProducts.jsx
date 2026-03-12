import card1 from "../assets/images/card-item1.jpg";
import card2 from "../assets/images/card-item2.jpg";
import card3 from "../assets/images/card-item3.jpg";

function FeaturedProducts() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-md-3">
          <img src={card1} className="img-fluid" alt="shoe"/>
          <p>Running shoes for men</p>
          <strong>$99</strong>
        </div>

        <div className="col-md-3">
          <img src={card2} className="img-fluid" alt="shoe"/>
          <p>Running shoes for men</p>
          <strong>$99</strong>
        </div>

        <div className="col-md-3">
          <img src={card3} className="img-fluid" alt="shoe"/>
          <p>Running shoes for men</p>
          <strong>$99</strong>
        </div>

      </div>
    </div>
  );
}

export default FeaturedProducts;