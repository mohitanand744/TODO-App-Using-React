import React from "react";

const Input = ({ type, refData }) => {
  return <input type={type} ref={refData} placeholder="Inter Your Todo" />;
};

export default Input;
