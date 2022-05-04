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
import GoogleMap from "../app-components/GoogleMap";
import ImageGallery from "../app-components/ImageGallery";
import CryptoPrice from "../app-components/CryptoPrice";

const ListingContainer = styled(Grid)`
  margin-block-start: 2rem;
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
  overflow:hidden;

  span {
    font-weight: 700;
  }
  button {
    max-width:100%:
  }
`;

export default function ListingPage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [tags] = useState(["furniture", "modern", "wood", "used"]);
  const [price, setPrice] = useState(150);

  useEffect(async () => {
    const listingData = await callAPI(`products/${params.itemId}`, "GET");
    setData(listingData);
    setImages([
      listingData.image1,
      listingData.image2,
      listingData.image3,
      listingData.image4,
      listingData.image5,
    ]);
    setPrice(listingData.price);
    console.log("inside use effect: ", listingData.price);
  }, []);

  const coinPrice = (src, coin) => {
    console.log("price: ", price);
    return (
      <CryptoExchange>
        <span>
          <PriceIcon src={src} alt={coin} />
        </span>
        <CryptoPrice type={coin} price={200} />
      </CryptoExchange>
    );
  };
  return (
    data && (
      <ListingContainer
        container
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        component="main"
      >
        <Grid container direction={{ xs: "row", md: "column" }} item xs={4}>
          <ImageGallery images={images} />
          <div>
            <Typography variant="h4" component="p">
              {data.price} USD
            </Typography>
            {/* {coinPrice(bitcoin, "BTC")} */}
            {/* {coinPrice(ethereum, "ETH")} */}
            {/* {CoinPrice(doge, "doge")} */}
            <CryptoExchange>
              <span>
                <PriceIcon src={bitcoin} alt="bitcoin" />
              </span>
              <CryptoPrice type="BTC" price={price} />
            </CryptoExchange>
          </div>

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
            <Grid item xs={9}>
              <Typography
                variant="string"
                component="h4"
                sx={{ marginBlock: "1rem" }}
              >
                Description
              </Typography>
              <Typography>{data.description}</Typography>

              <Typography
                variant="string"
                component="h4"
                sx={{ marginBlock: "1rem" }}
              >
                Approximate Location
              </Typography>

              <GoogleMap />
            </Grid>

            <Grid item xs={3}>
              <ListingAside>
                <AsideInfo>
                  <p>
                    <span>Condition:</span>
                    {data.condition}
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
