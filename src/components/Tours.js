import React from "react";

const Tours = ({ name, info, image, price }) => {
  return (
    <div className="section">
      <div className="single-tour">
        <img src={image} alt={name} />
      </div>
      <div className="section-name">
        <h4>
          {name}
        </h4>
        <p className="tour-price">
          {price}
        </p>
      </div>
      <div className="tour-info">
        <p>
          {info.substring(0, 200)}...{" "}
          <span>
            <a href="#">See More</a>
          </span>
        </p>

      </div>
     <button className="delete-btn">Not Interested</button> 
    </div>
  );
};

export default Tours;
