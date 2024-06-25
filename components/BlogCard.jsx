"use client";

import Link from "next/link";

import Image from "next/image";

export default function BlogCard({ title, id, body, tags, views }) {
  return (
    <div className="transition-colors duration-300 hover:bg-gray-200 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
      <div className="py-6 px-5 lg:flex">
        <div className="lg:flex-1 mr-8">
          <a href="post.html">
            <Image
              src="/blogger.jpg"
              alt="Blogger"
              width={600}
              height={400}
            />
          </a>
        </div>

        <div className="lg:flex-1 flex flex-col justify-between">
          <header>
            <div>
              <a
                href="#"
                className="border border-blue-300 font-semibold hover:border-blue-500 hover:text-blue-500 px-2 py-1.5 rounded-full text-blue-300 text-xs uppercase"
              >
                {tags[0].toUpperCase()}
              </a>
              <a
                href="#"
                className="border border-red-300 font-semibold hover:border-red-500 hover:text-red-500 ml-2 px-2 py-1.5 rounded-full text-red-300 text-xs uppercase"
              >
                {tags[1].toUpperCase()}
              </a>
            </div>

            <div className="mt-4">
              <h1 className="text-3xl">{title}</h1>
              <span className="mt-2 block text-gray-400 text-xs">
                Published
                <time> 1 day ago.</time>
              </span>
            </div>
          </header>

          <div className="mt-2 text-sm ">
            <p>{body.slice(0, 200)}...</p>
          </div>

          <footer className="flex justify-between items-center mt-8">
            <div className="flex text-sm items-center">
              <div className="ml-3">
                <h5 className="font-bold">{views} views</h5>
              </div>
            </div>

            <div>
              <Link
                className="hover:bg-gray-400 bg-gray-300 border font-semibold px-5 py-2 rounded-full text-xs"
                href={`/blog/${id}`}
              >
                Read More
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
