import React from "react";

function ViewUpcomingEvent(props) {
  const { settings, events, Slider, formatDate } = props;
  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={`${import.meta.env.VITE_API_ENDPOINT}${event.imageUrl}`}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <div className="flex">
                  <div className="w-1/3 flex items-center justify-center  rounded-lg">
                    <span className="text-lg font-bold text-gray-700">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  <div className="w-2/3 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title.substring(0, 15)} ...
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.location}
                    </p>
                    <div className="text-sm text-gray-700 font-medium mt-1">
                      {`Rp. ${event.vipPrice.toLocaleString()}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ViewUpcomingEvent;
