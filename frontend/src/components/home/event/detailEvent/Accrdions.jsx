import React, { useState } from "react";

function Accordion(props) {
  const { title, desc } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = () => {
    setActiveIndex(activeIndex === 0 ? null : 0);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="border-gray-300 mb-4 rounded border">
        <div
          className="accordion-header bg-gray-100 font-semibold cursor-pointer px-4 py-2"
          onClick={handleClick}
        >
          {title}
        </div>
        <div
          className={`accordion-content bg-white px-4 pb-4 pt-2 ${
            activeIndex === 0 ? "block" : "hidden"
          }`}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
