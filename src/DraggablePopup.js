import React, { useState } from "react";
import "./DraggablePopup.css"; // Create this CSS file for styling
import CloseIcon from "@mui/icons-material/Close";

const DraggablePopup = ({ onClose }) => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      className="draggable-popup"
      style={{ top: position.y, left: position.x }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="popup-header" onMouseDown={handleMouseDown}>
        <span>Yeah you can drag me anywhere!!</span>
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <div className="popup-content">
        <p>I am the content!!</p>
        {/* Add your popup content here */}
      </div>
    </div>
  );
};

export default DraggablePopup;
