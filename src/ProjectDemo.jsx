import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Container = styled.div `
width: 100%;
height: 100%;
`
const Media = styled.div `

`

function ProjectDemo({name, description, children}) {

    return (
        <Layout>
            <Container className='ProjectDemo'>
                <h1>{name}</h1>
                <p>{description}</p>
                <Media>{children}</Media>
            </Container>
        </Layout>
    )
}

export default ProjectDemo;