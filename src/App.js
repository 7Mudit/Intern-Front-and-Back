//styled components
import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import EmailSent from "./pages/EmailSent";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

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
          <Route  path="/emailsent/:userEmail" element={<EmailSent/>}/>
          <Route exact path="/login/:userEmail?" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/" element={<Home/>}/>
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
