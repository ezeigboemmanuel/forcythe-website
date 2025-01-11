"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between space-x-4 items-center bg-[#030516] px-4 md:px-12 lg:px-24 h-[105px] backdrop-blur-md">
      <Link href="/" className="md:hidden">
        <Image
          src="/assets/forcythelogo.svg"
          alt="logo"
          width={110}
          height={110}
        />
      </Link>
      <div className="md:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white bg-opacity-10 rounded-md p-3 cursor-pointer"
        >
          <Image src="/assets/menu.svg" alt="menu" width={20} height={20} />
        </button>

        {isOpen && (
          <ul className="flex flex-col space-y-6 fixed top-28 right-5 py-11 px-5 bg-gradient-to-b from-[#0c2645] via-[#000000] to-[#000000] w-60 rounded-[33px]">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/services#portfolio">
              <li>Portfolio</li>
            </Link>
            <Link href="/studio">
              <li>Studio</li>
            </Link>
            <Link href="/foundation">
              <li>Foundation</li>
            </Link>
            <Link href="/careers">
              <li>Careers</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        )}
      </div>

      <div className="hidden md:flex space-x-16 items-center">
        <Link href="/">
          <Image
            src="/assets/forcythelogo.svg"
            alt="logo"
            width={150}
            height={150}
          />
        </Link>
        <ul className="flex space-x-4">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/services#portfolio">
            <li>Portfolio</li>
          </Link>
          <Link href="/studio">
            <li>Studio</li>
          </Link>
          <Link href="/foundation">
            <li>Foundation</li>
          </Link>
        </ul>
      </div>

      <div className="hidden md:inline-block group">
        <div className="w-[134px] h-12 border border-dashed border-white rounded-full  group-hover:border-[#0066cc]"></div>
        <button className="absolute right-[42px] top-6 lg:right-[90px] font-semibold text-black bg-white w-[134px] h-12 rounded-full group-hover:bg-[#154b81] group-hover:text-white transition ease-in-out delay-150">
          Book a Call
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
