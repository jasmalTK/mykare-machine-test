import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components/macro";
import HomeHeader from '../Components/HomeHeader';
import Loader from '../Components/Loader';
import { selectUserName } from '../slices/authSlice';

export default function Home() {
  const [state, setState] = useState(true);
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userList = useSelector((state) => state.user);
  useEffect(() => {
    if(isAuth === false){
      navigate(`/signin`)
    }else{
      setState(false)
    }
  }, []);

  if (state) {
    return <Loader />;
  } else {
    return (
      <Container>
        <Wrapper>
          <HomeHeader />
          <Spotlight>
           {username === "admin"?
           <Table>
            <THead>
              <TableHeadRow>
                <TH>Sl/no</TH>
                <TH>First Name</TH>
                <TH>Last Name</TH>
                <TH>User Name</TH>
                <TH>Email</TH>
              </TableHeadRow>
            </THead>
            <TBody>
              {userList.filter((p)=> p.username != "admin").map((i, index) => (
                <TableBodyRow>
                  <TD>{index + 1}</TD>
                  <TD>{i.first_name}</TD>
                  <TD>{i.last_name}</TD>
                  <TD>{i.username}</TD>
                  <TD>{i.email}</TD>
                </TableBodyRow>
              ))}
            </TBody>
            </Table>
             : <SpotlightHeadingContainer>
              <SpotlightHeading>
                Welcome {username} to MyKare Health
              </SpotlightHeading>
            </SpotlightHeadingContainer>}
            
          </Spotlight>
        </Wrapper>
      </Container>
    );
  }
  };
  
  const Container = styled.div`
    background: url("images/home-background.jpg");
    background-size: contain;
    background-repeat: no-repeat;
  
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: -webkit-radial-gradient(
        top center,
        ellipse cover,
        rgba(0, 212, 255, 0) 50%,
        rgba(255, 255, 255, 1) 100%
      );
      background-size: 100vw 179vh;
    }
  `;
  const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  `;
  
  const Spotlight = styled.div`
    z-index: 10;
  `;
  const SpotlightHeadingContainer = styled.div`
    width: 40%;
    margin: 75px auto 0 auto;
  `;
  const SpotlightHeading = styled.p`
    font-size: 55px;
    font-weight: bold;
    text-align: center;
    line-height: 65px;
    margin-bottom: 10px;
  `;


const Table = styled.table`
  border-radius: 15px;
  width: 100%;
  background: #fff;
  margin-top: 40px;
`;
const THead = styled.thead`
  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 0 0 1px #c6c6c6;
  border-radius: 12px 12px 5px 5px;
`;
const TH = styled.th`
  padding: 1em;
  font-weight: bold;
  /* text-align: left; */
  text-align: ${({ is_num }) => (is_num == true ? "right" : "left")};
`;
const TD = styled.td`
  padding: 0.6em;
  text-align: left;
  padding: 1em;
  border-bottom: 1px solid #ababab;
  vertical-align: middle;
`;
const TBody = styled.tbody``;
const TableHeadRow = styled.tr``;
const TableBodyRow = styled.tr``;
