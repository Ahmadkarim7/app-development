import React from "react";
import img1 from "../images/stars/1.jpg";
import img2 from "../images/stars/2.jpg";
import img3 from "../images/stars/3.jpg";
import img4 from "../images/stars/4.jpg";
import img5 from "../images/stars/5.jpg";
import img6 from "../images/stars/6.jpg";
import Card from "./Card";

const ImgData = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const StarsAndTrees = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-red-600 text-4xl mt-5">
        Stars & Trees
      </h1>
      <p className="text-lg text-center text-gray-500 mt-2 px-10">
        Stars and trees, two of nature's most enduring symbols, together create
        a mesmerizing tapestry that evokes a sense of wonder and tranquility.
        Trees, with their deep roots and towering canopies, represent stability,
        growth, and the life-sustaining power of the earth. As night falls,
        these silent guardians of the forest stand silhouetted against the vast
        expanse of the sky, where countless stars twinkle in an eternal dance.
        The stars, distant yet ever-present, remind us of the infinite universe
        beyond our reach, sparking curiosity and inspiring dreams.
      </p>
      <div className="m-10 grid grid-cols-3 gap-8 justify-around">
        {ImgData.map((card, index) => (
          <Card key={index} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default StarsAndTrees;
