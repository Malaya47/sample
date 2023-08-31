import React, { useState } from "react";
import "./ResizableRightSection.css"; // Create this CSS file for styling

const ResizableRightSection = () => {
  const [width, setWidth] = useState(300);

  const handleResize = (e) => {
    setWidth(window.innerWidth - e.clientX);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="resizable-right-section" style={{ width: width }}>
      <div className="resizer" onMouseDown={handleMouseDown}></div>
      <p>Right section</p>
      {/* Add content for the resizable right section */}
    </div>
  );
};

export default ResizableRightSection;
