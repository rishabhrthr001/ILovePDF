import React, { useState } from "react";
import "../styles/NavBar.css"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-4 md:px-8 lg:px-24 ">
      <div className="flex items-center justify-between ">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden h-8 w-8 flex items-center justify-center text-red-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-red-600 cursor-pointer"
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
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-red-600 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {!isMenuOpen ? (<div className="flex items-center space-x-2">
          <h1 className="text-red-600 text-3xl font-bold lg:block">I</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          <h1 className="text-red-600 text-3xl font-bold lg:block">pdf</h1>
        </div>):(null)}
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row justify-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 mt-4 md:mt-0 items-center`}
      > 
        <a
          href="#home"
          className="text-black hover:text-red-400  lg:text-sm"
        >
          HOME
        </a>
        <a
          href="#tools"
          className="text-black hover:text-red-400  lg:text-sm"
        >
          TOOLS
        </a>
        <a
          href="#about"
          className="text-black hover:text-red-400  lg:text-sm"
        >
          ABOUT
        </a>
        <a
          href="#contact"
          className="text-black hover:text-red-400 lg:text-sm"
        >
          CONTACT
        </a>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:text-red-500 lg:text-sm">
          GET STARTED
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 lg:text-sm">
          TRY FOR FREE
        </button>
      </div>
    </header>
  );
};

export default Header;
