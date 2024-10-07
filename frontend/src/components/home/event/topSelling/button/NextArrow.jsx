import React from "react";
function NextArrow(props) {
  const { IoIosArrowForward, style, onClick } = props;
  return (
    <div
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-800 border border-gray-500 rounded-full p-2 cursor-pointer`}
      style={{ ...style }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

export default NextArrow;
