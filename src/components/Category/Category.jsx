import React, { useState } from "react";
import "./Category.css";
const Category = () => {
  return (
    <div className="categories">
      <button className="category-button">Здоровье</button>
      <button className="category-button">Спорт</button>
      <button className="category-button">Образование</button>
      <button className="category-button">Музыка</button>
      <button className="category-button">Еда</button>
    </div>
  );
};

export default Category;
