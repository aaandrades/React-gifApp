import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title}></img>
      <div className="card-text">
        <span>{title}</span>
      </div>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};