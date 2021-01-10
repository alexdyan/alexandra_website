import React from "react"
// import all the images for the project covers
import soundGardenImg from "../../assets/images/soundGarden.jpeg"
import ProjectDemo from "../../components/ProjectDemo"
import projectsJSON from "../../projects.json"

const SoundGarden = () => (
  <ProjectDemo {...projectsJSON.sound_garden}>
    <img
      src={soundGardenImg}
      alt="Sound Garden"
      style={{ width: "96%", height: "auto" }}
    />
  </ProjectDemo>
)

export default SoundGarden
