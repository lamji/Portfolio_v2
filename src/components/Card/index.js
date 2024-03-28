/** @format */

import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Card(data) {
  return (
    <div className="">
      {data.data.position === "right" ? (
        <>
          <Grid container className="">
            <Grid item xs={12} md={6} className="titleWrapper forWide">
              <h2 className="headerCard">{data.data.title}</h2>
              <p>{data.data.subtext}</p>
              <p>{data.data.descriptions}</p>
              <Button
                variant="contained"
                className="github"
                onClick={() => window.open(data.data.demoLink, "_blank")}
              >
                View
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={data.data.img}
                alt="home pic"
                className="img-fluid img"
                style={{ maxHeight: "350px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} className="titleWrapper forMobile">
              <h2 className="headerCard">{data.data.title}</h2>
              <p>{data.data.subtext}</p>
              <p>{data.data.descriptions}</p>
              <Button
                variant="contained"
                className="github"
                onClick={() => window.open(data.data.demoLink, "_blank")}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container className="cardWrapper">
            <Grid item xs={12} md={6}>
              <img
                src={data.data.img}
                alt="home pic"
                className="img-fluid img"
                style={{ maxHeight: "350px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} className="titleWrapperLeft">
              <h2 className="headerCard">{data.data.title}</h2>
              <p>{data.data.subtext}</p>
              <p>{data.data.descriptions}</p>
              <Button
                variant="contained"
                className="github"
                onClick={() => window.open(data.data.demoLink, "_blank")}
              >
                View
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}
