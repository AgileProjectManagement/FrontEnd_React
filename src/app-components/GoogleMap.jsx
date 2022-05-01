import React, { useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

export const MapPlaceholder = styled("div")`
  display: block;
  min-width: 300px;
  min-height: 300px;
  background-color: blue;
  text-align: center;
  color: white;
  border-radius: 0.5rem;
`;

function MapElement({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    // eslint-disable-next-line no-new
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  }, []);

  return <MapPlaceholder ref={ref} id="map" />;
}

export default function GoogleMap({ center, zoom }) {
  return (
    <Wrapper apiKey="AIzaSyCLA9YKhLkIhpHCdEq5JOcucx2NX89pGGg" render={render}>
      <MapElement center={center} zoom={zoom} />
    </Wrapper>
  );
}

GoogleMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
};

MapElement.propTypes = {
  ...GoogleMap.propTypes,
};

GoogleMap.defaultProps = {
  center: { lat: 36.9692, lng: -118.4189 },
  zoom: 6,
};
