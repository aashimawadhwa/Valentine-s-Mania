
import React from "react";
import GIF from "../assets/gif.gif";
const gif: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center bg-white h-[20rem] w-[40rem] mx-auto rounded-lg overflow-hidden">
   <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={GIF}
        alt="Valentine GIF"
      />

    </div>
  );
};

export default gif;
