import { Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import theme from "../MUITheme";
import "./Home.css";
import bitcoin from "../images/btc.png";
import ethereum from "../images/eth.png";
import doge from "../images/doge.png";

export default function HomePage() {
  const items = [
    "furniture",
    "shoes",
    "pokemon cards",
    "headphones",
    "a phone",
  ];
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "90vh" }}
    >
      <Grid item direction="row" justifyContent="center">
        <Grid sx={{ display: "inline-block", margin: "7.5px" }} item>
          <Typography sx={{ color: theme.palette.primary.text }} variant="h2">
            {Math.floor(Math.random() * items.length) === 1 ? "Buy" : "Sell"}{" "}
            {items[Math.floor(Math.random() * items.length)]} with
          </Typography>
        </Grid>
        <Grid sx={{ display: "inline-block", margin: "7.5px" }} item>
          <Typography sx={{ color: theme.palette.primary.text }} variant="h2">
            <Typewriter
              options={{
                strings: ["Ethereum", "Bitcoin", "Dogecoin", "Litecoin"],
                pauseFor: 2000,
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </Grid>
      </Grid>
      <Grid className="slideshow" item>
        <div className="photobanner">
          <img className="first" src={bitcoin} />
          <img src={doge} />
          <img src={ethereum} />
        </div>
      </Grid>
    </Grid>
  );
}
