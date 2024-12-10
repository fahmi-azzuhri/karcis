import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewBrowseConcerts from "../../../../views/home/event/browseConcerts";
import SettingsSlider from "../settingsSlider";
function BrowseConcerts() {
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

  return (
    <ViewBrowseConcerts settings={settings} cards={cards} Slider={Slider} />
  );
}

export default BrowseConcerts;
