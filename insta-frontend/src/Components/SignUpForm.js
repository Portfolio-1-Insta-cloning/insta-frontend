import React, { useState } from "react";
// import { Button, Form, FormGroup, Lable, Input, Container, Row, Col } from "reacstrap";

const SignUpForm = (props) => {
    const [regForm, setRegForm] = useState({
        username: "",
        password: ""
    });
    return (
        <div>
            <p> Sign Up Form</p>
        </div>
    )
}

export default SignUpForm