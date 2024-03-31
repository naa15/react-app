import searchIcon from "./search-icon.svg";
import macbook from "./macbook.png";
import { useState } from "react";

const products = [
  { name: "Product A", description: "Description", price: 20 },
  { name: "Product B", description: "Description", price: 10 },
  { name: "Product C", description: "Description", price: 30 },
];

export function Search() {
  const [products, setProducts] = useState([
    { name: "Product A", description: "Description", price: 20 },
    { name: "Product B", description: "Description", price: 10 },
    { name: "Product C", description: "Description", price: 30 },
  ]);

  const handleClick = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    console.log(sortedProducts);
    setProducts(sortedProducts);
  };

  return (
    <div className="searchBar">
      <input type="text" placeholder="Search" />
      {/* <img src={searchIcon} alt='search icon' /> */}
      <button onClick={handleClick}>sort</button>
    </div>
  );
}

export function Product(props) {
  return (
    <div className="grid-item">
      <img alt="product" src={macbook} />
      <h4>title</h4>
      <p>description</p>
      <p>{props?.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export function Products() {
  return (
    <div className="grid">
      {products.map((item) => (
        <Product price={item.price} />
      ))}
    </div>
  );
}

export function Content() {
  return (
    <main className="main">
      <Search />
      <Products />
    </main>
  );
}
