import React from "react";

export default function Button({ txt, color, fun, index }) {
  return (
    <button onClick={(e) => fun(e, txt, index)} className={color}>
      {txt}
    </button>
  );
}
