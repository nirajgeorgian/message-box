import React from "react";

const Button: React.FC<any> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
