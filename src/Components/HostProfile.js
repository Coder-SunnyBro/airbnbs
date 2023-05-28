import React, { useState } from "react";
import Option from "./UtilitiesComponent/Option";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubIcon from "@mui/icons-material/Bathtub";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import HouseIcon from "@mui/icons-material/House";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import TvIcon from "@mui/icons-material/Tv";
import WifiIcon from "@mui/icons-material/Wifi";
import LockIcon from "@mui/icons-material/Lock";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import Option2 from "./UtilitiesComponent/Option2";
import Checkout from "./UtilitiesComponent/Checkout";
import MeetHost from "./MeetHost";
import PlaceOffer from "./PlaceOffer";
import { DateRange } from "react-date-range";

const HostProfile = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <>
      <div className="flex mx-20 max-sm:mx-6 gap-8  border-b-1">
        <div className="flex w-full">
          <div className=" w-8/12 max-sm:w-full p-4">
            <div className="flex items gap-36">
              <h3 className="text-2xl max-sm:text-lg font-semibold">
                Room in a rental unit hosted by Sagrario
              </h3>
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/user/b9c551db-9203-4f2c-9572-216ebe07e25c.jpg?im_w=240"
                  className="w-12 h-12 rounded-full mb-2"
                  alt="jhkjhjkj"
                />
              </div>
            </div>
            <div className="flex justify-between gap-4 ">
              <Option
                iconComponent={<BedOutlinedIcon />}
                title="1 double bed"
              />
              <Option iconComponent={<BathtubIcon />} title="Shared bathroom" />
              <Option
                iconComponent={<HouseIcon />}
                title="Host and other guests may be here"
              />
            </div>
            <hr className="mt-12" />
            <div className="flex-row justify-between gap-4 z-100  mt-4">
              <Option2
                iconComponent={<HomeWorkIcon />}
                title="Room in a rental unit"
                para="Your own room in a home, plus access to shared spaces."
              />
              <Option2
                iconComponent={<BedroomParentIcon />}
                title="Dedicated workspace"
                para="A room with wifi that’s well suited for working."
              />
              <Option2
                iconComponent={<LocalFireDepartmentIcon />}
                className="text-9xl"
                title="Sagrario is a Superhost"
                para="Superhosts are experienced, highly rated hosts who are committed to providing great stays for their guests."
              />
              <hr className="mt-12" />
              <MeetHost title="Meet Your Host" />
              <hr className="mt-12" />
              <div className="">
                <h3 className="py-2 font-semibold text-xl">
                  What this place offers
                </h3>
                <div className="grid grid-cols-2 py-6 gap-4">
                  <PlaceOffer iconComponent={<WifiIcon />} para="Wifi" />
                  <PlaceOffer iconComponent={<TvIcon />} para="TV" />
                  <PlaceOffer iconComponent={<BathtubIcon />} para="Bathroom" />
                  <PlaceOffer
                    iconComponent={<LockIcon />}
                    para="Lock on bedroom door"
                  />
                  <PlaceOffer
                    iconComponent={<LockIcon />}
                    para="Lock on bedroom door"
                  />
                  <PlaceOffer
                    iconComponent={<VideoCameraBackIcon />}
                    para="Security Camera"
                  />
                  <PlaceOffer
                    iconComponent={<LocalDiningIcon />}
                    para="Kichen"
                  />
                  <PlaceOffer
                    iconComponent={<SmokeFreeIcon />}
                    para="Smoke alarm"
                  />
                  <PlaceOffer
                    iconComponent={<LocalFireDepartmentIcon />}
                    para="Dedicated work place"
                  />
                  <PlaceOffer
                    iconComponent={<HomeWorkIcon />}
                    para="Dedicated work place"
                  />
                </div>
                <buttom className="border border-gray-900 px-4 py-2 bg-gray-100">
                  Show all
                </buttom>
              </div>
              <hr className="mt-12" />
            </div>
            <div className="mt-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  ">
              <h3 className="font-semibold text-xl">Select check in date</h3>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            </div>
          </div>
          <div className=" w-2/6 max-sm:hidden ">
            <Checkout className="" />
          </div>
        </div>
      </div>
      <hr className="mt-8" />
    </>
  );
};

export default HostProfile;
