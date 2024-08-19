import React from "react";
import Card from "./Card";
import img1 from "../images/nature/1.jpg";
import img2 from "../images/stars/1.jpg";
import img3 from "../images/beauty/1.jpg";

const cardData = [
  { title: "Stars and Trees", href: "/stars-and-trees", img: img2 },
  { title: "Walk with Nature", href: "/walk-with-nature", img: img1 },
  { title: "Beauty of Nature Speaks", href: "/beauty-of-nature", img: img3 },
];

const Home = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-red-600 text-4xl mt-5">Explore Nature</h1>
      <p className="text-lg text-center text-gray-500 mt-2 px-10">
        Exploring nature offers a profound connection to the world around us,
        revealing the intricate beauty and diversity of our planet. Whether
        wandering through dense forests, climbing majestic mountains, or
        strolling along serene beaches, nature invites us to discover its
        wonders. Each landscape tells a unique story, from the rustling leaves
        of ancient trees to the rhythmic flow of rivers. Immersing ourselves in
        these natural environments not only revitalizes the spirit but also
        fosters a deep appreciation for the delicate balance of ecosystems that
        sustain life.
      </p>
      <div className="m-10 flex gap-8 justify-around">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            href={card.href}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
