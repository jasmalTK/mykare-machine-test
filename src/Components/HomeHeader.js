import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOutSuccess, selectUserName } from "../slices/authSlice";

const HomeHeader = (props) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const handleLogout = () => {
      dispatch(logOutSuccess())
      navigate(`/signin`)
    }
  return (
    <Header>
      <LogoContainer>
        <Logo src="https://mykarehealth.com/static/media/logo.57312f90.svg" alt="logo" />
      </LogoContainer>
      <NavContainer>
      </NavContainer>
      <HeaderButtonGroup>
       
        <TryButton
          type="button"
          
        >
          {username}
        </TryButton>
        <LogoutButton
          type="button"
          onClick={()=> handleLogout()}
        >
          Logout
        </LogoutButton>
      </HeaderButtonGroup>
    </Header>
  );
};

export default HomeHeader;

const Header = styled.div`
  padding: 20px 0;
  z-index: 10;
  display: grid;

  grid-template-columns: 0.3fr 1fr 0.41fr;
  align-items: center;
  ${({ language }) =>
    language == "ar" &&
    `
  
  grid-template-columns: 0.3fr 1fr 0.46fr;
  `}
  @media screen and (max-width: 1290px) {
    grid-template-columns: 0.3fr 1fr 0.45fr;
    ${({ language }) =>
      language == "ar" &&
      `
  
  grid-template-columns: 0.3fr 1fr 0.5fr;
  `}
  }
`;
const LogoContainer = styled.div`
  width: 88px;
  cursor: pointer;
`;
const Logo = styled.img`
  width: 100%;
`;
const NavContainer = styled.div``;
const HeaderButtonGroup = styled.div``;
const TryButton = styled.button`
  margin-right: 10px;
  cursor: pointer;
  background: #fff;
  border: 2px solid #307ed9;
  border-radius: 30px;
  padding: 7px 15px;
`;
const LogoutButton = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  background: #fff;
  border-radius: 30px;
  padding: 9px 20px;
  background-image: linear-gradient(121deg, #e65742, #a2330f);
`;