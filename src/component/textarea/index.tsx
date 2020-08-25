import React from "react";

import styled from "styled-components";

const StyledTextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #c4cdd5;
  box-sizing: border-box;
  box-shadow: inset 0px 1px 2px rgba(102, 113, 123, 0.21);
  border-radius: 3px;
  padding: 8px 12px;
  width: 100%;
  overflow: auto;

  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  margin: 0.5rem 0;
`;

const TextArea: React.FC<any> = (props) => {
  return <StyledTextArea {...props} />;
};

export default TextArea;
