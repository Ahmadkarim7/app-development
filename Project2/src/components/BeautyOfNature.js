import React from "react";
import img1 from "../images/beauty/1.jpg";
import img2 from "../images/beauty/2.jpg";
import img3 from "../images/beauty/3.jpg";
import img4 from "../images/beauty/4.jpg";
import img5 from "../images/beauty/5.jpg";
import img6 from "../images/beauty/6.jpg";
import Card from "./Card";

const ImgData = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];

const BeautyOfNature = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-red-600 text-4xl mt-5">
        Beauty of Nature
      </h1>
      <p className="text-lg text-center text-gray-500 mt-2 px-10">
        The beauty of nature is a timeless source of inspiration and awe, a
        testament to the artistry of the world around us. From the vibrant
        colors of a sunrise that paints the sky with hues of pink and gold to
        the delicate patterns on a butterfly's wings, nature's beauty manifests
        in countless forms, each more captivating than the last. This beauty is
        not just seen but felt, in the soothing sound of waves crashing against
        the shore, the fragrant scent of blooming flowers, and the gentle touch
        of a breeze on our skin. It reminds us of the intricacy and perfection
        in even the smallest details of the natural world.
      </p>
      <div className="m-10 grid grid-cols-3 gap-8 justify-around">
        {ImgData.map((card, index) => (
          <Card key={index} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default BeautyOfNature;
