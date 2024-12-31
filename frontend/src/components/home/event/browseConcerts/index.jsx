import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewBrowseConcerts from "../../../../views/home/event/browseConcerts";
import SettingsSlider from "../settingsSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoading from "../../../../views/skeleton";
function BrowseConcerts() {
  const settings = SettingsSlider();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };
  const {
    data: concerts,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["browse concerts"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/concerts`)
        .then((res) => res.data),
  });

  if (isFetching || isLoading) {
    return <SkeletonLoading />;
  }
  if (error) {
    return <div>Error loading concerts!</div>;
  }

  if (!concerts || concerts.length === 0) {
    return (
      <div className="text-center text-gray-500">No browse concerts found.</div>
    );
  }
  return (
    <ViewBrowseConcerts
      settings={settings}
      concerts={concerts}
      Slider={Slider}
      formatDate={formatDate}
    />
  );
}

export default BrowseConcerts;
