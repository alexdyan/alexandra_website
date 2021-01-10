import React from "react"
import projectsJSON from "../../projects.json"
import ProjectDemo from "../../components/ProjectDemo"

const DLayPlugin = () => (
  <ProjectDemo {...projectsJSON.dlay_plugin}>
    <iframe
      width="350"
      height="215"
      src="https://www.youtube.com/embed/ST_dPqxNdS8"
      title="DLay demo 1"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </ProjectDemo>
)

export default DLayPlugin
