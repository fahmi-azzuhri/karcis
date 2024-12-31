import React from "react";
import ViewDetailEvent from "../../../../views/home/event/detailEvent";
import { FaRegClock } from "react-icons/fa";
import { IoPeople, IoWarning } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import SkeletonLoading from "../../../../views/skeleton";
import dayjs from "dayjs";
function DetailEvent() {
  const { id } = useParams();
  const location = useLocation();
  const type = location.pathname.split("/")[1];
  const formatDate = (dateString) => {
    return dayjs(dateString).format("DD/MM/YYYY");
  };
  const formatTime = (time) => {
    return dayjs(time).format("HH:mm");
  };
  const calculateDuration = (startTime, endTime) => {
    const start = dayjs(startTime);
    const end = dayjs(endTime);
    const duration = end.diff(start, "minute");

    const hour = Math.floor(duration / 60);
    const minute = duration % 60;

    return `${hour}h ${minute}m`;
  };

  const { data, isFetching, isLoading, error } = useQuery({
    queryKey: [type, id],
    queryFn: async () =>
      await axios
        .get(`${import.meta.env.VITE_API_ENDPOINT}/api/${type}/${id}`)
        .then((response) => response.data),
  });

  if (isFetching || isLoading) {
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
      formatTime={formatTime}
      calculateDuration={calculateDuration}
    />
  );
}

export default DetailEvent;
