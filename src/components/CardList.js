import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, index) => {
        return (
          <Card
            key={robots[index].id}
            name={robots[index].name}
            nickname={robots[index].nickname}
          />
        );
      })}
    </div>
  );
};

export default CardList;
