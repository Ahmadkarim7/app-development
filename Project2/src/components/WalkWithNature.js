import React from "react";
import img1 from "../images/nature/1.jpg";
import img2 from "../images/nature/2.jpg";
import img3 from "../images/nature/3.jpg";
import img4 from "../images/nature/4.jpg";
import img5 from "../images/nature/5.jpg";
import img6 from "../images/nature/6.jpg";
import Card from "./Card";

const ImgData = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const WalkWithNature = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-red-600 text-4xl mt-5">
        Walk with Nature
      </h1>
      <p className="text-lg text-center text-gray-500 mt-2 px-10">
        walk with nature is an invitation to slow down and embrace the rhythm of
        the natural world. As we step into the wilderness, leaving behind the
        noise and rush of everyday life, we find ourselves immersed in the quiet
        wisdom of the earth. Each footstep on a forest path, the rustling of
        leaves underfoot, and the gentle whisper of the wind through the trees
        awaken our senses and ground us in the present moment. Walking with
        nature offers more than just physical exercise; it is a meditative
        journey that renews the mind and spirit.
      </p>
      <div className="m-10 grid grid-cols-3 gap-8 justify-around">
        {ImgData.map((card, index) => (
          <Card key={index} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default WalkWithNature;
