import React from "react";

const Input = ({ type, value, fun }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => fun(e.target.value)}
      placeholder="Inter Your Todo"
    />
  );
};

export default Input;
