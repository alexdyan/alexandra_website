import React from "react"
import titsAudio from "../../assets/audio/tits.mp3"
import ProjectDemo from "../../components/ProjectDemo"
import projectsJSON from "../../projects.json"

const RadioDramas = () => (
  <ProjectDemo {...projectsJSON.radio_dramas}>
    <audio controls>
      <source src={titsAudio} type="audio/mpeg" />
      Your browser does not support .mp3 audio files.
    </audio>
  </ProjectDemo>
)

export default RadioDramas
