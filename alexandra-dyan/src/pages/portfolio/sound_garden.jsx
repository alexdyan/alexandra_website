import React from "react"
// import all the images for the project covers
import soundGardenImg from "../../assets/images/soundGarden.jpeg"
import ProjectDemo from "../../components/ProjectDemo"

import projectsJSON from "../../projects.json"
import Layout from "../../components/Layout"

const SoundGarden = () => (
  <Layout>
    <ProjectDemo {...projectsJSON.sound_garden}>
      <img
        src={soundGardenImg}
        alt="Sound Garden"
        style={{ width: "96%", height: "auto" }}
      />
    </ProjectDemo>
  </Layout>
)

export default SoundGarden
