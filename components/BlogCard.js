'use client';

import Image from "next/image";

export default function BlogCard({ name, description, imageUrl }) {
    return (
      <div className="blogCard">
        {/* <Image src={imageUrl} alt="Product" /> */}
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