import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

// Components
import './App.css';
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Success from "./Components/Success";
import SignUpSuccess from "./Components/SignUpSuccess";
import Home from "./Components/Home";
import SignUpFail from "./Components/SignUpFail";
import LoginFailed from "./Components/LoginFailed";

const App = () => {

  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: ""
  });

  const getUser = (user) => {
    const loggedInUser = {
      ...currentUser,
      username: user.username,
      password: user.password
    }
    setCurrentUser(loggedInUser)
  }

  return (
    <div className = "wrapperDiv">
      <Header />
      {/* Routes */}
      <Switch>
        <Route exact path = "/" render={()=> <Home/>} />
        <Route path='/signup' render={() => <SignUpForm getUser = {getUser} />} />
        <Route path='/login' render={() => <LoginForm getUser={ getUser }/>}/>
        <Route path='/success' render={() => <Success currentUser={currentUser} />} />
        <Route path='/signupsuccess' render={() => <SignUpSuccess currentUser={currentUser} />} />
        <Route path='/signupfail' render={() => <SignUpFail />} />
        <Route path='/loginfail' render={() => <LoginFailed />} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
