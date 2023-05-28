import React, { useContext, useState } from "react";
import { Data } from "../ContextApi/Context";
import { DateRange } from "react-date-range";

const Checkout = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const { Rating, Review, addprice } = useContext(Data);

  return (
    
    <div className=" flex flex-col items-start w-full justify-center shadow-sm shadow-gray-500 p-4 rounded-2xl sticky top-44 max-sm:hidden" >
      <div className=" py-4 ">
        <h3 className="text-2xl font-semibold">{addprice}</h3>
        <div className="flex gap-4">
          <p className="font-semibold">{Rating}</p>
          <p className="underline">{Review}</p>
        </div>
      </div>
      <div className=" border rounded w-full">
        <div className="flex">

        <div className=" flex flex-col  border w-full border-xl text-xs font-semibold p-2" onClick={toggleVisibility}>CheckIn
        <span className="text-gray-400 font-thin">Add date</span>
        </div>
        <div className=" flex flex-col border w-full border-xl text-xs p-3 font-semibold focus:border-gray-400" onClick={toggleVisibility}>CheckOut
         <span className="text-gray-400 font-thin">Add date</span>
        </div>
        </div>
        <div className="border w-full text-left  border-xl text-xs font-semibold p-3">Guests
        <span className=" flex text-gray-400 font-thin">1 guest</span>
        </div>
      </div>
      <button className=" text-lg w-full border py-4 rounded-md bg-pink-600 text-white">
        Check Availability
      </button>
      {visible && (
        <DateRange 
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      )}
    </div>
  );
};

export default Checkout;
