import React from "react"; 

// Components
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";

const App = () => {
  return (
    <div>
      <p>Friends Group</p>
        <SignUpForm/>
        <LoginForm/>
    </div>
  );
}

export default App;
