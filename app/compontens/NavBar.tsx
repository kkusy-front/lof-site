'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full clearNav z-50 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between md:p-1">
          <a
            href="/"
            className="flex text-3xl text-white font-medium"
          >
            <Image src={'/images/logo.webp'} width={200} height={100} alt="LoF - Light of Freedom" />
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center mt-4" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="md:ml-auto md:mr-auto pt-5 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <li className="mb-5 md:mb-0">
              <Link href="#koncerty" className="mr-11 mt-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">Koncerty</Link>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="#sklad" className="mr-11 mt-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">Skład zespołu</Link>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="#posluchaj" className="mr-11 mt-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">Posłuchaj</Link>
            </li>
            <li className="mb-5 md:mb-0">
              <Link href="#kontakt" className="mr-11 mt-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}