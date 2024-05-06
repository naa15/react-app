// import searchIcon from "./search-icon.svg";
import macbook from "./macbook.png";
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

  const debouncedSetFilteredProducts = debounce(setFilteredProducts, 300);

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
      {/* <img src={searchIcon} alt='search icon' /> */}
      <button onClick={handleClick}>sort</button>
    </div>
  );
}

export function Product(props) {
  return (
    <div className="grid-item">
      <img alt="product" src={macbook} />
      <h4>{props?.name}</h4>
      <p>{props?.description}</p>
      <p>{props?.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export function Products({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <Product price={item.price} name={item.name} description={item.description}/>
      ))}
    </div>
  );
}

export function Content() {
  const [products, setProducts] = useState([
    { name: "Product A", description: "Description", price: 20 },
    { name: "Product B", description: "Description", price: 10 },
    { name: "Product C", description: "Description", price: 30 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  const handleSearch = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  return (
    <main className="main">
      <Search products={products} setProducts={setProducts} setFilteredProducts={handleSearch}/>
      <Products products={filteredProducts} />
    </main>
  );
}
