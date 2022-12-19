import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //make checks and get some data

  return () => {
    axios
      .post("http://localhost:3000/user/signing", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;
          //check for specific error
          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
        } else if (data.status === "Success") {
          const userData = data.data[0];
          const token = userData._id;
          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  history("/dashboard");
                })
                .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
        }

        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3000/user/signup", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;

          //checking for specific error
          if (message.includes("name")) {
            setFieldError("name", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("date")) {
            setFieldError("dateOfBirth", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          }
          setSubmitting(false);
        } else if (data.status === "Success") {
          //login user after successful signup
          const { email, password } = credentials;
          dispatch(
            loginUser(
              { email, password },
              history,
              setFieldError,
              setSubmitting
            )
          );
        }
      })
      .catch((err) => console.error(err));
  };
};
export const logoutUser = (history) => {
    return ()=>{
        sessionService.deleteSession();
        sessionService.deleteUser();
        history('/');

    }
};