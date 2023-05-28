import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { Data } from "./ContextApi/Context";

const Navbar = () => {

  const{Review, Rating} = useContext(Data)
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 600) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${showNavbar ? "visible" : "hidden"} ${showNavbar ? "sticky top-0 z-30" : ""}`}>
      <nav
        className="flex items-center justify-between px-24 md:px-2 max-sm:px-2 py-4 shadow-sm shadow-gray-300 border bg-white "
      > 
        <ol className="flex items-center gap-8 text-sm ">
          <li className="hover:underline cursor-pointer">Photos</li>
          <li className="hover:underline cursor-pointer">Amenities</li>
          <li className="hover:underline cursor-pointer">Reviews</li>
          <li className="hover:underline cursor-pointer">Location</li>
        </ol>
        <div className="flex items-center gap-12 ">
          <div className="max-sm:hidden">
            <h3 className="text-lg  ">Add dates for prices</h3>
            <span className="underline">
              {Rating} {Review}
            </span>
          </div>
          <button className="border px-8 py-4 rounded-md bg-pink-600 text-white">
            Check Availability
          </button>
        </div>
      </nav>
              
    </div>
  );
};
export default Navbar;
