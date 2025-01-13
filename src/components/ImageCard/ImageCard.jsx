import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

function ImageCard({
  imageItem: {
    alt_description,
    urls: { small, regular },
  },
  onImageClick,
}) {
  return (
    <div className={css.galleryThumb}>
      <img
        onClick={() => onImageClick(regular)}
        className={css.galleryImage}
        src={small}
        alt={alt_description}
        width="360"
      />
    </div>
  );
}

ImageCard.propTypes = {
  onImageClick: PropTypes.func,
  imageItem: PropTypes.shape({
    alt_description: PropTypes.string,
    urls: PropTypes.shape({
      small: PropTypes.string,
      regular: PropTypes.string,
    }),
  }),
};
export default ImageCard;
