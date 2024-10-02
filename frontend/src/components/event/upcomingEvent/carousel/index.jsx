import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Carousels from "../../../../views/upcomingEvent/carousel";

function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return <Carousels settings={settings} cards={cards} Slider={Slider} />;
}

export default Carousel;
