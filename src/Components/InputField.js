import React from "react";
import styled from "styled-components/macro";

const InputField = ({
  type,
  placeholder,
  name,
  validationMessage,
  message,
  validation,
  errors,
  disabled,
  width,
}) => {
  return (
    <Container width={width}>
      <Input
        // error={errors?.[name]}
        type={type}
        name={name}
        placeholder={placeholder}
        {...validation}
        disabled={disabled}
      />
      {/* {message && !errors?.[name] && <MessageText>{message}</MessageText>}
      {errors?.[name] && <Label>{validationMessage}</Label>} */}
    </Container>
  );
};

export default InputField;

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  ${({ width }) =>
    width &&
    `
  width: ${width};
`}
  @media (max-width: 460px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7em 1.2em;
  border-radius: 3px;
  background-color: #ffffff;
  color: #141414;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  outline: none;
  box-shadow: none;
  border: 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-out;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 20px;
  ${({ error }) =>
    error &&
    `
    border: 2px solid rgb(255, 0, 0);
  `}

  &:disabled {
    background-color: #1f1f1f;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
const Label = styled.p`
  margin-top: 0.4em;
  font-size: 13px;
  color: rgb(255, 0, 0);
  min-height: 10px;
  margin-bottom: 0;
`;
const MessageText = styled.p`
  margin-top: 0.4em;
  font-size: 13px;
  color: #727272;
  min-height: 10px;
  margin-bottom: 0;
`;

