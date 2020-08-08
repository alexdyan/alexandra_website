import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import MenuIcon from './MenuIcon';
import homeIcon from './images/home.svg';

const Container = styled.nav `
    width: 100%;
    height: 8vh;
    /* red to dark red gradient */
    background: linear-gradient(135deg, rgba(255,110,110,1) 0%, rgba(255,65,65,1) 50%, rgba(255,24,24,1) 100%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`
const HomeIcon = styled(Link) `
    background-image: ${`url(${homeIcon})`};
    background-size: 100% 100%; 
    margin: auto 5%;
    width: 32px;
    height: 32px;
`

function Header() {
    return (
        <Container className='Header'>
            <HomeIcon to='/home'></HomeIcon>
            <MenuIcon style={{width: '32px', height: '25px', margin: 'auto 5%', cursor: 'pointer'}}></MenuIcon>
        </Container>
    )
}

export default Header;