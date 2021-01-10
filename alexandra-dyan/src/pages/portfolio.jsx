import React from "react"
import styled from "styled-components"
import blackBoxImg from "../assets/images/blackbox.jpeg"
import pepsiImg from "../assets/images/pepsiThumbNail.jpeg"
import quarantineQuizImg from "../assets/images/quarantine.png"
// import all the images for the project covers
import soundGardenImg from "../assets/images/soundGarden.jpeg"
import titsImg from "../assets/images/tits.jpeg"
import ProjectItem from "../components/ProjectItem"
import Layout from "../components/Layout"

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

  @media only screen and (min-width: 660px) {
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
    "sound_garden sound_garden"
    "quarantine_quiz dlay_plugin"
    "quarantine_quiz blackbox"
    "sound_design sound_design"
    "radio_dramas drum_padvisualizer";
  box-sizing: border-box;
`

function ProjectList() {
  return (
    <Container className="ProjectList">
      <h1>Projects</h1>
      <GridContainer>
        <ProjectItem name="Sound Garden" imageSrc={soundGardenImg} />
        <ProjectItem name="Quarantine Quiz" imageSrc={quarantineQuizImg} />
        <ProjectItem name="D'Lay Plug-In" youtubeId="k9tQWE3TW9U" />
        <ProjectItem name="Sound Design" imageSrc={pepsiImg} />
        <ProjectItem name="BlackBox" imageSrc={blackBoxImg} />
        <ProjectItem name="Radio Dramas" imageSrc={titsImg} />
        <ProjectItem name="Drum Pad Visualizer" youtubeId="-hEwV0057xE" />
      </GridContainer>
    </Container>
  )
}

export default ProjectList
