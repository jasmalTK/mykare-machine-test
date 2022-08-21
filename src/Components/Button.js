import React from "react";
import styled from "styled-components/macro";
import {
  CircularProgress,
} from "@material-ui/core";

const Button = ({ className, text, color, background, type, onClick,loading }) => {
  return (
    <Container
      className={className}
      color={color}
      background={background}
      type={type}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={18} color="info" /> : text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  .button._2 {
    margin-top: 0px;
  }
  .button {
    display: flex;
    width: 100%;
    height: 39px;
    margin-top: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    background-image: linear-gradient(270deg, #033631, #005049);
    box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 30%);
    font-family: Poppins, sans-serif;
    font-size: 13px;
  }
  .w-button {
    display: inline-block;
    padding: 9px 15px;
    background-color: #3898ec;
    color: white;
    border: 0;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
  }
  .button.create {
    margin-top: 12px;
    background-image: linear-gradient(121deg, #e65742, #a2330f);
  }
`;
