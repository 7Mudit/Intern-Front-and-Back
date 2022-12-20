import axios from "axios";
import { sessionService } from "redux-react-session";

//the remote endpoint and local
// const remoteUrl="http://localhost:3000/"
// const localUrl="http://localhost:3000/"
// const curentUrl=localUrl

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
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
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
        } else if (data.status === "Pending") {
          //display message for email verification
          const { email } = credentials;
          history(`/emailsent/${email}`);
        }
        //complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};
export const logoutUser = (history) => {
  return () => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    history("/");
  };
};

export const forgottenPassword = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //make checks and get some data

  return () => {
    axios
      .post("http://localhost:3000/user/requestPasswordReset", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;
          //check for specific error
          if (
            message.toLowerCase().includes("user") ||
            message.toLowerCase().includes("password") ||
            message.toLowerCase().includes("email")
          ) {
            setFieldError("email", message);
          }
        } else if (data.status === "Pending") {
          const { email } = credentials;
          history(`/emailsent/${email}/${true}`);
        }

        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};

// actual reset
export const resetPassword = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  //make checks and get some data

  return () => {
    axios
      .post("http://localhost:3000/user/resetPassword", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Failed") {
          const { message } = data;
          //check for specific error
          if (message.toLowerCase().includes("password")) {
            setFieldError("newPassword", message);
          }
        } else if (data.status === "Success") {
          history(`/emailsent`);
        }

        // complete submission
        setSubmitting(false);
      })
      .catch((err) => console.error(err));
  };
};
