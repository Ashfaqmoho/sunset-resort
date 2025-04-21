import React from "react";
import "./Offers.css";
import offerImg from "../../assets/special-offer.jpg";
import offer_1 from "../../assets/offers-icon.png";
import offer_2 from "../../assets/Limited-offer.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offer1">
        <img src={offer_1} alt="" />
      </div>

      <div className="offer">
        <img src={offerImg} alt="" />
      </div>
    </div>
  );
};

export default Offers;
