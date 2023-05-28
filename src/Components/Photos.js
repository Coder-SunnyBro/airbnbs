import React, { useContext, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Slide from "./UtilitiesComponent/Slide";
import { Data } from "./ContextApi/Context";

const Photos = () => {
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setLike(!like);
  };
  const [slide, setSlide] = useState(false);
  const handleSlide = () => {
    setSlide(!slide);
  };
  const imageUrls = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/32ad0798-91c7-4e4c-a0d7-29d2e439b17d.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960",
  ];
  const singleimage = [
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/0eb18b3d-9bca-4e1c-bb84-15101b07832b.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/25c9d6ce-8ee6-43dd-b396-04fcdb348ca3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/32ad0798-91c7-4e4c-a0d7-29d2e439b17d.jpeg?im_w=720",
    // "https://a0.muscache.com/im/pictures/miso/Hosting-11579006/original/8d05d373-a593-4ff7-8276-7c76d56d1346.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/588f1370-e1d4-460e-aff5-09ab5eac685e.jpg?im_w=720",
  ];

  const handleCloseSlide = () => {
    setSlide(false);
  };
  const { Rating, Review } = useContext(Data);

  return (
    <div className="room p-10 mx-12 max-sm:mx-1 ">
      <div className="room__title text-3xl max-sm:text-xl p-2">
        <h3 className="text-black font-bold text-left">
          Historic Valencia awaits you ... HERE.
        </h3>
      </div>
      <div className="right-data flex items-center justify-between">
        <div className="room__Review flex items-center gap-1 text-lg max-sm:text-base">
          <StarOutlineIcon />
          <span className="underline max-sm:text-sm ">
            {Rating} {Review}
          </span>
          <WhatshotIcon />
          <span>Superhost:</span>
          <span className="max-sm:text-sm">
            València, Comunidad Valenciana, Spain
          </span>
        </div>

        <div className="room__sharsave flex gap-2 max-sm:hidden">
          <div className="share flex gap-1">
            <IosShareIcon />
            <span>Share</span>
          </div>
          <div className="save flex gap-1 cursor-pointer" onClick={handleClick}>
            {like ? <FavoriteBorderIcon /> : <HeartBrokenIcon />}
            <span>Save</span>
          </div>
        </div>
      </div>

      <div className="room__images sm:block md:flex sm:w-full gap-x-2 py-2">
        <div className="column w-4/5 max-sm:w-full relative">
          <img src={imageUrls[0]} alt="photo1" className="hover:shadow-sm" />
          <div className="absolute inset-0 bg-black  opacity-0 hover:opacity-50"></div>
        </div>

        <div className="column grid grid-cols-2 w-4/5 max-sm:w-full gap-x-2 gap-y-2 relative">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className="relative">
              <img
                src={imageUrl}
                alt={`phot${index + 2}`}
                className="hover:shadow-sm"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50"></div>
            </div>
          ))}
          <div className=" flex items-center justify-center rounded absolute right-4 bottom-4 bg-white font-semibold p-3 border-black">
            <FullscreenIcon />
            <button onClick={handleSlide}>Show more photos</button>
          </div>
        </div>
      </div>
      {slide && <Slide images={singleimage} onClose={handleCloseSlide} />}
    </div>
  );
};

export default Photos;
