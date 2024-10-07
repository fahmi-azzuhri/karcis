import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import NextArrow from "./button/NextArrow";
import PrevArrow from "./button/PrevArrow";
import ViewBrowseArts from "../../../../views/home/event/browseArts";

function BrowseArts() {
  const settings = {
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow IoIosArrowForward={IoIosArrowForward} />,
    prevArrow: <PrevArrow IoIosArrowBack={IoIosArrowBack} />,
    swipe: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

  return <ViewBrowseArts settings={settings} cards={cards} Slider={Slider} />;
}

export default BrowseArts;
