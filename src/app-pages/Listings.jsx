import React, { useState, useEffect } from "react";

export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(async () => {
    const serverListings = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { name: "Chair", id: 0 },
          { name: "Table", id: 1 },
        ]);
      }, 300);
    });

    setListings(serverListings);
  }, []);

  return (
    <section>
      <h1>This is where the items that are for sale will be! </h1>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>{listing.name}</li>
        ))}
      </ul>
    </section>
  );
}
