/** @format */

import React from "react";
import { Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Skill from "../skills";
import Type from "./Type";
import Card from "../Card";
import Common, { jobExperienceData } from "../../common";
import JobExperienceTimeline from "../Experience";
import Footer from "../Footer";

function Home() {
  const data = Common();

  return (
    <div>
      <div>
        <div className="home-content home" id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="">
                Hi There!
              </h1>
              <h1 className="">
                I'M
                <strong className="main-name"> JICK LAMPAGO</strong>
              </h1>

              <div className="">
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
          <div className="skillWrapper subWrapper" id="skill">
            <h1 style={{ fontWeight: 700 }}>
              Acquired <span className="spanMe">skills</span>
            </h1>
            <Skill />
          </div>
          <div className="subWrapper">
            <h1 style={{ fontWeight: 700 }}>
              My Job <span className="spanMe">Experience</span>
            </h1>
            <JobExperienceTimeline jobExperience={jobExperienceData} />
          </div>
          <div className="subWrapper">
            <h1 style={{ fontWeight: 700, marginBottom: "40px" }}>
              Personal<span className="spanMe"> Projects</span>
            </h1>
            {data.projects.map((info, idx) => {
              return <Card key={idx} data={info} />;
            })}
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
