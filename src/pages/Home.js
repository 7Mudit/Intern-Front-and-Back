import React from 'react'
import { StyledTitle,StyledSubTitle ,Avatar} from '../components/Styles'

//Logo
import Logo from "./../assets/favicon.png";

const Home = () => {
  return (
    <div>

        <div style={{
            position:"absolute",
            top:0,
            left:0,
            backgroundColor:"transparent",
            width:"100%",
            padding:"15px",
            display:"flex",
            justifyContent:"flex-start"
        }}>
            <Avatar image={Logo}></Avatar>
        </div>
        <StyledTitle size={65}>
            Welcome To My Organization
        </StyledTitle>
        <StyledSubTitle size={27}>
            Feel Free to Explore our page
        </StyledSubTitle>

    </div>
  )
}

export default Home