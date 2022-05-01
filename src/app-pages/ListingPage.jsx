import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Toolbar, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import callAPI from "../api/api";

export default function ListingPage() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(async () => {
    const listingData = await callAPI("products", "GET");
    setData(listingData[params.itemId]);
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <Container component="main">
      <Typography>Listing for item with id {params.itemId}</Typography>
      {data && <img src={data.img.url} alt={data.img.url} />}
    </Container>
  );
}
