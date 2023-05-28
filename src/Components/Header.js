import React, { useState } from "react";
import SignProfile from "./UtilitiesComponent/SignProfile";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => { 
    setIsVisible(!isVisible);
  };
  return (
    <div className="header flex items-center justify-between p-4 shadow-lg shadow-blue-500/ px-24 max-sm:px-2">
      <div className="hed__left uppercase tracking-wide font-semibold text-xl text-pink-400">
        <h3>Airbnb</h3>
      </div>
      <div className="hed__mid flex items-center w-2/6 shadow-sm  px-4 h-14 rounded-full border border-slate-200">
        <input
          type="text" placeholder="Start your search"
          className="rounded-2xl p-2 w-full outline-none  "
        />
        <SearchIcon className="text-black-500 text-gray-500" />
      </div>
      <div className="hed__right flex items-center gap-6 max-sm:gap-2">
        <p className="font-semibold text-lg  text-gray-700">Airbnb your Home</p>
        <LanguageIcon  className="text-gray-700"/>

        <div
          className="profile flex items-center gap-6  p-2 rounded shadow-sm border border-slate-300 "
          onClick={toggleVisibility}
        >
          <MenuIcon className="text-gray-700" />
          <AccountCircleIcon  className="text-gray-700"/>
        </div>
        {isVisible && <SignProfile />}
      </div>
    </div>
  );
};

export default Header;
