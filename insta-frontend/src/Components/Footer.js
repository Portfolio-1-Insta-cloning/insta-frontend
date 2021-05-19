import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    background-color: #008ae6;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: flex-end;
    padding-left: 75px;
    color: white;
    font-size: 1rem;
    font-family: 'Source Sans Pro', sans-serif;
`;

const Footer = () => {
    return (
        <FooterDiv>
           <p>&copy; 2021 My App</p> 
        </FooterDiv>
    )
}

export default Footer;