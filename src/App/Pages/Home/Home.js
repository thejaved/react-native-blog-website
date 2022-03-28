import React from "react";
import Cards from "../../components/Cards/Cards";
import "./Home.css";
import CardsData from "../../data/CardsData";
const Home = () => {
  return (
    <div className="Home">
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

export default Home;
