import React, { useState } from "react";

function ReadMore({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  return (
    <span>
      {isExpanded ? text : `${text.substring(0, maxLength)}... `}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blueDefault font-semibold"
      >
        {isExpanded ? "Lihat lebih sedikit" : "Lihat selengkapnya"}
      </button>
    </span>
  );
}

export default ReadMore;
