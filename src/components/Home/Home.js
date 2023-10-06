/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Skill from "../skills";
import Type from "./Type";
import Card from "../Card";
import Common from "../../common";

function Home() {
  const data = Common();

  // console.log(data);
  return (
    <div className="root-container">
      <div className="home-content" id="home">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!
            </h1>
            <h1 className="heading-name">
              I'M
              <strong className="main-name"> JICK LAMPAGO</strong>
            </h1>

            <div className="contactsWrapper">
              <Type />
              <div className="mobileTop"></div>
              <p>
                I'm a passionate React developer with experience since 2020. I
                love building interactive and dynamic web applications that
                provide great user experiences.
              </p>
              <div className="flexWrapper">
                <AddIcCallIcon />
                <p
                  style={{
                    marginBottom: "5px",
                    marginLeft: "10px",
                  }}
                >
                  09490390624
                </p>
              </div>
              <div className="flexWrapper">
                <MailOutlineIcon />
                <p
                  style={{
                    marginBottom: "5px",
                    marginLeft: "10px",
                  }}
                >
                  lampagojick5@gmail.com
                </p>
              </div>
            </div>

            <div style={{ padding: 50, textAlign: "left" }}></div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </div>
      <h2 className="projectsHeader">
        {" "}
        This is some of my <span className="spanMe">personal projects</span>
      </h2>
      {data.projects.map((info, idx) => {
        return <Card key={idx} data={info} />;
      })}

      <div className="skillWrapper" id="skill">
        <h2 className="projectsHeader">
          Acquired <span className="spanMe">skills</span>
        </h2>
        <Skill />
      </div>
    </div>
  );
}

export default Home;
