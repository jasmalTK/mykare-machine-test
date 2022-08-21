import React from "react";
import styled from "styled-components/macro";

export function Input({ register, name, ...rest }) {
  return <input {...register(name)} {...rest} />;
}

const handleSelect = () => {
  console.log("FFRRDD");
};
export function SignUpSelect({ className, register, options, name, ...rest }) {
  return (
    <Select className={className} {...register(name)} {...rest}>
      {options.map((value) => (
        <option key={value.id} value={value.Country_Name}>
          {value.Country_Name}
        </option>
      ))}
    </Select>
  );
}
const Select = styled.select`
  &.text-field._1 {
    width: 218px;
    width: 90%;
  }
  &.text-field {
    width: 100%;
    height: 39px;
    border: 1px solid #a8a7aa;
    border-radius: 9px;
    font-family: Poppins, sans-serif;
    color: #000;
  }
  /* width: 48%;
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
  `} */

  /* &:disabled {
    background-color: #1f1f1f;
    opacity: 0.7;
    cursor: not-allowed;
  } */
`;
