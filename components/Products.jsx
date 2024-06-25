import Link from "next/link";

export function Product({ title, id, price, thumbnail }) {
  return (
    <div className="grid-item">
      <div>
        <Link href={`/products/${id}`}>
          <img alt="product" src={thumbnail} />
          <h4>{title}</h4>
          <p>{price}</p>
        </Link>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export function Products({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          price={item.price}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
}
