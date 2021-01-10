import React from "react"
import ProjectDemo from "../../components/ProjectDemo"
import projectsJSON from "../../projects.json"

const DrumPadVisualizer = () => (
  <ProjectDemo {...projectsJSON.drum_padvisualizer}>
    <iframe
      width="350"
      height="215"
      src="https://www.youtube.com/embed/-hEwV0057xE"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </ProjectDemo>
)

export default DrumPadVisualizer
