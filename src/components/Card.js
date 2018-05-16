import React from "react";
import "tachyons";

const Card = ({ name, nickname }) => {
  return (
    <div className="bg-light-green dib br4 pa3 ma2 bw3 shadow-5 grow">
      <img
        //  Get image and set size, background
        src={`https://robohash.org/${name}*${nickname}?size=250x250&bgset=bg1`}
        alt="robot"
      />
      <div>
        <h2 className="b">{name}</h2>
        <p>{nickname}</p>
      </div>
    </div>
  );
};

export default Card;
