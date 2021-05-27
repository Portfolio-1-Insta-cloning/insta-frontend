import React, { useState } from "react";
import { Route, Switch} from 'react-router-dom';

// Components
import './App.css';
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";

const App = () => {
// Current user state for signup:
  const [currentUser, setCurrentUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  // To get current user:
  const getUser = (user) => {
    const loggedInUser = {
      ...currentUser,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password
    }
    setCurrentUser(loggedInUser);
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Auth function
  const authentication = () => {
    setIsAuthenticated(true)
  }
  // Logout function:
  const handleLogout = () => {
    setIsAuthenticated(false)
  }
  // Login State:
  const [loginUser, setLoginUser] = useState([{
    username: "",
    password: ""
  }]);
  const loginFunc = (user) => {
    const exsistingUser = {...loginUser,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      password: user.password
    }
    setLoginUser(exsistingUser);
  }

  return (
    <div className = "wrapperDiv">
      <Header
        isAuthenticated={isAuthenticated}
        handleLogout={ handleLogout }/>
      {/* Routes */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/signup'>
          <SignUpForm getUser={getUser} />
        </Route>
        <Route path='/login'>
          <LoginForm
            loginFunc = {loginFunc}
            authentication={authentication} 
          />
        </Route>
        <Route path='/welcome'>
          <Welcome
            currentUser={currentUser}
            loginUser={loginUser}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
