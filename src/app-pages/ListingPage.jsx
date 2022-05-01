import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Toolbar, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import callAPI from "../api/api";

export default function ListingPage() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(async () => {
    // fetch detailed item data by id
    let listingData = await new Promise((resolve) => {
      setTimeout(() => {
        if (params.itemId === "0") {
          resolve({
            name: "Chair",
            id: 0,
            price: "$18.99",
            img: {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFo0egDlRfHUgOGqH3BA-lbmmwvfh3uyjxog&usqp=CAU",
              altText: "A chair",
            },
          });
        } else {
          resolve({
            name: "Table",
            id: 1,
            price: "$50.50",
            img: {
              url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKnySpL-74DPqPBrLKETA1MPe3rV3jqoC-Jw&usqp=CAU",
              altText: "A Table",
            },
          });
        }
      }, 300);
    });
    listingData = await callAPI("products", "GET");
    setData(listingData[params.itemId]);
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <Typography>Listing for item with id {params.itemId}</Typography>
      {data && data.img && <img src={data.img.url} alt={data.img.url} />}
    </>
  );
}
