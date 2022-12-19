import React from "react";
import {
  StyledFormArea,
  StyledLabel,
  StyledTextInput,
  StyledFormButton,
  Avatar,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  Copyright
} from "./../components/Styles";

import Logo from "./../assets/favicon.png";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import {FiMail,FiLock} from 'react-icons/fi'
import * as Yup from 'yup'

// Loader
import  {Loader, Circles } from 'react-loader-spinner';

const Login = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30}>Member Login</StyledTitle>
        <Formik 
            initialValues={{
                email:"",
                password:"",
            }}
            validationSchema={
                Yup.object({
                    email:Yup.string().email("Invalid email address").required("Required"),
                    password:Yup.string().min(8,"Password is too short").max(30,"Password is too long").required("Required"),
                })
            }
            onSubmit={(values,{setSubmitting})=>{
                console.log(values);
            }}
        >
          {({isSubmitting}) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail/>}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                icon={<FiLock/>}
              />
              <ButtonGroup>
                {!isSubmitting &&<StyledFormButton type="submit">Login</StyledFormButton>}
                {isSubmitting && (
                   <Circles
                   height="80"
                   width="80"
                   color="#4fa94d"
                   ariaLabel="circles-loading"
                   wrapperStyle={{}}
                   wrapperClass=""
                   visible={true}
                 />
                  )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to='/signup '>Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
      <Copyright>All Rights Reserved &copy;2020</Copyright>
    </div>
  );
};

export default Login;
