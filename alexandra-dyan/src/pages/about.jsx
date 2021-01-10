import React from "react"
import styled from "styled-components"
import instagram from "../assets/images/instagram.svg"
import linkedin from "../assets/images/linkedin.svg"
import Layout from "../components/Layout"
const Container = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin: 0 0 10% 5%;
    padding-top: 5%;
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

  @media only screen and (min-width: 660px) {
    width: 60%;
    min-width: 600px;
    margin: 0 auto;
  }
`

const SocialMediaButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0 55% 2% 5%;
  align-items: center;
  color: black;
  text-decoration: none;
  outline: none;
  &:hover,
  &:active {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.pink};
  }
  /* put this element before whatever is in the SocialMediaButton tag */
  &::before {
    content: "";
    background-image: ${props => `url(${props.icon})`};
    background-size: 100% 100%;
    width: 60px;
    height: 60px;
    margin-right: 10%;
  }
`

function About() {
  return (
    <Container className="About">
      <h1>About</h1>
      <p>
        Alexandra is a graduate of the Music Technology program at New York
        University. Her main interests, as well as career aspirations, include
        creative coding and sound design. She also uploads digital art
        experiments to her Instagram account in her free time, and enjoys
        exploring the intersection of art and technology.
      </p>
      <div className="gap">
        <SocialMediaButton
          icon={instagram}
          href="https://www.instagram.com/helloworld.alex/"
        >
          Instagram
        </SocialMediaButton>
        <SocialMediaButton
          icon={linkedin}
          href="https://www.linkedin.com/in/alexandra-dyan/"
        >
          LinkedIn
        </SocialMediaButton>
      </div>
    </Container>
  )
}

export default About
