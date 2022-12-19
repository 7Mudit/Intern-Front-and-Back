//styled components
import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <StyledContainer>
        {/* <Home /> */}
        <Login/>
      </StyledContainer>
    </Router>
  );
}

export default App;
