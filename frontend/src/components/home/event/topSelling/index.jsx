import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewTopSelling from "../../../../views/home/event/topSelling";
import SettingsSlider from "../settingsSlider";
function TopSelling() {
  const settings = SettingsSlider();

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

  return <ViewTopSelling settings={settings} cards={cards} Slider={Slider} />;
}

export default TopSelling;
