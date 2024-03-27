import BlogCard from "./BlogCard";
import data from "./data";
 
function Blog() {
  return (
    <div className="gallery">
      {data.map((blogcard) => (
        <BlogCard
          name={blogcard.title}
          description={blogcard.description}
          image={blogcard.image}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRLSbzesr2YiFqdpK2xp_kH32cgCrriURRa_lHFev3w&s"
        />
      ))}
    </div>
  );
}
 
export default Blog;