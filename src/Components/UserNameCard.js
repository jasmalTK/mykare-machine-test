import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components/macro";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import { getAvatar } from "../Functions/utils";

// export default function UserNameCard(props) {
const UserNameCard = (props) => {
  const options = [
    "None",
    "Atria",
    "Callisto",
    "Dione",
    "Ganymede",
    "Hangouts Call",
    "Luna",
    "Oberon",
    "Phobos",
    "Pyxis",
    "Sedna",
    "Titania",
    "Triton",
    "Umbriel",
  ];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container1>
      <MenuContainer>
        <Avatar
          alt="Remy Sharp"
          src={getAvatar()}

          // src="https://i.pinimg.com/originals/02/6c/da/026cdaf717ac7af4482aec84436709ab.jpg"
        />

        <span>{props.state.recent_username}</span>
      </MenuContainer>
      <CloseIconDiv
        onClick={() => {
          props.handleCloseUsernameCard();
        }}
      />
    </Container1>
  );
};
export default UserNameCard;

const Container1 = styled.div`
  margin-bottom: 10px;
  border-radius: 13px;

  background: transparent linear-gradient(98deg, #eeeeee 0%, #e9e9e9 100%) 0% 0%
    no-repeat padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
`;
const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    font-family: Poppins, sans-serif;
    font-size: 13px;
  }
`;
const CloseIconDiv = styled(CloseIcon)`
  cursor: pointer;
  width: 20px !important;
  height: 20px !important;
  svg.MuiSvgIcon-root {
  }
`;
