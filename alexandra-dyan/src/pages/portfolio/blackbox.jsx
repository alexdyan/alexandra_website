import React from "react"
import blackBoxImg from "../../assets/images/blackbox.jpeg"
import ProjectDemo from "../../components/ProjectDemo"
import projectsJSON from "../../projects.json"

const BlackBox = () => (
  <ProjectDemo {...projectsJSON.blackbox}>
    <img
      src={blackBoxImg}
      alt="BlackBox game"
      style={{ width: "96%", height: "auto" }}
    />
  </ProjectDemo>
)

export default BlackBox
