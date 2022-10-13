import React from "react";
import "./CommonButton.css";

export const CommonButton = (click, text) => {
  return (
    <>
      <button className="button" onClick={click}>
        {text}
      </button>
    </>
  );
};