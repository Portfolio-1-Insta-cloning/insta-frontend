import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import axios from "axios";

const LoginForm = (props) => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/users/login/", credentials)
            .then((res) => {
                console.log("login res", res);
                localStorage.setItem("token", res.data.token);
                props.history.push("/");
            })
        .catch(err => console.log(err)) 
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Login</h3>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Enter your username" onChange={ changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter your password" onChange={ changeHandler}/>
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Row>
            <p>Login Form</p>
        </Container>
    )
}

export default LoginForm;