import React from 'react';
import styled from 'styled-components';

const SuccessWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const TitleHead = styled.h1`
    font-size: 4rem;
    color: #1aa3ff;
`;

const TitleHead2 = styled.h1`
    font-size: 4rem;
    color: #1aa3ff;
     padding-left: 40px;
`;

const SignUpSuccess = (props) => {
    console.log("signup success =",props)
    return (
        <SuccessWrapperDiv>
            <TitleHead>Hi { props.currentUser.username},</TitleHead>
            <TitleHead2>Welcome to our Community.</TitleHead2>
        </SuccessWrapperDiv>
    )
}

export default SignUpSuccess;