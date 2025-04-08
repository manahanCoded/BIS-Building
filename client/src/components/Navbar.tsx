"use client";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY > lastScrollY && currentScrollY > 10) {
          setShowNavbar(false);
        } else if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    

  return (
    <section
      className={`w-full fixed top-0 pt-12 z-50 px-3.5 md:px-20 flex items-center gap-2 invert text-primary drop-shadow-[0_0_0.3rem_#ffffff70]
        transition-transform duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex flex-row items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/Branding_Img/BIS_Logo.png"
            alt="Brand"
            width={96}
            height={96}
            className="select-none"
            draggable={false}
          />
        </Link>
        <div className="text-sm flex flex-row justify-between items-center space-x-20 uppercase invert text-white">
          <Link className="drop-shadow-[0_0_0.3rem_#ffffff70]" href={"/apartment"}>
            Apartments
          </Link>
          <Link className="drop-shadow-[0_0_0.3rem_#ffffff70]" href={"/apartment"}>
            Pricing
          </Link>
          <Link className="drop-shadow-[0_0_0.3rem_#ffffff70]" href={"/apartment"}>
            Location
          </Link>
        </div>
        <Ellipsis className="cursor-pointer invert w-7 h-7 "  />
      </div>
    </section>
  );
}
