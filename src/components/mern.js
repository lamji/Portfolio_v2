/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

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
        justify="center"
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
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.LogoHolderM}>
            <img src="./mongodb.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            MongoDB
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            MongoDB is a document database, which means it stores data in
            JSON-like documents.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.LogoHolderE}>
            <img src="./expressjs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            Express.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            The moment i started using node.js i used express.js. It is minimal
            and flexible framework of node.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.LogoHolderR}>
            <img src="./reactjs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            React.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            I love using React on my entire project because it make coding life
            more easier and faster.
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
          md={2}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid className={classes.LogoHolderN}>
            <img src="./nodejs.png" alt="" className={classes.Image} />
          </Grid>
          <Typography variant="body1" className={classes.Title}>
            Node.js
          </Typography>
          <Typography variant="body1" className={classes.SubTitle}>
            {`Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine.`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
