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
        margin: 0 5% 10% 5%;
        line-height: 160%;
    }

    @media only screen and (min-width: 760px) {
        width: 60%;
        min-width: 600px;
        margin: 0 auto;
    }
`
const Media = styled.div `
    text-align: center;
    padding-bottom: 5%;
`

function ProjectDemo({name, description, children}) {

    return (
        <Container className='ProjectDemo'>
            <h1>{name}</h1>
            
            <Media>{children}</Media>
            <p>{description}</p>
        </Container>
    )
}

export default ProjectDemo;