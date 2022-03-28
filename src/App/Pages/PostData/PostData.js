import React from "react";
import { useParams } from "react-router-dom";
import "./PostData.css";
import CardsData from "../../data/CardsData";
const PostData = () => {
  const { id } = useParams();
  const { source, title, paragraph } = CardsData[id];
  return (
    <div className="PostData">
      <div className="post_image_container">
        <img src={source} />
      </div>
      <div className="details_container">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default PostData;
