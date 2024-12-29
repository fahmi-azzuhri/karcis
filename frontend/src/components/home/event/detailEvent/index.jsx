import React from "react";
import ViewDetailEvent from "../../../../views/home/event/detailEvent";
import { FaRegClock } from "react-icons/fa";
import { IoPeople, IoWarning } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import SkeletonLoading from "../../../../views/skeleton";
function DetailEvent() {
  const { id } = useParams();
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const { data, isFetching, isPending, error } = useQuery({
    queryKey: ["detail event", id],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/${type}/${id}`)
        .then((response) => response.data),
  });

  if (isFetching || isPending) {
    return <SkeletonLoading />;
  }
  if (!data || data.length === 0) {
    return <div>Event not found</div>;
  }
  if (error) {
    return <div>Error get detail event!</div>;
  }
  return (
    <ViewDetailEvent
      FaRegClock={FaRegClock}
      IoPeople={IoPeople}
      IoWarning={IoWarning}
      data={data}
      formatDate={formatDate}
    />
  );
}

export default DetailEvent;
