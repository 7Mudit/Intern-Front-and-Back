import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  ButtonGroup,

  Copyright
} from "../components/Styles";

import Logo from "./../assets/favicon.png";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import {FiMail} from 'react-icons/fi'
import * as Yup from 'yup'

// Loader
import  { Circles } from 'react-loader-spinner';

// auth and redux
import {connect} from 'react-redux';
import { forgottenPassword } from "../auth/actions/userActions";
import {useNavigate,useParams} from "react-router-dom"

const ForgottenPass = ({forgottenPassword}) => {
  const history=useNavigate();
  const {userEmail}=useParams()
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30}>Password Reset</StyledTitle>
        <Formik 
            initialValues={{
                email:userEmail,
                redirectUrl:"http://localhost:3000/passwordreset"
            }}
            validationSchema={
                Yup.object({
                    email:Yup.string().email("Invalid email address").required("Required"),
                })
            }
            onSubmit={(values,{setSubmitting,setFieldError})=>{
              forgottenPassword(values,history,setFieldError,setSubmitting);
            }}
        >
          {({isSubmitting}) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Enter your Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail/>}
              />

              <ButtonGroup>
                {!isSubmitting &&<StyledFormButton type="submit">Submit</StyledFormButton>}
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
      </StyledFormArea>
      <Copyright>All Rights Reserved &copy;2020</Copyright>
    </div>
  );
};

export default connect(null,{forgottenPassword})(ForgottenPass);
