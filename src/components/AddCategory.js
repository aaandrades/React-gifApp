import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2 && inputValue !== "Enter your gif") {
      setCategories((values) => [inputValue, ...values]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your gif"
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
