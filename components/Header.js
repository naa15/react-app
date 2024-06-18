'use client';

import Link from 'next/link';
import Image from "next/image";
import { logOut } from '@/app/actions';

function Header() {
  const handleLogout = () => {
    logOut();
  }

  return (
    <div className="header">
      <Image src="/logo.svg" width={100} height={100} alt="logo" />
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
          <li>
            <button type='submit' onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
