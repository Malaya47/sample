import React, { useState } from "react";
import "./ResizableLeftSection.css";

const ResizableLeftSection = () => {
  const [width, setWidth] = useState(300);

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
      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <div className="wrapper">
        <div className="box">box1</div>
        <div className="box">box2</div>
        <div className="box">box3</div>
        <div className="box">box4</div>
        <div className="box">box4</div>
      </div>
      {/* Add content for the resizable left section */}
      <p>Left</p>
    </div>
  );
};

export default ResizableLeftSection;
