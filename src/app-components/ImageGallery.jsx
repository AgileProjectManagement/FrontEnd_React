import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const MainImage = styled("img")`
  border-radius: 0.5rem;
  max-width: 100%;
  min-heigth: 20vh;
  max-height: 30vh;
  object-fit: cover;
`;
const ExtraImage = styled(MainImage)`
  min-width: 32%;
  min-height: 10vh;
  max-height: 10vh; ;
`;

const Gallery = styled("div")`
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  gap: 0.5rem;
  margin-block: 1rem;
`;
const SubGallery = styled(Gallery)`
  flex-direction: row;
  margin: 0;
`;

export default function ImageGallery({ images }) {
  return (
    <Gallery>
      <MainImage src={images[0]} />
      <SubGallery>
        {images.slice(1).map((src) => (
          <ExtraImage src={src} />
        ))}
      </SubGallery>
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
