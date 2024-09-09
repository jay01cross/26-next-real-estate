"use client";

import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(false);

  // change bg color on scroll logic
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setnavBg(true);

      if (window.scrollY < 90) setnavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`fixed ${
        navBg ? "bg-gray-800" : ""
      } h-[10vh] z-[100] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
            <FaHouse />
          </div>
          <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
            HomeHub
          </h1>
        </div>

        {/* nav links */}
        <div className="hidden lg:flex items-center space-x-14 text-white">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className="font-medium hover:text-yellow-300">
                {navLink.label}
              </p>
            </Link>
          ))}
        </div>

        {/* login and burgermenu */}
        <div className="flex items-center space-x-4">
          {/* login btn */}
          <div className="flex items-center cursor-pointer text-white space-x-2 hover:text-rose-400 transition-all duration-200">
            <FaUserCircle className="w-5 h-5" />
            <p className="font-bold text-xs sm:text-base">
              <span>Login</span> / <span>Register</span>
            </p>
          </div>

          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="size-6 sm:size-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
