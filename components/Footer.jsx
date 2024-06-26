'use client';

import Image from "next/image";
import Link from 'next/link';


function Footer () {
    return (
        <div className="footer">
            <section className="contents">
              <div className="wrapper">
                <div className="resource">
                  <h4>Resource</h4>
                  <nav>
                    <ul>
                      <li>
                        <Link href="./pages/about.html">About Us</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                      <li>
                        <Link href="#">FAQ</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="legal">
                  <h4>Legal Stuff</h4>
                  <nav>
                    <ul>
                      <li>
                        <Link href="#">Terms of service</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
        </div>
    );
}

export default Footer;