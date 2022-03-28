import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = ({ title, paragraph, source, authorName, to }) => {
  return (
    <div className="Cards">
      <div className="image_container">
        <img src={source} />
      </div>
      <div className="cards_details">
        <h1>{title}</h1>
        <div style={{ padding: 3 }}></div>
        <strong>
          <i className="bx bx-user" style={{ marginRight: 5 }}></i>
          {authorName}
        </strong>
        <div style={{ padding: 3 }}></div>
        <p>{paragraph}</p>
        <div style={{ padding: 5 }}></div>
        <Link to={to} style={{ color: "#000B49", fontWeight: "900" }}>
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Cards;
