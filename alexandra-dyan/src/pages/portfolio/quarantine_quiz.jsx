import React from "react"
import projectsJSON from "../../projects.json"
import ProjectDemo from "../../components/ProjectDemo"
import quarantineQuizImg2 from "../../assets/images/quarantine2.jpeg"

const QuarantineQuiz = () => (
  <ProjectDemo {...projectsJSON.quarantine_quiz}>
    <img
      src={quarantineQuizImg2}
      alt="Quarantine Quiz"
      style={{ width: "96%", height: "auto" }}
    />
  </ProjectDemo>
)

export default QuarantineQuiz
