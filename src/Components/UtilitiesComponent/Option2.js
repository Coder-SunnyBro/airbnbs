import React from "react";

const Option2 = ( props) => {
  return (
    <div className="flex-1">
      <div className=" flex  gap-2 items-start p-6 rounded-xl text-lg h-24">
        <div className=" ">{props.iconComponent}</div>
        <div>
          <h3 className="font-bold text-gray-700">{props.title}</h3>
          <p className="text-base text-gray-500">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Option2;
