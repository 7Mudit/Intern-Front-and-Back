import React from "react";
import {
  StyledFormArea,
  StyledFormButton,
  Avatar,
  StyledTitle,
  ButtonGroup,
  Copyright
} from "./../components/Styles";

import Logo from "./../assets/favicon.png";
import { Formik, Form } from "formik";
import { TextInput } from "../components/FormLib";
import {FiLock} from 'react-icons/fi'
import * as Yup from 'yup'

// Loader
import  { Circles } from 'react-loader-spinner';

// auth and redux
import {connect} from 'react-redux';
import { resetPassword } from "../auth/actions/userActions";
import {useNavigate,useParams} from "react-router-dom"

const PasswordReset = ({resetPassword}) => {
  const history=useNavigate();
  const {userId, resetString}=useParams()
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle size={30}>Password Reset</StyledTitle>
        <Formik 
            initialValues={{
                newPassword:"",
                confirmNewPassword:"",
                userId,resetString,
            }}
            validationSchema={
                Yup.object({
                    newPassword:Yup.string().min(8,"Password is too short").max(30,"Password is too long").required("Required"),
                    confirmNewPassword:Yup.string().required("Required").oneOf([Yup.ref("newPassword")],"Passwords must match")
                })
            }
            onSubmit={(values,{setSubmitting,setFieldError})=>{
                resetPassword(values,history,setFieldError,setSubmitting);
            }}
        >
          {({isSubmitting}) => (
            <Form>
              <TextInput
                name="newPassword"
                type="password"
                label="New Password"
                placeholder="******"
                icon={<FiLock/>}
              />
              <TextInput
                name="confirmNewPassword"
                type="password"
                label="Confirm New Password"
                placeholder="******"
                icon={<FiLock/>}
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

export default connect(null,{resetPassword})(PasswordReset);
