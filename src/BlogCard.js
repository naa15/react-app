export default function BlogCard({ name, description, imageUrl }) {
    return (
      <div className="blogCard">
        <img src={imageUrl} alt="Product" />
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <button>
            Read More
          </button>
        </div>
      </div>
    );
  }