import React, { useContext } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Data } from "./ContextApi/Context";
import ProgressBar from "./UtilitiesComponent/ProgressBar";
import ReviewCard from "./UtilitiesComponent/ReviewCard";

const Review = () => {
  const { Review, Rating, } = useContext(Data);
  return (
    <div className="px-24 max-sm:px-4 h-screen mt-12">
      <div className="flex items-center gap-1">
        <StarRateIcon />
        <span className="font-semibold text-xl">{Rating}</span>
        <span className="font-semibold text-xl">{Review}</span>
      </div>
      <ul className="grid grid-cols-2 gap-6 pt-2">
        <li className="grid grid-cols-2 gap-4">
          <span>Cleanliness</span>
          <ProgressBar progressPercentage="4.8" />
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span>Communication</span>
          <ProgressBar progressPercentage="4.9" />
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span>Checkin</span>
          <ProgressBar progressPercentage="4.7" />
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span>Accuracy</span>
          <ProgressBar progressPercentage="4.9" />
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span>Location</span>
          <ProgressBar progressPercentage="4.8" />
        </li>
        <li className="grid grid-cols-2 gap-4">
          <span>Value</span>
          <ProgressBar progressPercentage="5" />
        </li>
      </ul>
      <div className="">
      <ReviewCard/>
      <buttom className="border border-gray-900 px-4 py-2 bg-gray-100">Show more review</buttom>
    </div>
    <hr className="mt-12" />
    </div>
  );
};

export default Review;
