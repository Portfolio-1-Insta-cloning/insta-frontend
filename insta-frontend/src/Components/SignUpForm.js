import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from "reactstrap";
import axios from "axios"

const SignUpForm = (props) => {

    const [SignupForm, setSignupForm] = useState({
        username: "",
        password: ""
    });

    const inputchange = (e) => {
        setSignupForm({ ...SignupForm, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/users/signup/", SignupForm)
            .then((res) => {
                console.log("Response", res);
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
                            <Input type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your name"
                                required
                                onChange={inputchange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                required
                                onChange={inputchange} />
                        </FormGroup>
                        <Button>Signup</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUpForm