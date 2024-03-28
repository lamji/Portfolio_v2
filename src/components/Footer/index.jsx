/** @format */

import React from "react";
import useStyles from "./useStyles";
import { Box, Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const styles = useStyles();
  return (
    <Box sx={styles.root}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SocialIcon
            url="https://linkedin.com"
            target="_blank"
            style={styles.icons}
          />
          <SocialIcon
            url="https://www.facebook.com/mathew.lampago.3/"
            style={styles.icons}
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/lamji"
            target="_blank"
            style={styles.icons}
          />
        </Box>
        <Typography sx={styles.text}>All rights reserved</Typography>
        <Typography sx={styles.text}>Designed by Jick Lampago 2020</Typography>
      </Box>
    </Box>
  );
}
