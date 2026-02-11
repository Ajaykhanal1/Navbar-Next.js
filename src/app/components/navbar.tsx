"use client"; // needed for client-side interactivity (like toggle menu)

import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
// Using react-icons for the search icon
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 text-white">
      <div className="container mx-auto flex items-center justify-between pr-2">
        <div className="text-xl font-bold">
          <Link href="/"><img src="/image/logo.png" alt="Delivery Bazar Logo" width={100} /></Link>
        </div>


        <div className="bg-white p-1" >
          <form action="">
            <input type="text" placeholder="Search in Bazar" className=" text-black w-80 rounded-lg focus:outline-none focus:ring-0 transition duration-200 p-2" />
            <button className="ml-2" onClick={() => alert("Products Searching")}>
              <FiSearch className="text-orange-800 w-5 h-5 cursor-pointer" />
            </button>
          </form>
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
