import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["The simpsons"]);
  return (
    <div>
      <div className="search-container">
        <h2>GIF SEARCHER APP</h2>
        <AddCategory setCategories={setCategories} />
        <p className="Paragraph">Find the gif what you are looking for!</p>
        <div className="recent-searchs-container">
          Recent searchs:
          <p className="recent-searchs">
            {categories.map((category, index) => (
              <span className="result-key" key={category+index}>
                [ {category} ]
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="grid-container">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
