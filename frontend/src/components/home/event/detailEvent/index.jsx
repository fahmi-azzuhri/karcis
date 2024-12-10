import React from "react";
import ViewDetailEvent from "../../../../views/home/event/detailEvent";
import { FaRegClock } from "react-icons/fa";
import { IoPeople, IoWarning } from "react-icons/io5";
function DetailEvent() {
  return (
    <ViewDetailEvent
      FaRegClock={FaRegClock}
      IoPeople={IoPeople}
      IoWarning={IoWarning}
    />
  );
}

export default DetailEvent;
