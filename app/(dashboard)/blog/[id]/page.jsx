"use client";

import { useState, useEffect } from "react";
import styles from "../../../../style/App.css";
import Image from "next/image";

export default function BlogDetails({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts/${params.id}`
        );
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="my-32">
      <article className="max-w-4xl mx-auto mt-20 space-y-6 pt-10">
        <div className="lg:grid lg:grid-cols-12 gap-x-10">
          <div className="col-span-4 text-center">
            <Image src="/blogger.jpg" alt="Blogger" width={600} height={400} />

            <p
              className="mt-4 
                     text-gray-400 text-xs"
            >
              Published
              <time> 1 day ago.</time>
            </p>
            <div className="flex text-sm items-center justify-center mt-4">
              <div className="ml-3 text-left">
                <h5 className="font-bold">{blog.views} views</h5>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="flex justify-between mb-6 -mt-10">
              <a
                href="/blog"
                className="transition-colors duration-100 text-lg relative inline-flex items-center hover:text-blue-500"
              >
                <svg
                  className="mr-2"
                  width="19"
                  height="19"
                  viewBox="0 0 22 22"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      stroke="#000"
                      stroke-opacity=".012"
                      stroke-width=".5"
                      d="M21 1v20.16H.84V1z"
                    ></path>
                    <path
                      className="fill-current"
                      d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                    ></path>
                  </g>
                </svg>
                Back to Posts
              </a>

              <div>
                <a
                  href="#"
                  className="border border-blue-300 font-semibold hover:border-blue-500 hover:text-blue-500 px-2 py-1.5 rounded-full text-blue-300 text-xs uppercase"
                >
                  {blog.tags[0]}
                </a>
                <a
                  href="#"
                  className="border border-red-300 font-semibold hover:border-red-500 hover:text-red-500 ml-2 px-2 py-1.5 rounded-full text-red-300 text-xs uppercase"
                >
                  {blog.tags[1]}
                </a>
              </div>
            </div>

            <h1 className="font-bold text-4xl mb-10">
              {blog.title}
            </h1>
            <div className="space-y-6 text-lg">
              <p>
               {blog.body}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
