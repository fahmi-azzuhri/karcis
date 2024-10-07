import React from "react";
import bg_home from "/img/bg/bg_home.png";
import SearchBar from "../../components/home/SearchBar";
import Events from "../../components/event";

function Home() {
  return (
    <>
      <div className="relative">
        <img src={bg_home} alt="Background" className="w-full h-auto" />
        <div className="absolute top-1/4 w-full text-center">
          <h1 className="text-5xl font-bold text-blueDefault">
            Exclusive events, priceless moments
          </h1>
        </div>
        <SearchBar />
      </div>
      <div className="p-7 mt-10 bg-white">
        <Events />
      </div>
    </>
  );
}
export default Home;
