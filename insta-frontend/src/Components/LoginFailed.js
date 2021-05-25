import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    font-family: 'Pattaya', sans-serif;
    width: 100%;
    // height: 450px;
    display: flex;
    justify-content: center;  
`;

const TitleHead = styled.h1`
    font-size: 2rem;
    color: #1aa3ff;
    font-family: 'Pattaya', sans-serif;
`;


const LoginFailed = () => {
    return (
        <WrapperDiv>
            <TitleHead>It looks like you haven't signed up for an account. Please sign up on our Sign Up page.</TitleHead>
        </WrapperDiv>
    )
}

export default LoginFailed;