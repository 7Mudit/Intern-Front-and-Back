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
import {FiMail,FiLock,FiUser,FiCalendar,FiPhone,FiHome} from 'react-icons/fi'
import * as Yup from 'yup'

// Loader
import  {Loader, Circles } from 'react-loader-spinner';

const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30}>Member Signup</StyledTitle>
        <Formik 
            initialValues={{
                email:"",
                password:"",
                repeatPassword:"",
                dateOfBirth:"",
                name:"",
                phoneNumber:"",
                address:""
            }}
            validationSchema={
                Yup.object({
                    email:Yup.string().email("Invalid email address").required("Required"),
                    password:Yup.string().min(8,"Password is too short").max(30,"Password is too long").required("Required"),
                    name:Yup.string().required("Required"),
                    dateOfBirth:Yup.date().required("Required"),
                    repeatPassword:Yup.string().required("Required").oneOf([Yup.ref("password")],"Passwords must match"),
                    phoneNumber:Yup.number().max(10,"Must be 10 digits").required("Required"),
                    address:Yup.string().min(8,"Address is too short").max(30,"Address is too long").required("Required"),
                })
            }
            onSubmit={(values,{setSubmitting})=>{
                console.log(values);
            }}
        >
          {({isSubmitting}) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Name"
                placeholder="Enter your Name"
                icon={<FiUser/>}
              />
              <TextInput
                name="phoneNumber"
                type="number"
                label="Phone Number"
                placeholder="Enter your Phone Number"
                icon={<FiPhone/>}
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail/>}
              />
              <TextInput
                name="address"
                type="text"
                label="Address"
                placeholder="Enter your address"
                icon={<FiHome/>}
              />
              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                placeholder="Enter your DOB"
                icon={<FiCalendar/>}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="******"
                icon={<FiLock/>}
              />
              <TextInput
                name="password"
                type="password"
                label="Confirm Password"
                placeholder="******"
                icon={<FiLock/>}
              />
              <ButtonGroup>
                {!isSubmitting &&<StyledFormButton type="submit">Signup</StyledFormButton>}
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
          Already have and account? <TextLink to='/login '>Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <Copyright>All Rights Reserved &copy;2020</Copyright>
    </div>
  );
};

export default Signup;
