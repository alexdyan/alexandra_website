import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import styled from 'styled-components';
import SideCanvas from './SideCanvas';

const Container = styled.div `   
    overflow: hidden;
    width: 100%;
    height: 100%;
    text-align: center;
    background: linear-gradient(135deg, rgba(255,147,147,1) 0%, rgba(255,110,110,1) 33%, rgba(255,65,65,1) 67%, rgba(255,24,24,1) 100%);
    /* background: ${props => props.theme.colors.pink}; */
    border: 1px solid ${props => props.theme.colors.pink};

    h1 {
        margin-top: 30vh;
        margin-right: 10%;
        font-size: 4em;
        text-align: right;
        color: ${props => props.theme.colors.lightGray};
    }
`

const LinkContainer = styled.div `
    margin-top: 20%;
    display: flex;
    flex-direction: column;
`

const Link = styled(RouterLink) `
    margin: 0 25% 5% 25%;
    padding: 5%;
    text-decoration: none;
    outline: none;
    font-size: 1.4em;
    color: ${props => props.theme.colors.lightGray};
    border: 1px solid ${props => props.theme.colors.lightGray};
    background: ${props => props.theme.colors.pink};

    &:hover {
        background: ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.red};
    }
`

function Home() {

    return(
        <Container className='Home'>
            {/* <SideCanvas /> */}
            <h1>Alexandra D'Yan</h1>
            <LinkContainer>
                <Link to='/projects'>Projects</Link>
                <Link to='/about'>About</Link>
            </LinkContainer>
            
        </Container>
    )

}

export default Home;