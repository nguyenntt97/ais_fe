import React from "react";
import LangBtn from "./LangBtn";
import NavButton from "./NavButton";
import { AboutIcon, BlogIcon, HomeIcon, InternalIcon, ResearchIcon } from "./SvgIcons";

export default function NavBarCore(props) {
  let mobileMenu = React.createRef();
  let menuColor = props.color? props.color : 'transparent';

  return (
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" className="flex items-center ml-3">
        <img
          src="https://img.upanh.tv/2022/05/05/unnamed__1_-removebg-preview.png"
          className="h-6"
          alt="AIS Logo"
        />
        <span className="self-center text-xl text-gray-200 font-semibold whitespace-nowrap dark:text-white">
          AIS Lab.
        </span>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        onClick={() => {
          mobileMenu.current.classList.toggle("hidden");
        }}
        type="button"
        className="inline-flex items-center p-2 mx-3 text-sm text-white rounded-lg md:hidden hover:text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        className={`hidden bg-${menuColor} w-full md:block md:w-auto`}
        id="mobile-menu"
        ref={mobileMenu}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <NavButton name={"Home"} icon={HomeIcon} href={'/'}/>
          <NavButton name={"News"} icon={BlogIcon} href={'/news'}/>
          <NavButton name={"Research"} icon={ResearchIcon} href={'/research'}/>
          <NavButton name={"About"} icon={AboutIcon} href={'/about'}/>
          <NavButton name={"Internal"} icon={InternalIcon} href={'/internal/admin'}/>
          <div className="flex space-x-2 justify-center content-center py-2">
            <button
              type="button"
              className="inline-block px-5 py-0.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-gray-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Apply
            </button>
          </div>
          <LangBtn langs={['EN', 'JP', 'VN']} cur_lang={0}/>
        </ul>
      </div>
    </div>
  );
}
