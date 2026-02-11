"use client"; // needed for client-side interactivity (like toggle menu)

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between pr-2">
        <div className="text-xl font-bold">
            <Link href="/"><img src="/image/logo.png" alt="Delivery Bazar Logo" width={100} /></Link>
        </div>
        <div>
          <input type="text" placeholder="Search in Bazar" className="bg-white text-black border border-gray-300 w-80 rounded-lg focus:outline-none focus:ring-1 transition duration-200 p-2" />
          <input type="submit" value="Search" className="border rounded-lg bg-gray-800 text-white active:scale-95 shadow-md p-1.5 ml-3" />
        </div>
        <ul className="flex space-x-6">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/services">SERVICES</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
            <li><Link href="/login">LOGIN</Link></li>
            <li><Link href="/signUp">SIGN UP</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
