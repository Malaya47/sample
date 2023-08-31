import React, { useState } from "react";
import ResizableLeftSection from "./ResizableLeftSection";
import ResizableRightSection from "./ResizableRightSection";
import DraggablePopup from "./DraggablePopup";
import "./App.css";

const App = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSaveClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <nav className="navigation-bar">This is navigation bar!!</nav>
      <button onClick={handleSaveClick}>Save</button>
      {popupVisible && <DraggablePopup onClose={handleClosePopup} />}
      <div className="sections">
        <ResizableLeftSection />
        <ResizableRightSection />
      </div>
    </div>
  );
};

export default App;
