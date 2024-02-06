import React from "react";

const ValentineCard: React.FC<{
  onYesClick: () => void;
  onNoClick: () => void;
}> = ({ onYesClick, onNoClick }) => {
  const handleNoHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const offset = 200; // Adjust this value according to your preference
    button.style.transform = `translate(${Math.random() * offset}px, ${
      Math.random() * offset
    }px)`;
  };

  const handleNoHoverEnd = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    button.style.transform = "none";
  };
  return (
    <div className="relative bg-cover bg-center h-[20rem] w-[40rem] mx-auto rounded-lg overflow-hidden sm:">
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        width="700"
        height="700"
        opacity="1"
      >
        <defs>
          <filter
            id="nnnoise-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="4"
              seed="15"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feSpecularLighting
              surfaceScale="8"
              specularConstant="0.6"
              specularExponent="20"
              lighting-color="#fff"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="specularLighting"
            >
              <feDistantLight azimuth="3" elevation="99"></feDistantLight>
            </feSpecularLighting>
          </filter>
        </defs>
        <rect width="700" height="700" fill="#dc77b0"></rect>
        <rect
          width="700"
          height="700"
          fill="#ffffff"
          filter="url(#nnnoise-filter)"
        ></rect>
      </svg>
      <div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-900 text-center">
          <h2 className="text-2xl font-bold mb-4">
            <h2 className="flex justify-start">Hello Baby,</h2>
            Will you be my Valentine ♡{" "}
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={onYesClick}
              className="bg-pink-900 text-white font-semibold border-2 border-pink-900 px-4 py-2"
            >
              Yes
            </button>
            <button
              onClick={onNoClick}
              className="bg-white text-pink-900 font-semibold border-2 border-pink-900 px-4 py-2"
              onMouseEnter={handleNoHover}
              onMouseLeave={handleNoHoverEnd}
              style={{ transition: "transform 0.2s ease" }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValentineCard;
