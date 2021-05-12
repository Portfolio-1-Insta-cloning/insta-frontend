import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import axios from "axios"

const SignUpForm = (props) => {

    const [regForm, setRegForm] = useState({
        username: "",
        password: ""
    });

    const inputchange = (e) => {
        setRegForm({ ...regForm, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/users/signup/", regForm)
            .then((res) => {
                props.history.push('/')
            })
            .catch(err => console.log("Signup error", err))
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Sign Up</h3>
                    <Form onSubmit = {submitHandler}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Enter your name" onChange={ inputchange }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type = "password" name = "password" id = "password" placeholder = "Enter your password" onChange={ inputchange }/>
                        </FormGroup>
                        <Button>Signup</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpForm