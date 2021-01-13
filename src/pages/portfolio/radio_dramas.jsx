import React from "react"
import titsAudio from "../../assets/audio/tits.mp3"
import ProjectDemo from "../../components/ProjectDemo"

import projectsJSON from "../../projects.json"
import Layout from "../../components/Layout"

const RadioDramas = () => (
  <Layout>
    <ProjectDemo {...projectsJSON.radio_dramas}>
      {/* eslint-disable-next-line */}
      <audio controls>
        <source src={titsAudio} type="audio/mpeg" />
        Your browser does not support .mp3 audio files.
      </audio>
    </ProjectDemo>
  </Layout>
)

export default RadioDramas
