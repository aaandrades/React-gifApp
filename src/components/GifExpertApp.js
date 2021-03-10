import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Death Note"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Death Note"]);
  // };

  return (
    <div>
      <h2> Gif Expert App </h2>
      <AddCategory setCategories={setCategories} />
      <p className="Paragraph">Search the gif that you want and press enter!</p>
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid 
              key={category} 
              category = {category} />
        ))}
      </ol>
    </div>
  );
};
