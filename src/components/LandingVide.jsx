"use client";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

const LandingVide = () => {
  const [showVideo, setShowVideo] = useState(false);
  const handleOnClick = () => {
    setShowVideo(true);
  };

  const handleOverlayClick = () => {
    setShowVideo(false);
  };
  return (
    <div className="bg-[url(/video-item.jpg)] h-[calc(100vh-80px)] bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center relative">
      {!showVideo && (
        <div className="p-5 rounded-full bg-gray-100 absolute ">
          <CiPlay1
            className="text-black"
            size={30}
            onClick={() => handleOnClick()}
          />
        </div>
      )}
      {showVideo && (
        <div
          className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="w-1/3 h-1/2 border-2 border-white flex justify-center items-center">
            <video
              src={"/video1.mp4"}
              controls
              autoPlay
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingVide;
