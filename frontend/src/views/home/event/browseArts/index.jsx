import React from "react";
import { Link } from "react-router-dom";

function ViewBrowseArts(props) {
  const { settings, Slider, arts, formatDate } = props;
  return (
    <div className="max-w-screen-2xl mx-auto p-8">
      <Slider {...settings}>
        {arts.map((art, index) => (
          <div key={index} className="px-4">
            <Link to={`/arts/${art.id}`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={`${import.meta.env.VITE_API_ENDPOINT}${art.imageUrl}`}
                  alt={art.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex">
                    <div className="w-1/3 flex items-center justify-center  rounded-lg">
                      <span className="text-lg font-bold text-gray-700">
                        {formatDate(art.date)}
                      </span>
                    </div>

                    <div className="w-2/3 pl-4">
                      <p className="text-md font-semibold text-gray-900">
                        {art.title}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {art.location}
                      </p>
                      <div className="text-sm text-gray-700 font-medium mt-1">
                        {`Rp. ${art.vipPrice.toLocaleString()}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ViewBrowseArts;
