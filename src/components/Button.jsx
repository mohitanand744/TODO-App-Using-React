import React, { useContext } from "react";
import { ListDataContext } from "./../contexts/listDataContext";

export default function Button({ txt, color, index }) {
  let contextObj = useContext(ListDataContext);
  return (
    <button onClick={(e) => contextObj.fun(e, txt, index)} className={color}>
      {txt}
    </button>
  );
}
