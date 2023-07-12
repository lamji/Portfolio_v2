/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Skill from "../skills";
import { Box } from "@mui/material";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Box
        sx={{
          height: "100vh",
          margin: "0 auto",
          width: {
            sm: "100%",
            md: "80%",
            lg: "80%",
            xl: "80%",
          },
        }}
      >
        <h1
          className="project-heading"
          style={{
            marginBottom: "20px",
            fontWeight: 700,
          }}
        >
          About <strong className="purple">Me </strong>
        </h1>
        <p>
          Hi, I'm <strong className="purple">Jick Lampago</strong> ! I'm a
          passionate React developer with experience since 2020. I love building
          interactive and dynamic web applications that provide great user
          experiences.
        </p>
        <p>
          My journey in web development started with HTML, CSS, and JavaScript,
          but I quickly fell in love with React for its component-based
          architecture and efficient rendering. Over the years, I've gained a
          solid understanding of React's core concepts, including state
          management, component lifecycle, and hooks.
        </p>
        <p>
          I enjoy working in collaborative teams, where I can contribute my
          skills and learn from others. I strive to write clean, maintainable,
          and scalable code, following best practices and industry standards.
        </p>
        <p>
          Aside from React, I'm also familiar with other web technologies like
          Redux, Next.js, and api integrations. I continuously stay up-to-date
          with the latest trends and advancements in the React ecosystem to
          ensure I can deliver high-quality solutions.
        </p>
        <p>
          If you have any exciting projects or opportunities, feel free to reach
          out! I'm always open to new challenges and collaborations.
        </p>
      </Box>
      <Box
        sx={{
          marginTop: {
            xs: "200px",
            md: "10px",
          },
        }}
      >
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Skill />
      </Box>
    </Container>
  );
}

export default About;
