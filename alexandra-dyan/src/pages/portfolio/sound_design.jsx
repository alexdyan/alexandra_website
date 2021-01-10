import React from "react"
import orbSleepImg from "../../assets/images/orbThumbNail.jpeg"
import pepsiImg from "../../assets/images/pepsiThumbNail.jpeg"
import OrbSleepVideo from "../../assets/video/Orbsleep_Alexandra.mp4"
import pepsiVideo from "../../assets/video/Pepsipaint_Alexandra.mp4"
import ProjectDemo from "../../components/ProjectDemo"
import projectsJSON from "../../projects.json"

const SoundDesign = () => (
  <ProjectDemo {...projectsJSON.sound_design}>
    <div>
      <video
        controls
        poster={orbSleepImg}
        src={OrbSleepVideo}
        width="350"
        height="200"
        alt="Futuristic vitamins commercial."
      >
        Your browser does not support .mp4 video.
      </video>
      <video
        controls
        poster={pepsiImg}
        src={pepsiVideo}
        width="350"
        height="200"
        alt="Pepsi World Cup 2018 commercial."
      >
        Your browser does not support .mp4 video.
      </video>
    </div>
  </ProjectDemo>
)

export default SoundDesign
