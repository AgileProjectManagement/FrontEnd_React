import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";

import FilterList from "@mui/icons-material/FilterList";

export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(async () => {
    const serverListings = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Chair",
            id: 0,
            price: "$18.99",
            img: {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFo0egDlRfHUgOGqH3BA-lbmmwvfh3uyjxog&usqp=CAU",
              altText: "A chair",
            },
          },
          {
            name: "Table",
            id: 1,
            price: "$50.50",
            img: {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnySpL-74DPqPBrLKETA1MPe3rV3jqoC-Jw&usqp=CAU",
              altText: "A Table",
            },
          },
        ]);
      }, 300);
    });

    setListings(serverListings);
  }, []);

  return (
    <Container element="section">
      <Toolbar sx={{ alignItems: "space-between" }}>
        <Container element="div">
          <Typography fullWidth>+200 Results for Basketball Shoes</Typography>
        </Container>

        <Button variant="contained">Sort-by:</Button>
        <Button variant="contained" startIcon={<FilterList />}>
          Filter
        </Button>
      </Toolbar>
      <Divider />
      <Grid container spacing={2} columns={12} sx={{ my: 3 }}>
        {listings.map((listing) => (
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={listing.img.url}
                  alt={listing.img.altText}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {listing.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {listing.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
