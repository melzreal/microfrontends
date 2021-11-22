import React, { useState, useEffect } from "react";
import { getProducts } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

    //the dependency array for useEffect is empty as we want this to only run once
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div className="flex" key={product.id}>
          <div className="flex-1">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}