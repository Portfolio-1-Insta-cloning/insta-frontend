import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100%;
    background-color: #1aa3ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderDiv = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const HeaderH1 = styled.h1`
    font-family: 'Pattaya', sans-serif;
    font-size: 4rem;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.5;
    // border-bottom: 2px solid white;
    margin-bottom: 20px;
`;

const NavLinkDiv = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
`;

const NavLinkItem = styled(NavLink)`
    text-decoration: none;
    text-transformation: uppercase;
    margin-left: 20px;
    font-family: Source Sans Pro, sans-serif;
    font-size: 2rem;
    color: #ffffff;
    &:hover{
        font-weight: 600;
        color: #99d6ff;
    }
    &.active{
        color: #b3e0ff;
    }
`;

const Header = (props) => {
    const {isAuthenticated, handleLogout} = props
    return (
        <HeaderWrapper>
            <HeaderDiv>
                <HeaderH1>Welcome to my App!</HeaderH1>
                <NavLinkDiv>
                    {isAuthenticated ? (<NavLinkItem to="/" onClick={handleLogout}>Logout</NavLinkItem>) :
                    <>
                        <NavLinkItem to='/'>Home</NavLinkItem>
                        <NavLinkItem to = '/signup'>Sign Up</NavLinkItem>
                        <NavLinkItem to='/login'>Log In</NavLinkItem>
                    </>
                    }
                </NavLinkDiv>
            </HeaderDiv>
        </HeaderWrapper>
    )
}

export default Header;