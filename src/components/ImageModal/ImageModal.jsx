import Modal from "react-modal";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import css from "./ImageModal.module.css";
import { useEffect } from "react";
import PropTypes from "prop-types";

const ImageModal = ({ isOpen, onCloseModal, image }) => {
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isOpen]);

  return (
    <Modal
      overlayClassName={css.backdrop}
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      <img
        className={css.galleryImage}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  onCloseModal: PropTypes.bool,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
    alt_description: PropTypes.string,
  }),
};

export default ImageModal;
