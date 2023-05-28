import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LightIcon from "@mui/icons-material/Light";

import Option3 from "./UtilitiesComponent/Option3";
import Option from "./UtilitiesComponent/Option";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';

const MeetHost = ({ title }) => {
  return (
    <div className="mt-8 text-xl font-semibold max-sm:w-full">
      <h3 className="py-4">{title}</h3>
      <div className="flex flex-col items-center justify-between bg-gray-100 p-8 rounded-2xl">
        <div className="flex items-center justify-evenly p-4 w-4/6 max-sm:w-full shadow-sm shadow-gray-500 rounded-2xl bg-white">
          <div>
            <img
              src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
              className="w-28 h-28 rounded-full mb-2"
              alt=""
            />
            <div>
              <h1 className="text-3xl">Sagrario</h1>
              <span className="text-sm">
                <LocalFireDepartmentIcon /> Superhost
              </span>
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-col">
              <i className="font-bold">313</i>
              <i className="text-sm">Reviews</i>
            </div>
            <hr />
            <div className="flex flex-col">
              <i className="font-bold">
                4.86 <StarOutlineIcon />
              </i>
              <i className="text-sm"> Rating</i>
            </div>
            <hr />

            <div className="flex flex-col">
              <i className="font-bold">7</i>
              <i className="text-sm">Years hosting</i>
            </div>
            <hr />
          </div>
        </div>
        <div className=" flex flex-col  items-start justify-center mx-24 max-sm:mx-6 py-4 border-b border-gray-300">
          <Option3
            iconComponent={<SchoolIcon />}
            para="Where I went to school: Universidad de Psicología en Valencia"
          />
          <Option3 iconComponent={<WorkIcon />} para="My work: coach" />
          <Option3
            iconComponent={<LightbulbIcon />}
            para="Fun fact: No one believes my age"
          />
          <Option3
            iconComponent={<AutoAwesomeIcon />}
            para="What makes my home unique: Good energy and feeling at home"
          />
          <Option3
            iconComponent={<LightIcon />}
            para="For guests, I always: Help them enjoy Valencia"
          />
          <p className="font-normal text-base">
            Open and communicative, with donation of people and happy to welcome
            friends from the world at home.
          </p>
          <div className="flex flex-col items-start gap-4 mt-4 underline cursor-ponter">
            <button className="text-base">Show More...</button>
            <button className="font-semibold bg-grar-300 text-gray-50 bg-black p-2 rounded ">
              Message host
            </button>
          </div>
        </div>
        <p className="my-4 px-24 font-normal text-sm text-slate-500">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
      </div>
      <div className="my-8 flex flex-col gap-5">
        <div>
            <h3 className=" text-2xl mb-4">About this place</h3>
            <p className=" font-normal text-base">Beautiful room, spacious and bright, with balcony. In his heart, in the very center of the city.</p>
        </div>
        <div>
            <h3 className="text-xl text-semibold mb-4">The space</h3>
            <p className=" font-normal text-base">Beautiful room, spacious and bright, with balcony. In his heart, in the very center of the city.</p>
        </div>
        <div>
        <button className="text-base underline cursor-pointer">Show More...</button>
        </div>
      </div>
      <hr />
      <div className="my-8 py-4">
        <div className="my-4">
          <h3 className="text-2xl">Where you'll sleep</h3>
        </div>
        <div className="w-2/6 ">
        <Option  iconComponent={<BedOutlinedIcon/>} title=" 1 bedroom 1 double bed"/>
        </div>
      </div>
      
    </div>
  );
};

export default MeetHost;
