import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
  border-radius: 3px;
  height: 36px;
  padding: 8px 12px;
  width: 100%;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  margin: 0.5rem 0;
`;

const Input: React.FC<any> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
