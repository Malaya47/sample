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
      <nav className="navigation-bar"></nav>
      <div className="button-section">
        <button onClick={handleSaveClick} className="save-button">
          Save
        </button>
      </div>
      {popupVisible && <DraggablePopup onClose={handleClosePopup} />}
      <div className="sections">
        <ResizableLeftSection />
        <ResizableRightSection />
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default App;
