import React from 'react';
import styled from 'styled-components';

const SuccessWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
`;

const TitleHead = styled.h1`
    font-size: 4rem;
    color: #1aa3ff;
`;


const Success = (props) => {
    console.log("Success", props)
    return (
        <SuccessWrapperDiv>
            <TitleHead>Welcome back, { props.currentUser.username} !</TitleHead>
        </SuccessWrapperDiv>
    )
}

export default Success