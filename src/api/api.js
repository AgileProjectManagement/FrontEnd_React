import axios from "axios";

const address = "https://crypto-offer-up.herokuapp.com"; // process.env.REACT_APP_API_URL;

const callAPI = async (query, method = "POST") => {
  const options = {
    url: `${address}/${query}`,
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Oriin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  const response = await axios(options);
  // console.log(response);
  return response.data;
};

export default callAPI;
