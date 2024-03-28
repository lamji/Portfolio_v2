/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Container: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
  Title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "var(--main-color)",
  },
  LogoHolderM: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
    border: "2px solid #4caf50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  LogoHolderE: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
    border: "2px solid #f7df1e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  LogoHolderR: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
    border: "2px solid #61dafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  LogoHolderN: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
    border: "2px solid #4caf50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  LogoHolder: {
    width: "50px",
    height: "50px",
    borderRadius: 50,
    border: "2px solid #61dafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  },
  SubTitle: {
    fontSize: "12px",
    width: "80%",
    height: "80px",
    color: "var(--main-color)",
  },
  Image: {
    width: "80%",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.Container}
      >
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="mernWrapper"
        >
          <Grid className={classes.LogoHolderM}>
            <img src="./mongodb.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            MongoDB
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            Experienced MongoDB developer skilled in designing and implementing
            robust, scalable database solutions. Proficient in data modeling,
            query optimization, replication, sharding, and integration.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="mernWrapper"
        >
          <Grid className={classes.LogoHolderE}>
            <img src="./expressjs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            Express.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            Expertise in leveraging the power of Express.js and MongoDB to
            develop efficient and high-performing solutions for modern web
            development needs.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="mernWrapper"
        >
          <Grid className={classes.LogoHolderR}>
            <img src="./reactjs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            React.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            Experienced in React.js development, proficient in building dynamic
            and responsive user interfaces for web applications. Skilled in
            state management, component lifecycle, and integrating with RESTful
            APIs.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className="mernWrapper"
        >
          <Grid className={classes.LogoHolderN}>
            <img src="./nodejs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            Node.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            Experienced in Node.js development, proficient in building scalable
            and efficient server-side applications. Skilled in creating RESTful
            APIs, handling asynchronous operations, and implementing middleware.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
