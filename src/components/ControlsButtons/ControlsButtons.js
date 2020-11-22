import React from "react";
import styles from "./ControlsButtons.module.css";

const ControlsButtons = ({ numberPage, handleButtons }) => {
  return (
    <div className={styles.controls}>
      <button
        className={styles.button}
        type="button"
        name="prev"
        onClick={handleButtons}
        disabled={numberPage <= 1}
      >
        prev
      </button>
      <span className={styles.numberPage}>{numberPage}</span>
      <button className={styles.button} type="button" name="next" onClick={handleButtons}>
        next
      </button>
    </div>
  );
};

export default ControlsButtons;
