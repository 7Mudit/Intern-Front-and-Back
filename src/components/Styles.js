import styled from "styled-components";

import background from "./../assets/bg3.png";

export const colors = {
  primary: "#fff",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "E5E7EB",
  dark1: "1F2937",
  dark2: "#4B5563",
  dark3: "#9CA3AF",
  red: "#DC2626",
};

// Styled Components
export const StyledContainer = styled.div`
    margin:0;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:
    linear-gradient(0deg,
      rgba(245,70,66, 0.75),
      rgba(8,83,156, 0.75)), url(${background});
}
    background-size:cover;
    background-attachment:fixed;
`;

// Home
export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 5px;
  margin-bottom: 25px;
`;

export const Avatar=styled.div`
  width:85px;
  height:85px;
  border-radius:50px;
  background-image:url(${props=>props.image});
  background-size:cover;
  background-position:center;
  margin:auto;
`;
