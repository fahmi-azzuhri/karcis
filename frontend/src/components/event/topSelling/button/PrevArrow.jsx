import React from "react";

function PrevArrow(props) {
  const { IoIosArrowBack, style, onClick } = props;
  return (
    <div
      className={` absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-800 border border-gray-500 rounded-full p-2 z-10 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

export default PrevArrow;
