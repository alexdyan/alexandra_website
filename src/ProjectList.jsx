import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import MenuIcon from './MenuIcon';
import homeIcon from './images/home.svg';

// import all the images for the project covers
import soundGardenImg from './images/soundGarden.JPG';
import quarantineQuizImg from './images/quarantine.png';
import blackBoxImg from './images/blackbox.JPG';
import pepsiImg from './images/pepsiThumbNail.JPG';
import titsImg from './images/tits.jpg';

const Container = styled.div`
    width: 100%;
    height: 100%;
    h1 {
        margin-left: 5%;
        margin-bottom: 10%;
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.pink};
        color: ${props => props.theme.colors.darkGray};
    }
`
const NavBar = styled.nav`
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
const GridContainer = styled.div`
    margin: 2%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(150px, auto);
    column-gap: 4%;
    row-gap: 4%;
    grid-template-areas:
        'sound_garden sound_garden'
        "quarantine_quiz dlay_plugin"
        'quarantine_quiz blackbox'
        'sound_design sound_design'
        'radio_dramas drum_padvisualizer';
`

function ProjectList() {
    let match = useRouteMatch();

    return (
        <Switch>
            {/* this saves the existing path so you can add the next extension for each project tp the url */}
            <Route exact path={`${match.path}`}>
                <Container className='ProjectList'>
                    <NavBar>
                    <HomeIcon to='/home'></HomeIcon>
                    <MenuIcon style={{width: '32px', height: '25px', margin: 'auto 5%'}}></MenuIcon>
                    </NavBar>

                    <h1>Projects</h1>
                    <GridContainer>
                        <ProjectItem name='Sound Garden' imageSrc={soundGardenImg} />
                        <ProjectItem name='Quarantine Quiz' imageSrc={quarantineQuizImg} />
                        <ProjectItem name="D'Lay Plug-In" youtubeId='k9tQWE3TW9U' />
                        <ProjectItem name='Sound Design' imageSrc={pepsiImg} />
                        <ProjectItem name='BlackBox' imageSrc={blackBoxImg} />
                        <ProjectItem name='Radio Dramas' imageSrc={titsImg} />
                        <ProjectItem name='Drum Pad Visualizer' youtubeId='-hEwV0057xE' />
                    </GridContainer>
                </Container>
            </Route>
        </Switch>
    )
}

export default ProjectList;