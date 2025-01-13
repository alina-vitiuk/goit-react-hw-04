import { getImagesUnplash } from "./images-api";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import LoaderMore from "./components/Loader/LoaderMore";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleSearch = async (searchQuery) => {
    try {
      setLoading(true);
      setIsSearching(true);
      setImages([]);
      setPage(1);
      setSearch(searchQuery);
      const dataImg = await getImagesUnplash(searchQuery, 1);
      setTotalPages(dataImg.total_pages);
      setImages(dataImg.results);

      if (searchQuery.trim() === "") {
        toast.error("The search field cannot be empty!");
        return;
      } else if (!dataImg.total) {
        toast(
          "Sorry, we have not found the photos for your request. Try to write it differently.",
          {
            duration: 5000,
          }
        );
      } else {
        toast.success(`Wow! We found ${dataImg.total} pictures`);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
      setIsSearching(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const dataImages = await getImagesUnplash(search, nextPage);
      setImages((prevImages) => {
        return [...prevImages, ...dataImages.results];
      });
      setPage(nextPage);
    } catch {
      setError(true);
    } finally {
      setLoadingMore(false);
    }
  };

  const isVisible = () => {
    return totalPages !== 0 && totalPages !== page && !loadingMore;
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: css.toastTextCenter,
        }}
      />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery imageList={images} />
      {!loadingMore && !isSearching && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} isVisible={isVisible} />
      )}
      {loadingMore && <LoaderMore />}{" "}
    </>
  );
}

export default App;
