import React from "react"
import styled from "styled-components"
import SideCanvas from "../components/SideCanvas"
import { Link as RouterLink } from "gatsby"
import Theme from "../components/Theme"
const Container = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 660px) {
    display: flex;
    flex-direction: row;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(255, 147, 147, 1) 0%,
    rgba(255, 110, 110, 1) 33%,
    rgba(255, 65, 65, 1) 67%,
    rgba(255, 24, 24, 1) 100%
  );
  border: 1px solid ${props => props.theme.colors.pink};
  h1 {
    margin-top: 25vh;
    margin-right: 10%;
    font-size: 4em;
    text-align: right;
    color: ${props => props.theme.colors.lightGray};
  }

  @media only screen and (min-width: 660px) {
    width: 75%;
    h1 {
      margin-right: 20%;
    }
  }
`

const LinkContainer = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 660px) {
    margin-top: 10%;
    margin-right: 20%;
    text-align: right;
    display: block;
  }
  @media (orientation: landscape) {
    margin-top: 0;
  }
`

const Link = styled(RouterLink)`
  margin: 0 25% 5% 25%;
  padding: 5%;
  text-decoration: none;
  outline: none;
  font-size: 1.5em;
  color: ${props => props.theme.colors.lightGray};
  border: 1px solid ${props => props.theme.colors.lightGray};
  background: ${props => props.theme.colors.pink};
  &:hover {
    background: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.red};
  }

  @media only screen and (min-width: 660px) {
    margin: 0;
    padding: 5% 0 0 0;
    font-size: 2em;
    border: none;
    background: none;
    display: inline-block;
    /* cool moving underline css */
    &&::after {
      position: relative;
      content: "";
      background: ${props => props.theme.colors.lightPink};
      height: 2px;
      display: block;
      width: 100%;
      transform: scaleX(0);
      visibility: hidden;
      transition: all 0.3s ease-in-out 0s;
    }
    :hover::after {
      transform: scaleX(1.5);
      visibility: visible;
    }
    &:hover {
      background: none;
      color: ${props => props.theme.colors.lightGray};
    }
  }
`

function Home() {
  return (
    <Theme>
      <Container className="Home">
        <Content>
          <h1>
            Alexandra
            <br />
            D'Yan
          </h1>
          <LinkContainer>
            <Link to="/portfolio">Projects</Link>
            <br />
            <Link to="/about">About</Link>
          </LinkContainer>
        </Content>
        <SideCanvas />
      </Container>
    </Theme>
  )
}

export default Home
