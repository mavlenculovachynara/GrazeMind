import React from 'react';
import './Product.css'

const ProductList = () => {
  return (
    <div className="product-container">
      <h1>Попробуйте 1 месяц бесплатно</h1>
      <p>Узнайте все преимущества нашего продукта. Никаких скрытых платежей!</p>
      <button className="purchase-button">Приобрести сейчас</button>
    </div>
  );
}

export default ProductList;
