import React from "react";

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      type="button"
      className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 slick-prev`}
      style={{ ...style }}
      onClick={onClick}
    ></button>
  );
}

export default PrevArrow;
