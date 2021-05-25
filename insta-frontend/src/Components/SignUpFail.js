import React from 'react';
import styled from 'styled-components';

const SignUpFailWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const TitleHead = styled.h1`
    font-size: 4rem;
    color: #ff0000
`;

const SignUpFail = () => {
    return (
        <SignUpFailWrapperDiv>
            <TitleHead> Username is already taken </TitleHead>
        </SignUpFailWrapperDiv>
    );
};

export default SignUpFail;