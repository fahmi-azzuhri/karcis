import React from "react";

function ViewSidebar(props) {
  const {
    handleSignout,
    isActiveHome,
    isActiveEvent,
    isActiveConcert,
    isActiveArt,
    HiHome,
    MdEvent,
    CiLogout,
    navigate,
  } = props;
  return (
    <div className="bg-white w-full lg:w-64 min-h-screen p-4 flex flex-col shadow-lg rounded-2xl m-4">
      <h2
        onClick={() => navigate("/admin/dashboard/home")}
        className="text-2xl font-semibold mb-8 text-blueDefault text-center cursor-pointer"
      >
        Karcis.com
      </h2>
      <ul className="space-y-2">
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/home")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveHome && "bg-blueDefault text-white"
            }`}
          >
            <HiHome />
            Dashboard
          </button>
        </li>
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/events")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveEvent && "bg-blueDefault text-white"
            }`}
          >
            <MdEvent />
            Event
          </button>
        </li>
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/concerts")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveConcert && "bg-blueDefault text-white"
            }`}
          >
            <MdEvent />
            Concert
          </button>
        </li>
        <li className="font-medium">
          <button
            onClick={() => navigate("/admin/dashboard/arts")}
            className={`flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2 ${
              isActiveArt && "bg-blueDefault text-white"
            }`}
          >
            <MdEvent />
            Art
          </button>
        </li>

        <li className="font-medium">
          <button
            onClick={handleSignout}
            className="flex items-center p-3 text-gray-700 hover:bg-blueDefault hover:text-white rounded-lg w-full gap-2"
          >
            <CiLogout />
            Sign out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ViewSidebar;
