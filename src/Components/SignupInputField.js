import React from "react";
import styled from "styled-components/macro";

const SignupInputField = ({
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
}) => {
  return (
    <Container width={width}>
      <Input
        className={className}
        // error={errors?.[name]}
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

export default SignupInputField;

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
  &.text-field-2._2 {
    width: 218px;
    margin-left: auto;
  }
  &.phone-field {
    padding-left: 50px !important;
  }
  .text-field-2 {
    height: 39px;
    margin-top: 0px;
    border: 1px solid #a8a7aa;
    border-radius: 9px;
    font-family: Poppins, sans-serif;
  }
  .text-field._1._2 {
    width: 100%;
  }
  .text-field._1 {
    width: 218px;
  }
  .text-field {
    width: 100%;
    height: 39px;
    border: 1px solid #a8a7aa;
    border-radius: 9px;
    font-family: Poppins, sans-serif;
    color: #000;
  }

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

