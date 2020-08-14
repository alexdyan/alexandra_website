import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import ProjectDemo from './ProjectDemo';
import projectsJSON from './projects';

// import all the images for the project covers
import soundGardenImg from './images/soundGarden.JPG';
import quarantineQuizImg from './images/quarantine.png';
import quarantineQuizImg2 from './images/quarantine2.JPG';
import blackBoxImg from './images/blackbox.JPG';
import pepsiImg from './images/pepsiThumbNail.JPG';
import pepsiVideo from './media/Pepsipaint_Alexandra.mp4';
import orbSleepImg from './images/orbThumbNail.JPG';
import OrbSleepVideo from './media/Orbsleep_Alexandra.mp4';
import titsImg from './images/tits.jpg';
import titsAudio from './media/tits.mp3'

const Container = styled.div`
    /* dont make height 100% or else the footer position will get messed up */
    width: 100%;
    margin: 0 auto;
    background: white;
    h1 {
        margin: 0 0 10% 5%;
        padding-top: 5%;
        text-decoration: underline;
        text-decoration-color: ${props => props.theme.colors.pink};
        color: ${props => props.theme.colors.darkGray};
    }

    @media only screen and (min-width: 760px) {
        width: 60%;
        min-width: 600px;
    }

`
const GridContainer = styled.div`
    padding: 0 2% 25% 2%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(150px, auto);
    column-gap: 4%;
    row-gap: 2%;
    grid-template-areas:
        'sound_garden sound_garden'
        "quarantine_quiz dlay_plugin"
        'quarantine_quiz blackbox'
        'sound_design sound_design'
        'radio_dramas drum_padvisualizer';
    box-sizing: border-box;
`

function ProjectList() {
    let match = useRouteMatch();

    return (
        <Switch>
            {/* this saves the existing path so you can add the next extension for each project to the url */}
            <Route exact path={`${match.path}`}>
                <Container className='ProjectList'>
                    <h1>Projects</h1>
                    <GridContainer>
                        <ProjectItem name='Sound Garden' baseUrl={match.path} imageSrc={soundGardenImg} />
                        <ProjectItem name='Quarantine Quiz' baseUrl={match.path} imageSrc={quarantineQuizImg} />
                        <ProjectItem name="D'Lay Plug-In" baseUrl={match.path} youtubeId='k9tQWE3TW9U' />
                        <ProjectItem name='Sound Design' baseUrl={match.path} imageSrc={pepsiImg} />
                        <ProjectItem name='BlackBox' baseUrl={match.path} imageSrc={blackBoxImg} />
                        <ProjectItem name='Radio Dramas' baseUrl={match.path} imageSrc={titsImg} />
                        <ProjectItem name='Drum Pad Visualizer' baseUrl={match.path} youtubeId='-hEwV0057xE' />
                    </GridContainer>
                </Container>
            </Route>

        {/* *************************Sound Garden************************* */}

            <Route path={`${match.path}/sound_garden`}>
                {/* ... separates the variables so the content can be matched up to the existing attribute names */}
                <ProjectDemo {...projectsJSON.sound_garden}>
                    <img src={soundGardenImg} alt='Sound Garden' style={{width: '96%', height: 'auto'}} />
                </ProjectDemo>
            </Route>

        {/* *************************Quarantine Quiz************************* */}

            <Route path={`${match.path}/quarantine_quiz`}>
                <ProjectDemo {...projectsJSON.quarantine_quiz}>
                    <img src={quarantineQuizImg2} alt='Quarantine Quiz' style={{width: '96%', height: 'auto'}} />
                </ProjectDemo>
            </Route>

        {/* *************************D'Lay Plug-In************************* */}

            <Route path={`${match.path}/dlay_plugin`}>
                <ProjectDemo {...projectsJSON.dlay_plugin}>
                    <iframe width="350" height="215" src="https://www.youtube.com/embed/ST_dPqxNdS8" title="DLay demo 1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </ProjectDemo>
            </Route>

        {/* *************************BlackBox************************* */}

            <Route path={`${match.path}/blackbox`}>
                <ProjectDemo {...projectsJSON.blackbox}>
                    <img src={blackBoxImg} alt='BlackBox game' style={{width: '96%', height: 'auto'}} />
                </ProjectDemo>
            </Route>

        {/* *************************Sound Design************************* */}

            <Route path={`${match.path}/sound_design`}>
                <ProjectDemo {...projectsJSON.sound_design}>
                    <div>
                        <video controls poster={orbSleepImg} src={OrbSleepVideo} width='350' height='200' alt="Futuristic vitamins commercial.">Your browser does not support .mp4 video.</video>
                        <video controls poster={pepsiImg} src={pepsiVideo} width='350' height='200' alt="Pepsi World Cup 2018 commercial.">Your browser does not support .mp4 video.</video>
                    </div>
                </ProjectDemo>
            </Route>

        {/* *************************Radio Dramas (Bart and Rebecca demo)************************* */}

            <Route path={`${match.path}/radio_dramas`}>
                <ProjectDemo {...projectsJSON.radio_dramas}>
                    <audio controls>
						<source src={titsAudio} type="audio/mpeg"/>
						Your browser does not support .mp3 audio files.
					</audio>
                </ProjectDemo>
            </Route>

        {/* *************************Drum Pad************************* */}

            <Route path={`${match.path}/drum_padvisualizer`}>
                <ProjectDemo {...projectsJSON.drum_padvisualizer}>
                <iframe width="350" height="215" src="https://www.youtube.com/embed/-hEwV0057xE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </ProjectDemo>
            </Route>

        </Switch>
    )
}

export default ProjectList;