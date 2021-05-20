import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

// Components
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Success from "./Components/Success";

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
    <div>
      <Header />
      {/* Routes */}
      <Switch>
        <Route exact path = "/" />
        <Route path='/signup' render={() => <SignUpForm getUser = {getUser} />} />
        <Route path='/login' render={() => <LoginForm getUser={ getUser }/>}/>
        <Route path='/success' render={() => <Success currentUser = {currentUser} />}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
