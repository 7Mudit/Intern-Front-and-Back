import React from "react";
import {
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
  ExtraText
} from "../components/Styles";

//Logo
import Logo from "./../assets/favicon.png";
//auth and redux
import {connect} from 'react-redux'
import { logoutUser } from "../auth/actions/userActions";
import { useNavigate } from "react-router-dom";


const Dashboard = ({logoutUser,user}) => {
  const history=useNavigate();
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo}></Avatar>
      </div>
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
        <ExtraText color={colors.light1}>{user.email}</ExtraText>
        <ExtraText color={colors.light1}>{user.phoneNumber}</ExtraText>
        <ButtonGroup>
          <StyledButton to="/" onClick={()=>logoutUser(history)}>Logout</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

const mapStateToProps=({session})=>({
  user:session.user
})

export default connect(mapStateToProps,{logoutUser})(Dashboard);
