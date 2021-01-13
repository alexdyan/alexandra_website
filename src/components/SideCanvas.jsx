import React, { useRef, useEffect } from "react"
import Circle from "./Circle"
import styled from "styled-components"
let p5
const Container = styled.div`
  width: 25%;
  height: 100vh;
  &&canvas::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: blue;
  }
  @media only screen and (max-width: 660px) {
    width: 0;
    height: 0;
  }
`

const Glass = styled.div`
  position: absolute;
  right: 0;
  width: 25%;
  height: 100%;
  background: hsla(205, 20%, 50%, 10%);
  backdrop-filter: blur(2px);
  z-index: 100;
  @media only screen and (max-width: 660px) {
    width: 0;
    height: 0;
  }
`

const SideCanvas = () => {
  const ref = useRef()

  /* p5 setup function */
  const setup = (p, parent) => {
    const { width, height } = parent.getBoundingClientRect()
    p.parent = parent
    p.createCanvas(width, height)
    p.noiseDetail(24)
    p.colorMode(p.HSB, 360, 100, 100)

    for (let i = 0; i < 100; i++) {
      if (i === 0) var temp = new Circle(p.random(width), p.random(height), p)
      else var temp = new Circle(p.random(width), p.random(height), p)
      p.theCircles.push(temp)
    }
  }

  /* p5 draw function */
  const draw = (p, parent) => {
    p.background(0, 0, 100)

    for (var i = 0; i < 50; i++) {
      p.theCircles[i].displayAndMove(p)
    }
  }

  useEffect(() => {
    const p5 = require("p5")
    const sketch = new p5(p => {
      p.setup = () => setup(p, ref.current)
      p.draw = () => draw(p)
      p.windowResized = () => {
        const { width, height } = p.parent.getBoundingClientRect()
        p.resizeCanvas(width, height)
      }
      // initialize your global variables here if you want
      p.offset = 1.0
      p.theCircles = []
    }, ref.current) // attach the canvas to the Container div (important)
  }, [])

  return (
    <Container ref={ref}>
      <Glass />
    </Container>
  )
}

export default SideCanvas
