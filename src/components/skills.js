/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Mern from "./mern";
import Knowledge from "./knowledge";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "40px",
  },
  SkillsTitle: {
    margin: "50px 0 50px 0",
    fontSize: "50px",
  },
  skillsWrapper: {
    p: 5,
    // background: "#56006a",
    color: "var(--main-color)",
    marginRight: "10px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    textTransform: "uppercase",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            className={classes.CenterSection}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} sm={4} md={2} sx={{ mb: 2 }}>
                <Typography variant="body1" className={classes.skillsWrapper}>
                  Html 5
                </Typography>
              </Grid>
              <Grid item xs={4} sm={2} md={2}>
                <Typography variant="body1" className={classes.skillsWrapper}>
                  Css 3
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={2} className={classes.skillsWrapper}>
                <Typography variant="body1">Sass</Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={2} className={classes.skillsWrapper}>
                <Typography variant="body1">Bootstrap 4</Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={6} sm={4} md={2} className={classes.skillsWrapper}>
                <Typography variant="body1">MUI 5</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={3} className={classes.skillsWrapper}>
                <Typography variant="body1" className={classes.skillsWrapper}>
                  React- Bootstrap
                </Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.skillsWrapper}>
                <Typography variant="body1">React-Sass</Typography>
              </Grid>
              <Grid item xs={6} sm={4} md={2} className={classes.skillsWrapper}>
                <Typography variant="body1">Next.js</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* MERN Stack Tech */}
          <Grid item xs={12}>
            <Mern />
          </Grid>
          {/* Knowledge section */}
          <Grid item xs={12}>
            <Knowledge />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
