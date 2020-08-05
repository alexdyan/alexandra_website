import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import MenuIcon from './MenuIcon';
import homeIcon from './images/home.svg';
import instagram from './images/instagram.svg';
import linkedin from './images/linkedin.svg';


const Container = styled.div `
    width: 100%;
    height: 100%;
    h1 {
        margin-left: 5%;
        margin-bottom: 10%;
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.pink};
        color: ${props => props.theme.colors.darkGray};
    }
    p {
        margin: 0 5% 0 5%;
        line-height: 160%;
    }
    div.gap {
        margin-top: 20%;
    }
`

const NavBar = styled.nav `
    width: 100%;
    height: 10%;
    /* red to dark red gradient */
    background: linear-gradient(135deg, rgba(255,110,110,1) 0%, rgba(255,65,65,1) 50%, rgba(255,24,24,1) 100%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`

const HomeIcon = styled(Link)`
    background-image: ${`url(${homeIcon})`};
    background-size: 100% 100%; 
    margin: auto 5%;
    width: 32px;
    height: 32px;
`

const SocialMediaButton = styled.a `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 55% 2% 5%;
    align-items: center;
    color: black;
    text-decoration: none;
    outline: none;
    &:hover, &:active {
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.pink};
    }

    /* put this element before whatever is in the SocialMediaButton tag */
    &::before {
        content: '';
        background-image: ${props => `url(${props.icon})`};
        background-size: 100% 100%;
        width: 60px;
        height: 60px;
        margin-right: 10%;
    }
`
const Footer = styled.footer `
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10%;
    /* vertically center text in the container */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(135deg, rgba(255,147,147,1) 0%, rgba(255,110,110,1) 50%, rgba(255,65,65,1) 100%);
    text-align: center;
    color: ${props => props.theme.colors.darkGray};
`

function About() {

    return(
        <Container className='About'>
            <NavBar>
                <HomeIcon to='/home'></HomeIcon>
                <MenuIcon style={{width: '32px', height: '25px', margin: 'auto 5%'}}></MenuIcon>
            </NavBar>

            <h1>About</h1>
            <p>
                Alexandra is a recent graduate of the Music Technology program at New York University.
                Her main interests, as well as career aspirations, include creative coding and sound
                design. She also uploads digital art experiments to her Instagram account in her 
                free time, and enjoys exploring the intersection of art and technology.
            </p>
            <div className='gap'>
                <SocialMediaButton icon={instagram} href='https://www.instagram.com/helloworld.alex/'>Instagram</SocialMediaButton>
                <SocialMediaButton icon={linkedin} href='https://www.linkedin.com/in/alexandra-dyan/'>LinkedIn</SocialMediaButton>
            </div>

            <Footer>
                <p>Contact:<br></br>
                ady239@nyu.edu | (973)-735-3093</p>
            </Footer>

        </Container>
    )
}

export default About;