import React from 'react';
import styled from 'styled-components';
import Header from './Header';


const Container = styled.div `
    width: 100%;
    overflow: visible;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Children = styled.div `
    width: 100%;
    min-height: 80vh;
`

const Footer = styled.footer `
    width: 100%;
    height: 10vh;

    /* vertically center text in the container */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: ${props => props.theme.colors.darkGray};
    /* background: linear-gradient(135deg, rgba(255,147,147,1) 0%, rgba(255,110,110,1) 50%, rgba(255,65,65,1) 100%); */
    text-align: center;
    color: ${props => props.theme.colors.lightGray};
`

function Layout({children}) {

    return (
        <Container className='Layout'>
                <Header />
                <Children>{children}</Children>
            <Footer>
            <p>Contact:<br></br>
                ady239@nyu.edu | (973)-735-3093</p>
            </Footer>
        </Container>
    )
}


export default Layout