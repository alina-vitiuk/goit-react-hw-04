import css from "./ImageCard.module.css";
import PropTypes from "prop-types";
import ImageModal from "../ImageModal/ImageModal";
import { useState } from "react";

function ImageCards({
  imageItem: {
    alt_description,
    urls: { small, regular },
  },
}) {
  const [modalOpen, setModelOpen] = useState(false);
  const openModalWin = () => {
    setModelOpen(true);
  };
  const closeModal = () => {
    setModelOpen(false);
  };
  return (
    <div className={css.galleryThumb}>
      <img
        onClick={openModalWin}
        className={css.galleryImage}
        src={small}
        alt={alt_description}
        width="360"
      />
      <ImageModal
        isOpen={modalOpen}
        image={regular}
        onCloseModal={closeModal}
      />
    </div>
  );
}

ImageCards.propTypes = {
  imageItem: PropTypes.shape({
    alt_description: PropTypes.string,
    urls: PropTypes.shape({
      small: PropTypes.string,
      regular: PropTypes.string,
    }),
  }),
};
export default ImageCards;
