import React, { useEffect, useState } from "react";
import {
  Button as MUIButton,
  Grid,
  Divider,
  Typography,
  Chip,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import callAPI from "../api/api";
import bitcoin from "../images/btc.png";
import ethereum from "../images/eth.png";
import doge from "../images/doge.png";

const ListingImage = styled("img")`
  border-radius: 0.5rem;
  margin-block: 1rem;
`;

const ListingContainer = styled(Grid)`
  margin-block-start: 2rem;
`;
const MapPlaceholder = styled("div")`
  display: block;
  min-width: 300px;
  min-height: 300px;
  background-color: blue;
  text-align: center;
  color: white;
`;
const PriceIcon = styled("img")`
  display: inline-block;
  max-width: 1.5rem;
  max-height: 1.5rem;
`;

const Button = styled(MUIButton)`
  width: max-content;
  margin-block: 1rem 0;
`;

const TagContainer = styled("div")`
  margin-block-start: 2rem;
  margin-block-end: 2rem;
`;

const CryptoExchange = styled("div")`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  column-gap: 5px;
  span {
    text-align: center;
    min-width: 1.5rem;
  }
`;

const ListingAside = styled("aside")`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  margin-block-start: 1rem;
  row-gap: 0.5rem;

  p {
    margin: 0;
  }
  button {
    justify-self: end;
  }
`;

const AsideInfo = styled("div")`
  display: flex;
  flex-flow: column nowrap;

  span {
    font-weight: 700;
  }
`;

function CoinPrice(src, coin) {
  return (
    <CryptoExchange>
      <span>
        <PriceIcon src={src} alt={coin} />
      </span>
      some price
    </CryptoExchange>
  );
}

export default function ListingPage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [tags] = useState(["furniture", "modern", "wood", "used"]);

  useEffect(async () => {
    const listingData = await callAPI("products", "GET");
    setData(listingData[params.itemId]);
  }, []);

  return (
    data && (
      <ListingContainer container direction="row" spacing={4} component="main">
        <Grid container direction="column" item xs={4}>
          <ListingImage src={data.img.url} alt={data.img.url} />
          <Typography variant="h4" component="p">
            {data.price} USD
          </Typography>
          {CoinPrice(bitcoin, "bitcoin")}
          {CoinPrice(ethereum, "ethereum")}
          {CoinPrice(doge, "doge")}

          <Button variant="contained">Buy Now</Button>

          <Button variant="contained">Send an Offer</Button>

          <TagContainer>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} variant="outlined" />
            ))}
          </TagContainer>
        </Grid>

        <Grid item xs={8}>
          <Typography variant="h3" component="h1">
            {data.name}
          </Typography>

          <Divider />
          <Typography>Vendor Info</Typography>
          <Divider />

          <Grid container spacing={3} component="section">
            <Grid item xs={8}>
              <Typography
                variant="string"
                component="h4"
                sx={{ marginBlock: "1rem" }}
              >
                Description
              </Typography>
              <Typography>The actual description</Typography>

              <Typography
                variant="string"
                component="h4"
                sx={{ marginBlock: "1rem" }}
              >
                Approximate Location
              </Typography>
              <MapPlaceholder>This is a Map lol</MapPlaceholder>
            </Grid>

            <Grid item xs={2}>
              <ListingAside>
                <AsideInfo>
                  <p>
                    <span>Condition:</span>New
                  </p>
                  <p>
                    <span>Shipping:</span>None
                  </p>
                </AsideInfo>

                <Button variant="contained">Add to Wishlist</Button>
              </ListingAside>
            </Grid>
          </Grid>
        </Grid>
      </ListingContainer>
    )
  );
}
