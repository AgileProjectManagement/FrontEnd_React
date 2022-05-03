import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Divider,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@mui/material";

import FilterList from "@mui/icons-material/FilterList";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import DropDownButton from "../app-components/DropDownButton";

const Listing = styled(Card)`
  maxwidth: 365px;
`;

export default function Listings({ searchResults }) {
  const navigate = useNavigate();
  const listings = searchResults.listings || [];
  const sortOptions = ["Sort", "Price", "Alphabetical"];

  return (
    <Container element="section">
      <Toolbar sx={{ alignItems: "space-between" }}>
        <Container element="div">
          <Typography>
            {`+${listings.length} Results for ${searchResults.searchTerm}`}
          </Typography>
        </Container>

        <DropDownButton variant="contained" options={sortOptions}>
          Sort:
        </DropDownButton>
        <Button variant="contained" startIcon={<FilterList />}>
          Filter
        </Button>
      </Toolbar>

      <Divider />

      <Grid container spacing={2} columns={12} sx={{ my: 3 }}>
        {listings.map((listing) => (
          <Grid
            key={listing.id}
            item
            xs={4}
            onClick={() => navigate(`./${listing.id}`)}
          >
            <Listing>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={listing.image1}
                  alt={listing.name}
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
            </Listing>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Listing.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  condition: PropTypes.number,
  price: PropTypes.string,
  image1: PropTypes.string,
  image2: PropTypes.string,
  image3: PropTypes.string,
  image4: PropTypes.string,
  image5: PropTypes.string,
};

Listings.propTypes = {
  searchResults: PropTypes.shape({
    searchTerm: PropTypes.string,
    listings: PropTypes.arrayOf(PropTypes.shape(Listing.propTypes)),
  }).isRequired,
};
