"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Search } from "./Search";
import { Products } from "./Products";

export function Content() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data['products']);
        setFilteredProducts(data['products']);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-fetching">Error: {error}</div>;
  }

  return (
    <main className="main dark:bg-slate-600">  
      <Search
        products={products}
        setProducts={setProducts}
        setFilteredProducts={setFilteredProducts}
        isProduct={true}
      />
      <Products products={filteredProducts} />
    </main>
  );
}
