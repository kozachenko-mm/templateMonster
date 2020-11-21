import React, { useRef, useEffect } from "react";
import style from "./Modal.module.css";

const Modal = ({ imageUrl, onClose }) => {
  const backdropRef = useRef(null);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
  });
  const handleKeyPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    onClose();
  };
  const handleBackdropClick = ({ target }) => {
    const { current } = backdropRef;
    if (current && target !== current) return;
    onClose();
  };
  return (
    <div>
      <div
        className={style.backdrop}
        ref={backdropRef}
        onClick={handleBackdropClick}
        role="presentation"
      >
        <div className={style.modal}>
          <img src={imageUrl} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
