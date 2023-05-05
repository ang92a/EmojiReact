import React from "react";
import "./Button.css";

export const Button = ({ arr, btn, firstButtonIndex, lastButtonIndex }) => {
  return (
    <>
      {arr.slice(firstButtonIndex, lastButtonIndex).map((el, i) => (
        <button
          className="btn"
          key={i}
          onClick={() => {
            btn(i + 1);
          }}
        >
          {el}
        </button>
      ))}
    </>
  );
};
