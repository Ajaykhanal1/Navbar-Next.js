"use client"; // needed for client-side interactivity (like toggle menu)

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
            <Link href="/">LOGO</Link>
        </div>
        <ul className="flex space-x-6">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/services">SERVICES</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
