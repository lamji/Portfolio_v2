/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
  },
  Title: {
    fontSize: "11px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  SubTitle: {
    fontSize: "11px",
    margin: "6px 0",
  },
  Image: {
    width: "20px",
    height: "20px",
    borderRadius: 10,
    margin: "0 7px ",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginTop: "30px",
        }}
      >
        <Typography variant="body1" className={classes.Title}>
          INTEGRATION AND STATE MANAGEMENT TOOLS
        </Typography>
        <Grid
          item
          xs={12}
          sm={10}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <img src="./React-icon.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            AXIOS
          </Typography>
          <img src="./toolkit.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            REDUX
          </Typography>
          <img src="./React-icon.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            FETCH
          </Typography>
          <img src="./toolkit.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            REDUX-TOOLKIT
          </Typography>
          <img src="./react-query.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            REACT-QUERY
          </Typography>
          <img src="./gitlogo.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            GIT VERSION CONTROL
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="body1" className={classes.Title}>
          KNOWLEDGE IN THE FOLLOWING
        </Typography>
        <Grid
          item
          xs={12}
          sm={10}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <img src="./photoshop.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            Photoshop
          </Typography>
          <img src="./figma.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            Figma
          </Typography>
          <img src="./jwt.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            JWT Auth
          </Typography>
          <img src="./Ajax.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            Ajax
          </Typography>
          <img src="./jquery.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            JQuery
          </Typography>
          <img src="./gitlogo.png" alt="" className={classes.Image} />
          <Typography variant="body1" className={classes.SubTitle}>
            Git Version Control
          </Typography>
        </Grid>
      </Grid> */}
    </div>
  );
}
