import { Grid } from "@mui/material";
import React from "react";
import "./Home.css";

export default function HomePage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>Temp</Grid>
      <Grid item>Temp</Grid>
      <Grid item>Temp</Grid>
    </Grid>
  );
}
