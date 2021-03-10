import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

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
