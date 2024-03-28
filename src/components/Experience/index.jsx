/** @format */

import React from "react";
import { Paper, Typography } from "@mui/material";
import useViewModel from "./useViewModel";

const JobExperienceTimeline = ({ jobExperience }) => {
  const { classes } = useViewModel();

  return (
    <div className={classes.root}>
      <div className={classes.timeline}>
        {jobExperience.map((job, index) => (
          <Paper
            key={index}
            elevation={0}
            className={classes.item}
            sx={{ background: "transparent" }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              mb={0}
              style={{ color: "#E55604" }}
            >
              {job.company}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              {job.address}
            </Typography>
            <Typography variant="body1" mb={0}>
              {job.position}
            </Typography>
            <Typography variant="subtitle1" mb={0}>
              {job.year}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              {job.description}
            </Typography>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default JobExperienceTimeline;
