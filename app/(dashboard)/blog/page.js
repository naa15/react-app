'use client';

import { useEffect, useState } from "react";
import BlogCard from "../../../components/BlogCard";
import styles from "../../../style/App.css"

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts?limit=10");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setBlogs(data["posts"]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-fetching">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center mx-auto max-w-screen-lg my-12">
      {blogs.map((blogcard) => (
        <BlogCard
          id={blogcard.id}
          title={blogcard.title}
          body={blogcard.body}
          tags={blogcard.tags}
          views={blogcard.views}
        />
      ))}
    </div>
  );
}

export default Blog;
