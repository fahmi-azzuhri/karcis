import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow IoIosArrowForward={IoIosArrowForward} />,
    prevArrow: <PrevArrow IoIosArrowBack={IoIosArrowBack} />,
    swipe: true,
  };

  const cards = [
    {
      image: "https://via.placeholder.com/300",
      text: "Card 1",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Card 2",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Card 3",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Card 4",
    },
    {
      image: "https://via.placeholder.com/300",
      text: "Card 5",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card.image}
                alt={card.text}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{card.text}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
