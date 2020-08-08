import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';
import homeIcon from './images/home.svg';
import SideMenu from './SideMenu';

const Container = styled.nav `
    width: 100%;
    height: 8vh;
    /* red to dark red gradient */
    background: linear-gradient(135deg, rgba(255,110,110,1) 0%, rgba(255,65,65,1) 50%, rgba(255,24,24,1) 100%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;

    /* blurring tools */
    filter: none;
    -webkit-filter: none;

`
const HomeIcon = styled(RouterLink) `
    background-image: ${`url(${homeIcon})`};
    background-size: 100% 100%; 
    margin: auto 5%;
    width: 32px;
    height: 32px;
`
const StyledMenu = styled(SideMenu)`
    /* background: rgba(255, 65, 65, 0.9); */
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: right;
    max-width: 150px;
    svg {
        height: 10vh;
        text-align: left;
    }
`
const Link = styled(RouterLink) `
    margin: 10% 10% 10% 2%;
    padding: 5%;
    font-size: 1.5em;
    color: black;
    text-decoration-color: ${props => props.theme.colors.lightPink};
    
`

function Header({setBlurred}) {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(!visible);
        setBlurred(true);
    }
    const onClosePressed = () => {
        setVisible(false);
        setBlurred(false);
    }

    return (
        <Container className='Header'>
            <HomeIcon to='/home'></HomeIcon>
            <MenuIcon onClick={onClick} style={{width: '32px', height: '25px', margin: 'auto 5%', cursor: 'pointer'}}></MenuIcon>
            <StyledMenu visible={visible} onClosePressed={onClosePressed}>
                <Link to='/projects' onClick={onClosePressed}>Projects</Link>
                <Link to='/home' onClick={onClosePressed}>Home</Link>
                <Link to='/about' onClick={onClosePressed}>About</Link>
            </StyledMenu>
        </Container>
    )
}

export default Header;