import React from "react";

function ViewUpcomingEvent(props) {
  const { settings, events, Slider } = props;
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
                <h3 className="text-lg font-bold">{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ViewUpcomingEvent;
