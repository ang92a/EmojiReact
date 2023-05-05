import React from "react";
import "./Button.css";

export const Button = ({ arr, btn }) => {

  return (
    <>
      {arr.map((el, i) => (
        <button className="btn" key={i} onClick={() => { btn(i + 1) }}>
          {el}
        </button>
      ))}
    </>
  );
};
