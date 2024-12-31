import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewBrowseArts from "../../../../views/home/event/browseArts";
import SettingsSlider from "../settingsSlider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoading from "../../../../views/skeleton";
function BrowseArts() {
  const settings = SettingsSlider();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const {
    data: arts,
    isFetching,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["browse arts"],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/arts`)
        .then((res) => res.data),
  });

  if (isFetching || isLoading) {
    return <SkeletonLoading />;
  }

  if (error) {
    return <div>Error loading arts!</div>;
  }

  if (!arts || arts.length === 0) {
    return (
      <div className="text-center text-gray-500">No browse arts found.</div>
    );
  }

  return (
    <ViewBrowseArts
      settings={settings}
      Slider={Slider}
      arts={arts}
      formatDate={formatDate}
    />
  );
}

export default BrowseArts;
