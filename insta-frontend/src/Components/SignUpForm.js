import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";
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

const Errors = styled.p`
    color: #9bf1ff;
    margin: 0 0 10px 0;
    font-size: 1.6rem;
    text-align: center;
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
    const { getUser } = props
    
    // Signup State:
    const [signupForm, setSignupForm] = useState([{
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
        confirmpassword: ""
    }]);
    
    // Error State for validation:
    const [errorState, setErrorState] = useState([{
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
        confirmpassword: ""
    }]);
    
    const formSchema = yup.object().shape({
        firstname: yup.string().required("First Name is Required"),
        lastname: yup.string().required("Last Name is Required"),
        email: yup.string().email().required("Email is Required"),
        phonenumber: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
        username: yup.string().required("Username is a Mandatory field"),
        password: yup.string().required("password is required").min(8, "Password must be at least 8 character").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password must contain uppercase and lowercase letter, a number, and may contain special characters.'),
        confirmpassword: yup.string().required("Your password should match")
    })

    // const validateForm = (e) => {
    //     yup
    //         .reach(formSchema, e.target.name)
    //         .validate(e.target.value)
    //         .then((valid) => {
    //             setErrorState({ ...errorState, [e.target.name]: "" });
    //         })
    //         .catch((err) => {
    //             setErrorState({ ...errorState, [e.target.name]: err.errors[0] });
    //             console.log('ErrorState', errorState)
    //             console.log("ERRORSTATE =", err.errors);
    //         })
    // };
    
    const inputchange = (e) => {
        e.persist();
        const newUser = setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
        // validateForm(e)
        // setSignupForm(newUser);
    };
    

    const submitHandler = (e) => {
        e.preventDefault();
        getUser(signupForm)
        axios
            .post("http://localhost:5000/api/users/signup/", signupForm)
            .then((res) => {
                history.push('/welcome')
            })
            .catch((err) => {
                console.log("Signup error =", err.message);
            });
            setSignupForm(signupForm);
    };

    return (
        <>
        <SignUpWrapperDiv>
            <FormHeaderDiv>
                <SignUpTitle>Create an Account</SignUpTitle>
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
                        placeholder = "First Name"
                        required
                        onChange={inputchange} />
                        {/* {errorState.firstname.length > 0 ? <Errors> {errorState.firstname }</Errors> : null } */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastname">Last Name
                    <Required>*</Required></Label>
                    <Input type="text"
                        name="lastname"
                        id="lastname"
                        value={signupForm.lastname}
                        placeholder = "Last Name"
                        required
                        onChange={inputchange} />
                        {/* {errorState.lastname.length > 0 ? <p> {errorState.lastname }<p> : null } */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail
                    <Required>*</Required></Label>
                    <Input type="email"
                        name="email"
                        id="email"
                        value={signupForm.email}
                        placeholder = "username@domain.com"        
                        required
                        onChange={inputchange} />
                        {/* {errorState.email.length > 0 ? <p> {errorState.email}<p> : null } */}    
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="phone">Phone Number
                    <Required>*</Required></Label>
                    <Input type="tel"
                        name="phone"
                        id="phone"
                        value={signupForm.phonenumber}
                        placeholder = "123-456-7890"        
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username
                    <Required>*</Required></Label>
                    <Input type="text"
                        name="username"
                        id="username"
                        value={signupForm.username}
                        placeholder = "username"        
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password
                    <Required>*</Required></Label>
                    <Input type="password"
                        name="password"
                        id="password"
                        value={signupForm.password}
                        placeholder = "Password"    
                        required
                        onChange={inputchange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="confirmpassword">Confirm Password
                    <Required>*</Required></Label>
                    <Input type="password"
                        name="confirmpassword"
                        id="confirmpassword"
                        value={signupForm.confirmpassword}
                        placeholder = "Confirm Password"
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