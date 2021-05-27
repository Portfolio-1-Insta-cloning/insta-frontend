import React from 'react';
import styled from 'styled-components';

const WelcomeWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
`;

const TitleHead = styled.h1`
    font-size: 4rem;
    color: #1aa3ff;
`;


const Welcome = (props) => {
    console.log("Welcome", props)
    const {currentUser, loginUser} = props
    return (
        <WelcomeWrapperDiv>
            {currentUser.firstname ?
                <TitleHead>Welcome, {props.currentUser.firstname} !</TitleHead> :
                <TitleHead>Welcome back, {props.loginUser.firstname} !</TitleHead>}
           
        </WelcomeWrapperDiv>
    )
}

export default Welcome