import React from 'react';
import styled from 'styled-components';

const HomeWrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`;
const Home = () => {
    return (
        <HomeWrapperDiv>
            <h1>WELCOME TO OUR HOME PAGE</h1>
        </HomeWrapperDiv>
    )
}

export default Home;