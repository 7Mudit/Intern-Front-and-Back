//styled components
import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import EmailSent from "./pages/EmailSent";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import ForgottenPass from "./pages/ForgottenPass";
import PasswordReset from "./pages/PasswordReset"
//auth and redux
// import AuthRoute from "./components/AuthRoute";
// import BasicRoute from "./components/BasicRoute";
import {connect} from 'react-redux'
function App({checked}) {
  return (
    <Router>
      {checked &&
      <StyledContainer>
        <Routes>
          <Route  path="/signup" element={<Signup/>}/>
          <Route  exact path="/passwordreset/:userId/:resetString" element={<PasswordReset/>}/>
          <Route  path="/emailsent/:userEmail?/:reset?" element={<EmailSent/>}/>
          <Route exact path="/login/:userEmail?" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/forgottenpassword" element={<ForgottenPass/>}/>
        </Routes>
      </StyledContainer>
}
    </Router>
  );
}
const mapStateToProps=({session})=>({
  checked:session.checked
})
export default connect(mapStateToProps)(App);
