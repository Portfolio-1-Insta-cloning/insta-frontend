import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios"
import styled from 'styled-components';

const SignUpWrapperDiv = styled.div`
    margin-top: 0;
    width: 100%;
    background-color:  #3399ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #ffffff;
    height: auto;
`;

const FormHeaderDiv = styled.div`
    width: 60%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const SignUpTitle = styled.h1`
    margin-right: auto;
    font-family: Source Sans Pro, sans-serif;
    font-size: 3rem;
    color: #ffffff;
    font-weight: 600;
    line-height: 1.65;
    margin-bottom: 20px;
`;

const LogInLink = styled(Link)`
    font-family: Source Sans Pro, sans-serif;
    text-decoration: none;
    font-weight: 600;
    font-size: 2.6rem;
    color: #0059b3;
    &:hover{
        color: #99d6ff;
    }
`;

const Form = styled.form`
    width: 60%;
    max-width: 500px;
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    padding: 25px;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const FormaGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Label = styled.label`
    margin-right: auto;
    margin-bottom: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: Source Sans Pro, sans-serif;
`;

const Required = styled.span`
    color: #ff3300;
    font-weight: 500;
    margin-left: 5px;
`;

const Input = styled.input`
    margin: 0;
    height: auto;
    border: none;
    border-radius: 2px;
    padding-left: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 1.8rem;
    margin-bottom: 16px;
    margin-left: 10px;
    background-color: #ffffff;
`;

const SubmitButton = styled.button`
    border: 1px solid #ffffff;
    background-color: transparent;
    padding: 8px 30px;
    text-transformation: uppercase;
    font-size: 1.8rem;
    color: #ffffff;
    border-radius: 2px;
    margin-top: 10px;
    &:hover{
        border-color: #9bf1ff;
        color: #9bf1ff;
    }
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const SignUpForm = (props) => {

    const history = useHistory();
    const {getUser} = props

    const [signupForm, setSignupForm] = useState([{
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
        confirmpassword: ""
    }]);
    
    const inputchange = (e) => {
        e.persist();
        setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
    };
    

    const submitHandler = (e) => {
        e.preventDefault();
        getUser(signupForm)
        axios
            .post("http://localhost:5000/api/users/signup/", signupForm)
            .then((res) => {
                history.push('/welcome')
                console.log("Response", res.data);
            })
            .catch((err) => {
                console.log("Signup error =", err.message);
                history.push('/signupfail')
            })
            
            setSignupForm(signupForm);
    };

    return (
        <>
        <SignUpWrapperDiv>
            <FormHeaderDiv>
                <SignUpTitle>Create an Account</SignUpTitle>
                <LogInLink to = '/login'>Log In</LogInLink>
            </FormHeaderDiv>
                <Form onSubmit={submitHandler}>
                <FormaGroupWrapper>
                <FormGroup>
                    <Label htmlFor="firstname">First Name
                    <Required>*</Required></Label>
                    <Input type="text"
                        name="firstname"
                        id="firstname"
                        value = {signupForm.firstname}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name
                    <Required>*</Required></Label>
                    <Input type="text"
                        name="lastname"
                        id="lastname"
                        value = {signupForm.lastname}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail
                    <Required>*</Required></Label>
                    <Input type="email"
                        name="email"
                        id="email"
                        value = {signupForm.email}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phone">Phone Number
                    <Required>*</Required></Label>
                    <Input type="tel"
                        name="phone"
                        id="phone"
                        // pattern = "[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        value = {signupForm.phonenumber}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username
                    <Required>*</Required></Label>
                    <Input type="text"
                        name="username"
                        id="username"
                        value = {signupForm.username}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password
                    <Required>*</Required></Label>
                    <Input type="password"
                        name="password"
                        id="password"
                        value = {signupForm.password}
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmpassword">Confirm Password
                    <Required>*</Required></Label>
                    <Input type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        value = {signupForm.confirmpassword}
                        required
                        onChange={inputchange} />
                </FormGroup>
                </FormaGroupWrapper>
                <ButtonWrapper>
                    <SubmitButton type="submit">Signup</SubmitButton>
                </ButtonWrapper>
            </Form>
            </SignUpWrapperDiv>
        </>
    )
}

export default SignUpForm