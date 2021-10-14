import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

  const { data: images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="cardGrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.prototype = { 
  category: PropTypes.string.isRequired,
}
