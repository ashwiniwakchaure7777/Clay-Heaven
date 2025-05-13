"use client";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";

const LandingVide = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOnClick = () => {
    setShowVideo(true);
  };

  const handleOverlayClick = (e) => {
    // Prevent closing if user clicks inside the video
    if (e.target.id === "video-overlay") {
      setShowVideo(false);
    }
  };

  return (
    <div className="bg-[url(/video-item.jpg)] h-[calc(100vh-80px)] bg-fixed bg-no-repeat bg-cover bg-center flex justify-center items-center relative px-4">
      {!showVideo && (
        <div
          className="p-5 rounded-full bg-white bg-opacity-80 shadow-md cursor-pointer hover:scale-110 transition"
          role="button"
          aria-label="Play video"
          onClick={handleOnClick}
        >
          <CiPlay1 className="text-black" size={36} />
        </div>
      )}

      {showVideo && (
        <div
          id="video-overlay"
          className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="w-full max-w-2xl aspect-video border-2 border-white shadow-lg rounded-md overflow-hidden">
            <video
              src="/video1.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingVide;
