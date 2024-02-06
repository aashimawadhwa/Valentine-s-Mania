import React, { useState } from "react";
import ValentineCard from "./components/valentineCard";
import GIF from "./components/gif";
const App: React.FC = () => {
  const [showYes, setShowYes] = useState(true);

  const handleYesClick = () => {
    setShowYes(false);
  };

  const handleNoClick = () => {
    setShowYes(true);
  };

  return (
    <div className="bg-gradient-to-b from-pink-400 to-pink-700 h-screen flex flex-col items-center justify-center">
      {showYes ? (
        <ValentineCard onYesClick={handleYesClick} onNoClick={handleNoClick} />
      ) : (
        <GIF />
      )}
    </div>
  );
};

export default App;
