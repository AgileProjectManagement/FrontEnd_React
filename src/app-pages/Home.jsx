import { Grid, Typography, Container } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { styled } from "@mui/material/styles";
import theme from "../MUITheme";
import bitcoin from "../images/btc.png";
import ethereum from "../images/eth.png";
import doge from "../images/doge.png";

const ColorBackground = styled(Container)`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  padding: 0;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Slideshow = styled(Grid)`
  width: 150px;
  overflow: hidden;
  margin: 25px auto;
  /* background: white; */
`;

const Photobanner = styled("div")`
  height: 150px;
  width: 300px; /*! needs to be width of images combined */
  width: 300%;
`;

const CryptoIcon = styled("img")`
  display: inline-block;
  height: 150px;
`;

const FirstIcon = styled(CryptoIcon)`
  animation: bannermove 30s linear infinite;

  @keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    50% {
      margin-left: -300px; /*! needs to be width of images combined */
    }
    100% {
      margin-left: 0px;
    }
  }
`;

export default function HomePage() {
  const items = [
    "furniture",
    "shoes",
    "pokemon cards",
    "headphones",
    "a phone",
  ];

  return (
    <ColorBackground disableGutters maxWidth="xl">
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
        <Slideshow item>
          <Photobanner>
            <FirstIcon src={bitcoin} alt="bitcoin logo" />
            <CryptoIcon src={doge} alt="doge coin logo" />
            <CryptoIcon src={ethereum} alt="ethereum logo" />
          </Photobanner>
        </Slideshow>
      </Grid>
    </ColorBackground>
  );
}
