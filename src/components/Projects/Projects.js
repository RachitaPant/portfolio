import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Node Farm"
              description="A simple backend API that allows users to perform CRUD (Create, Read, Update, Delete) operations on a list of items. We'll use Express.js to handle the routing and MongoDB as the database to store the items."
              ghLink="https://github.com/RachitaPant/Node-farm"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Background Changer"
              description="A simple background changer that allows users to click a button and change the background color of the page randomly. This project will use HTML, CSS, and JavaScript to achieve the functionality."
              ghLink="https://github.com/RachitaPant/backgroundchanger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dice Game"
              description="In this two-player dice game implemented in plain JavaScript, each player takes turns guessing the sum of two dice rolls. The game starts with Player 1, who rolls two dice using Math.random() and then enters their guess for the sum."
              ghLink="https://github.com/RachitaPant/DiceGame"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
