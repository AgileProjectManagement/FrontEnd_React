import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const APIKey = "A07D29A5-5E83-4BA3-939B-FAD81AFDEEEB";
export default function CryptoPrice({ type = "BTC", price = 0 }) {
  // give an initial state so that the data won't be undefined at start
  const [cprice, setPrice] = useState(0);

  const apiCall = {
    type: "hello",
    apikey: APIKey,
    heartbeat: false,
    subscribe_data_type: ["exrate"],
    subscribe_filter_asset_id: [type],
  };
  useEffect(() => {
    const ws = new WebSocket("ws://ws-sandbox.coinapi.io/v1/");
    ws.onopen = () => {
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = function (event) {
      const json = JSON.parse(event.data);
      console.log(price);
      try {
        setPrice((1 / json.rate) * price);
      } catch (err) {
        console.log(err);
      }
    };
    return () => ws.close();
  }, []);

  return <span>{cprice}</span>;
}

CryptoPrice.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
