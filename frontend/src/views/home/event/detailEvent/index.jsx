import React from "react";
import { DetailEventSocialMedia } from "../../../../components/socialMedia";
import Accrdions from "../../../../components/home/event/detailEvent/Accrdions";

function ViewDetailEvent(props) {
  const {
    data,
    formatDate,
    formatTime,
    calculateDuration,
    FaRegClock,
    IoPeople,
    IoWarning,
  } = props;
  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <DetailEventSocialMedia />
      <div className="bg-transparent shadow-lg rounded-lg overflow-hidden">
        <img
          src={`${import.meta.env.VITE_API_ENDPOINT}${data.imageUrl}`}
          alt={data.title}
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-gray-500 mt-2">
              <span>📍</span>
              {data.location}
            </p>
            <p className="text-gray-500 mt-1">
              <span role="img" aria-label="calendar">
                📅
              </span>
              {formatDate(data.date)}
            </p>
            <p className="text-gray-500 mt-1 sm:w-1/2 w-full">
              {data.description}
            </p>
          </div>

          <div className="w-full sm:w-1/3 text-center">
            <div className="bg-white border border-gray-300 rounded-lg p-6 shadow shadow-[17px_19px_6px_0px_rgba(0,_0,_0,_0.1)] shadow-[#0022BA]">
              <p className="text-blackDefault font-normal">
                Tickets starting at
              </p>
              <p className="text-xl md:text-md sm:text-xl font-semibold text-blackDefault">
                Rp {data.vipPrice?.toLocaleString() || "Price not available"}
              </p>
              <button className="mt-4 bg-blueDefault text-white px-4 py-2 rounded w-full">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="p-6 text-2xl font-semibold mt-8">Event Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6">
            <div className="flex flex-row space-x-2 items-center">
              <FaRegClock />
              <h3 className="text-xl font-semibold mt-1">Duration</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">
                {formatTime(data.startTime)} - {formatTime(data.endTime)}
              </p>
              <p className="text-gray-600">
                {calculateDuration(data.startTime, data.endTime)}
              </p>
            </div>
          </div>
          <div className="p-6 ">
            <div className="flex flex-row space-x-2 items-center">
              <IoPeople />
              <h3 className="text-xl font-semibold mt-1">Audience</h3>
            </div>
            <p className="text-gray-600">{data.audience}</p>
          </div>
          <div className="p-6">
            <div className="flex flex-row space-x-2 items-center">
              <IoWarning />
              <h3 className="text-xl font-semibold mt-1">Attention</h3>
            </div>
            <p className="text-gray-600">{data.attention}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 p-6">
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="text-gray-600 mt-4">{data.description}</p>
      </div>
      <Accrdions title="Terms & Conditions" desc="lorem" />
    </div>
  );
}

export default ViewDetailEvent;
