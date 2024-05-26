"use client";

import Link from "next/link";

// import Image from "next/image";

export default function BlogCard({ title, id}) {
  return (
    <div className="blogCard">
      {/* <Image src={thumbnail} width={200} height={200} alt={title}/> */}
      <h3>{title}...</h3>
      <div>
        <Link href={`/blog/${id}`}> Read More</Link>
      </div>
    </div>
  );
}
