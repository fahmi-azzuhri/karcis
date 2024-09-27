import React from "react";
import bg_home from "/img/bg/bg_home.png";
function Home() {
  return (
    <div className="relative">
      {/* Image Background */}
      <img src={bg_home} alt="" className="w-full h-auto" />

      {/* Text Overlay */}
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-4xl font-bold text-blueDefault">
          Exclusive events, priceless moments
        </h1>
      </div>
    </div>
  );
}
export default Home;
