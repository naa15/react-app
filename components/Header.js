'use client';

import Link from 'next/link';
import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <Image src="/logo.svg" width="200" height="200" className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
