import { useState } from "react";

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
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 300);
  
    const handleClick = () => {
      const sortedProducts = products.sort((a, b) => a.price - b.price);
      setFilteredProducts(sortedProducts);
    };
  
    return (
      <div className="searchBar">
        <input
          className="outline-none"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>sort</button>
      </div>
    );
  }
  