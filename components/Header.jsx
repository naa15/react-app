'use client';

import Link from 'next/link';
import Image from "next/image";
import { logOut } from '@/app/actions';
import ThemeToggle from './ThemeToggle';

function Header() {
  const handleLogout = () => {
    logOut();
  }

  return (
    <div className="flex items-center mx-auto my-0 text-center justify-between gap-14 max-w-6xl">
      <Link href="/">
        <Image src="/raspberry-logo.svg" width={100} height={100} alt="logo" className="text-cyan-200"/>
      </Link>
      
      <nav>
        <ul className="list-none flex justify-between gap-36 items-center">
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
          <li>
            <button type='submit' onClick={handleLogout}>Logout</button>
          </li>
          <li>
            <ThemeToggle/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
