import React from "react";
function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <button
      type="button"
      className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 slick-next`}
      style={{ ...style }}
      onClick={onClick}
    ></button>
  );
}

export default NextArrow;
