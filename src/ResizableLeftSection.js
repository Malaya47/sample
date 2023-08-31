import React, { useState } from "react";
import "./ResizableLeftSection.css";

const ResizableLeftSection = () => {
  const [width, setWidth] = useState(336);

  const handleResize = (e) => {
    setWidth(e.clientX);
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
    <div className="resizable-left-section" style={{ width: width }}>
      <div className="resizer-left" onMouseDown={handleMouseDown}></div>

      <div className="wrapper">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      {/* Add content for the resizable left section */}
    </div>
  );
};

export default ResizableLeftSection;
