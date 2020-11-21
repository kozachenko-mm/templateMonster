import React from "react";

const ControlsButtons = ({ numberPage, handleButtons }) => {
  return (
    <div>
      {numberPage > 1 && (
        <button className={''} type="button" name="prev" onClick={handleButtons}>
          Prev
        </button>
      )}
      <span>{numberPage}</span>
      <button className={''} type="button" name="next" onClick={handleButtons}>
        Next
      </button>
    </div>
  );
};

export default ControlsButtons;
