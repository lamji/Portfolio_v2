/** @format */

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  timeline: {
    position: "relative",
    padding: "1rem",
    "&::after": {
      content: "''",
      position: "absolute",
      height: "100%",
      width: "2px",
      backgroundColor: theme.palette.primary.main,
      left: "0%",
      top: 0,
      transform: "translateX(-50%)",
    },
  },

  item: {
    marginBottom: theme.spacing(4),
    position: "relative",
    paddingLeft: "2rem",
    "&::after": {
      content: "''",
      position: "absolute",
      height: "1px",
      width: "20px",
      backgroundColor: theme.palette.primary.main,
      left: "0%",
      top: "50px",
      transform: "translateX(-50%)",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      height: "10px",
      width: "10px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "50%",
      left: "10px",
      top: "50px", // Adjust the top property to add margin
      transform: "translateY(-50%)",
    },
  },
}));

export default useStyles;
