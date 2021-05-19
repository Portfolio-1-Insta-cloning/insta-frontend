import React from "react";
import { Route, Switch } from 'react-router-dom';

// Components
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* Routes */}
      <Switch>
        <Route exact path = "/" />
        <Route path = '/signup' render = {() => <SignUpForm/>} />
        <Route path='/login' render={() => <LoginForm/>}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
