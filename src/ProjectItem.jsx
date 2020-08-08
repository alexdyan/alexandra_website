import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled(Link) `
    grid-area: ${props => props.name.toLowerCase().replace(' ', '_').replace(/\W/g, '')};
    text-align: center;
    text-decoration: none;
    font-size: 1.4em;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
    background-position: center;
    color: white;

    /* vertically center text in the container */
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &:hover, &:active {
        border: 1px solid ${props => props.theme.colors.lightPink};
    }
    div {
        margin: auto;
        padding: 1%;
        border-radius: 5px;
        background: rgba(235, 230, 230, 0.5);
    }

`

function ProjectItem({baseUrl, name, imageSrc, youtubeId}) {

    const getImage = () => {
        if (imageSrc) {
            return imageSrc;
        }
        else {
            return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
        }
    }

    return (
        <Container className='ProjectItem'
                to={baseUrl + '/' + name.toLowerCase().replace(' ', '_').replace(/\W/g, '')} 
                name={name} 
                image={getImage()}>
            {/* uncomment to display the project name text */}
            <div>{name}</div>
        </Container>
    )
}

export default ProjectItem;