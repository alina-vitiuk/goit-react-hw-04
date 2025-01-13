import { Field, Form, Formik } from "formik";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    if (values.search.trim() === "") {
      toast.error("Please fill in the search field");
    }
    actions.resetForm();
  };

  return (
    <>
      <header className={css.searchHeader}>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              className={css.inputSearch}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={css.btnSearch} type="submit">
              <FiSearch size="22" />
            </button>
          </Form>
        </Formik>
      </header>
    </>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
