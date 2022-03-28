import React from "react";
import Cards from "../../components/Cards/Cards";
import CardsData from "../../data/CardsData";
import { Link } from "react-router-dom";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="Blogs">
      <div className="gird_container">
        {CardsData.map((items) => {
          const { title, paragraph, source, key, authorName } = items;
          return (
            <Cards
              title={title}
              source={source}
              paragraph={paragraph}
              authorName={authorName}
              key={key}
              to={`blogs/${key}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
