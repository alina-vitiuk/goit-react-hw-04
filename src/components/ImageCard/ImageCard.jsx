import css from "./ImageCard.module.css";
import PropTypes from "prop-types";

const ImageCard = ({
  imageItem: {
    alt_description,
    urls: { small },
  },
}) => {
  return (
    <div className={css.galleryThumb}>
      <img
        className={css.galleryImage}
        src={small}
        alt={alt_description}
        width="360"
      />
    </div>
  );
};

ImageCard.propTypes = {
  imageItem: PropTypes.shape({
    alt_description: PropTypes.string,
    likes: PropTypes.number,
    urls: PropTypes.shape({
      small: PropTypes.string,
    }),
    user: PropTypes.shape({
      name: PropTypes.string,
      social: PropTypes.shape({
        portfolio_url: PropTypes.string,
      }),
    }),
  }),
};

export default ImageCard;
