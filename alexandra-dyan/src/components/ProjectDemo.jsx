import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width: 100%;
    height: 100%;
    h1 {
        text-align: center;
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.pink};
    }
    p {
        margin: 0 5% 5% 5%;
        line-height: 160%;
    }
    a {
        margin: 0 5% 5% 5%;
        color: black;
        text-decoration-color: ${props => props.theme.colors.pink};
        &:hover {
            color: ${props => props.theme.colors.pink};
            transition: 0.1s ease;
        }
    }

    @media only screen and (min-width: 660px) {
        width: 60%;
        min-width: 600px;
        margin: 0 auto;
    }
`
const Media = styled.div `
    text-align: center;
    padding-bottom: 5%;
`

function ProjectDemo({name, description, children, link, linkCaption}) {

    return (
        <Container className='ProjectDemo'>
            <h1>{name}</h1>
            <Media>{children}</Media>
            <p>{description}</p>
            <a href={link} target='_blank'>{linkCaption}</a>
            
            {/* extra space before the footer */}
            <div style={{height: '5vh'}}></div>
        </Container>
    )
}

export default ProjectDemo;