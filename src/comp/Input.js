import React from "react";

const Input = ({ type, onKeyDown, placeholder }, ref) => {
  return (
    <input
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={ref}
    />
  );
};
const forwarded = React.forwardRef(Input);
export default forwarded;
