import React, { useContext } from "react";
import { Data } from "../ContextApi/Context";

const ReviewCard = () => {
  const { ReviewData } = useContext(Data);

  return (
    <div className=" py-4 gap-2 grid grid-cols-2">
      {ReviewData.map((item) => (
        <div className="px-2 py-4 "key={item.id}>
          <div className="flex items-center gap-2" >
            <div className=" w-12 h-12 bg-black rounded-3xl">
              <img src={item.imageSrc} alt="" className="w-full h-full object-cover rounded-3xl" />
 
            </div>
            <div className="">
              <h3 className="font-semibold">{item.name}</h3>
              <span className="font-normal text-gray-400 text-sm">{item.date}</span>
            </div>
          </div>
            <p className="pt-4 max-sm:text-sm">{item.para}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
