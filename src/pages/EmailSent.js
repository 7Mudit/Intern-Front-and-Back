import React from "react";
import {
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
  ExtraText,
} from "../components/Styles";

//Logo
import Logo from "./../assets/favicon.png";

import { useParams } from "react-router-dom";

const EmailSent = () => {
  const { userEmail, reset } = useParams();
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
      {reset && userEmail && (
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>Password Reset</StyledTitle>
          <ExtraText color={colors.light1}>
            An email with a password reset link has been sent to your email:{" "}
            <b style={{ color: colors.primary }}>{userEmail}</b>
          </ExtraText>
          <ExtraText color={colors.light1}>
            Check your email and click on the link to proceed further.
          </ExtraText>
        </StyledFormArea>
      )}
      {!reset && userEmail && (
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>Account Confirmation</StyledTitle>
          <ExtraText color={colors.light1}>
            An email with your account confirmation link has been sent to your
            email: <b style={{ color: colors.primary }}>{userEmail}</b>
          </ExtraText>
          <ExtraText color={colors.light1}>
            Check your email and come back to proceed
          </ExtraText>
          <ButtonGroup>
            <StyledButton to={`/login/${userEmail}`}>Proceed</StyledButton>
          </ButtonGroup>
        </StyledFormArea>
      )}
      {!reset && !userEmail && (
        <StyledFormArea bg={colors.dark2}>
          <StyledTitle size={65}>Password Reset</StyledTitle>
          <ExtraText color={colors.light1}>
            Your password has been reset successfully
          </ExtraText>
          <ExtraText color={colors.light1}>
            You may now login !
          </ExtraText>
          <ButtonGroup>
            <StyledButton to={`/login`}>Login</StyledButton>
          </ButtonGroup>
        </StyledFormArea>
      )}
    </div>
  );
};

export default EmailSent;
