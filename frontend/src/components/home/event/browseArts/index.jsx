import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewBrowseArts from "../../../../views/home/event/browseArts";
import SettingsSlider from "../settingsSlider";
function BrowseArts() {
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

  return <ViewBrowseArts settings={settings} cards={cards} Slider={Slider} />;
}

export default BrowseArts;
