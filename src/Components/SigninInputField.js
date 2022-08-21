import React from "react";
import styled from "styled-components/macro";

const SigninInputField = ({
  type,
  placeholder,
  name,
  validationMessage,
  message,
  validation,
  errors,
  disabled,
  width,
  className,
  id,
}) => {
  return (
    <Container width={width}>
      <Input
        id={id}
        className={className}
        error={errors ? errors[name] : null}
        type={type}
        name={name}
        placeholder={placeholder}
        {...validation}
        disabled={disabled}
      />
      {/* {message && !errors?.[name] && <MessageText>{message}</MessageText>} */}
      {/* {errors?.[name] && <Label>{validationMessage}</Label>} */}
    </Container>
  );
};

export default SigninInputField;

const Container = styled.div`
  width: 100%;
  /* box-sizing: border-box;
  position: relative;
  ${({ width }) =>
    width &&
    `
  width: ${width};
`}
  @media (max-width: 460px) {
    width: 100%;
  } */
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 39px;
  /* margin-top: 28px; */
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  /* background-image: linear-gradient(270deg, #033631, #005049); */
  /* box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 30%); */
  font-family: Poppins, sans-serif;
  font-size: 13px;

  .w-input {
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333333;
    /* vertical-align: middle; */
    background-color: #ffffff;
    border: 1px solid #cccccc;
    .text-field- {
      height: 39px;
      margin-top: 0px;
      border: 1px solid #a8a7aa;
      border-radius: 9px;
      font-family: Poppins, sans-serif;
    }
  }

  &.outline-red {
    outline: 1px solid red;
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

