/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covidDark from "../../Assets/Projects/Covid10Dark.png";
import covidLight from "../../Assets/Projects//covidLight.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidDark}
              isBlog={false}
              title="Covid 19 tracker dark mode"
              description="React.js - Next.js - React Bootstrap - React Sass - MapBox - JavaScrip Es6 - Public API"
              ghLink="https://github.com/lamji/Covid19_Tracker_v.2/tree/main"
              demoLink="https://covid19-tracker-v-2-git-main-lamji.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidLight}
              isBlog={false}
              title="Covid 19 tracker light mode"
              description="React.js - Next.js - React Bootstrap - React Sass - MapBox - JavaScrip Es6 - Public API"
              ghLink=""
              demoLink="/https://covid-19-tracker-bay-nu.vercel.app/?fbclid=IwAR1dfYqX7e4vQ1gWJ-aD1the4QHZQm5RWNM-vEuLnWtT6WZ7gnypqNJVR8s"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
