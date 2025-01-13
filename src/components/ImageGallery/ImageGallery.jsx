import ImageCards from "../ImageCard/ImageCard";
// import openModalWin from "../ImageCard/ImageCard";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imageList, openModalWin }) => {
  const imageClick = (event) => {
    const imgItem = event.target.closest("li");
    if (imgItem) {
      const imgID = imgItem.dataset.id;
      const clickedImageItem = imageList.find((image) => image.id === imgID);
      if (clickedImageItem && typeof openModalWin === "function") {
        openModalWin(clickedImageItem);
      }
    }
  };
  return (
    <section className={css.containerGallery}>
      {imageList.length > 0 && (
        <ul className={css.gallery} onClick={imageClick}>
          {imageList.map((img) => (
            <li className={css.galleryItem} key={img.id} data-id={img.id}>
              <ImageCards imageItem={img} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModalWin: PropTypes.func.isRequired,
};

export default ImageGallery;
