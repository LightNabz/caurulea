"use client";
import { HomeIcon, UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="flex justify-end items-center bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef] border border-black rounded-full drop-shadow-xl/25 px-6 py-2 gap-6 mt-6 w-full max-w-4xl">
        <li>
          <a href="/" className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-blue-600">
            <HomeIcon className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="/contact" className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-blue-600">
            <EnvelopeIcon className="w-5 h-5" />
          </a>
        </li>
        <li>
          <a href="/about" className="flex items-center justify-center w-6 h-6 text-gray-600 hover:text-blue-600">
            <UserIcon className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
}