/** @format */

import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  link: {
    cursor: "pointer",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: "#3e416a",
    color: theme.palette.primary.contrastText,
    height: "100px",
    width: "70px",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    opacity: "0.4",

    borderColor: "#C0C0C0",
    borderWidth: 50,
  },
}));

const NavigationComponent = () => {
  const classes = useStyles();
  const router = useRouter();
  const [option, setOption] = React.useState("");

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.link} onClick={() => handleNavigation("/")}>
        Home
      </div>
      <div className={classes.link} onClick={() => handleNavigation("/skills")}>
        Skills
      </div>
      <div
        className={classes.link}
        onClick={() => handleNavigation("/projects")}
      >
        Projects
      </div>
      <div
        className={classes.link}
        onClick={() => handleNavigation("/contact")}
      >
        Contact
      </div>
    </Grid>
  );
};

export default NavigationComponent;
