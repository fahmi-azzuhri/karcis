import React, { useState } from "react";
import { IconButton, Collapse } from "@material-tailwind/react";
import logo_karcis from "/img/logo/logo_karcis.png";
import AppRoutes from "./routes";
function App() {
  const [openNav, setOpenNav] = useState(false);
  const textNavbar = [
    "Concerts",
    "Arts",
    "Conference",
    "Movies",
    "International",
  ];
  const navList = (
    <ul className="mt-2 flex flex-col text-white gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {textNavbar.map((item, index) => (
        <li key={index} className="p-1 text-blackDefault font-bold">
          <button>{item}</button>
        </li>
      ))}
    </ul>
  );
  return (
    <>
      <nav className="sticky top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white rounded-lg border border-gray-300">
        <div className="flex items-center justify-between">
          <img
            src={logo_karcis}
            className=" sm:h-8 md:h-12 lg:h-16 w-auto"
            alt=""
          />
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
          <button className="rounded-lg bg-blueDefault text-white px-5 py-2 hover:bg-blueDarkest">
            Login
          </button>
        </div>

        <Collapse open={openNav} className="lg:hidden">
          {openNav && <div className="block lg:hidden">{navList}</div>}
        </Collapse>
      </nav>

      <div>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
