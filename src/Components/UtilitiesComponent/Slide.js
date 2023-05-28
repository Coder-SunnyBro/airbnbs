import CancelIcon from '@mui/icons-material/Cancel';
import React, { useState } from 'react';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const Slide = ({ onClose, images }) => {
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleMove = (direction) => { 
    let newSliderNumber;

    if (direction === "left") {
      newSliderNumber = sliderNumber === 0 ? images.length - 1 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === images.length - 1 ? 0 : sliderNumber + 1;
    }
    setSliderNumber(newSliderNumber);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="flex items-center justify-center w-95 h-95 max-sm:h-1/2 border fixed top-12 border-gray-300 bg-slate-50 shadow shadow-slate-500  inset-x-12 inset-y-12 rounded-lg z-50 ">
      <CancelIcon
        onClick={handleClose}
        className="text-slate-500 absolute right-4 top-4 "
        
      />
      <div className="flex items-center justify-center h-2/3 w-2/3 bg-opacity-100 rounded-lg">
        <img src={images[sliderNumber]} alt="Slider" className="object-cover" />
      </div>
      <ArrowBackIosNewTwoToneIcon
        onClick={() => handleMove("left")}
        className="absolute top-50 left-16 max-sm:left-8 text-6xl text-gray-300 hover:text-gray-700"
        style={{ fontSize: '2rem' }}
      />
      <ArrowForwardIosTwoToneIcon
        onClick={() => handleMove("right")}
        className="absolute top-50 right-16 max-sm:right-8 text-6xl text-gray-300 hover:text-gray-700"
        style={{ fontSize: '2rem' }}
      />
    </div>
  );
};

export default Slide;
