import React from "react";
import "./Button.css";

export const Button = ({
  arr,
  btn,
  firstButtonIndex,
  lastButtonIndex,
  currentNumber,
  setCurrentNumber,
}) => {
  console.log(firstButtonIndex);
  return (
    <>
      <button
        className="btn"
        onClick={() => setCurrentNumber((currentNumber = 1))}
      >
        &lt;&lt;
      </button>
      <button
        className="btn"
        onClick={() => setCurrentNumber(currentNumber - 1)}
      >
        &#60;
      </button>
      {arr.slice(firstButtonIndex, lastButtonIndex).map((el, i) => (
        <button
          className={currentNumber === el ? "active" : "btn"}
          key={i}
          onClick={() => {
            setCurrentNumber(el);
          }}
        >
          {el}
        </button>
      ))}
      <button
        className="btn"
        onClick={() => setCurrentNumber(currentNumber + 1)}
      >
        &#62;
      </button>
      <button className="btn" onClick={() => setCurrentNumber(arr.length - 1)}>
        &gt;&gt;
      </button>
    </>
  );
};
