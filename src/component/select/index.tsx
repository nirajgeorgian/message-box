import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background: #ffffff;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
  border-radius: 3px;
  height: 36px;
  padding: 4px;
  width: 100%;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  margin: 0.5rem 0;
`;

const Select: React.FC<any> = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.map((option: string, key: number) => (
        <option key={key} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
