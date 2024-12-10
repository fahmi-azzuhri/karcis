import React from "react";
function ButtonLogin(props) {
  const {
    firstname,
    toggleDropdown,
    isDropdownOpen,
    RiArrowDropDownLine,
    FaRegUser,
    handleSignout,
  } = props;

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex flex-row gap-1 items-center rounded-lg text-blueDefault bg-white px-4 py-2 "
      >
        <FaRegUser />
        <p className="font-semibold flex flex-row items-center">
          Halo, {firstname.toUpperCase()}
          <RiArrowDropDownLine
            className={`transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </p>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <ul className="py-1">
            <button className=" w-full flex flex-start hover:bg-gray-100 px-4 py-2 cursor-pointer">
              Profile
            </button>
            <button className=" w-full flex flex-start hover:bg-gray-100 px-4 py-2 cursor-pointer">
              My Ticket
            </button>
            <button
              onClick={handleSignout}
              className=" w-full flex flex-start hover:bg-gray-100 px-4 py-2 cursor-pointer"
            >
              Signout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ButtonLogin;
