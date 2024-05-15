'use client';

import { useState } from 'react';
import Image from 'next/image';

export function Search({ products, setProducts, setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    debouncedSetFilteredProducts(value);
  };

  const debouncedSetFilteredProducts = debounce((value) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, 300);

  const handleClick = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>sort</button>
    </div>
  );
}

export function Product({ name, description, price }) {
  return (
    <div className="grid-item">
      {/* <img alt="product" src={macbook} /> */}
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export function Products({ products }) {
  return (
    <div className="grid">
      {products.map((item, index) => (
        <Product key={index} price={item.price} name={item.name} description={item.description}/>
      ))}
    </div>
  );
}

export function Content() {
  console.log("Im here");
  const [products, setProducts] = useState([
    { name: "Product A", description: "Description", price: 20 },
    { name: "Product B", description: "Description", price: 10 },
    { name: "Product C", description: "Description", price: 30 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  return (
    <main className="main">
      <Search products={products} setProducts={setProducts} setFilteredProducts={setFilteredProducts}/>
      <Products products={filteredProducts} />
    </main>
  );
}
