import React from "react"
import blackBoxImg from "../../assets/images/blackbox.jpeg"
import ProjectDemo from "../../components/ProjectDemo"

import projectsJSON from "../../projects.json"
import Layout from "../../components/Layout"

const BlackBox = () => (
  <Layout>
    <ProjectDemo {...projectsJSON.blackbox}>
      <img
        src={blackBoxImg}
        alt="BlackBox game"
        style={{ width: "96%", height: "auto" }}
      />
    </ProjectDemo>
  </Layout>
)

export default BlackBox
