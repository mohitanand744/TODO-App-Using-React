import React from "react";

export default function Button({ txt, color, fun, index }) {
  return (
    <button onClick={() => fun(txt, index)} className={color}>
      {txt}
    </button>
  );
}
