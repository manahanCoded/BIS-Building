"use client"

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
      const [isVisible, setIsVisible] = useState(false);
      useEffect(() => {
          setIsVisible(true);
      }, []);
  
  return (
    <main className="">
      <div className="relative  h-screen ">
        <Image
          src="/Home_Img/Home1.jpg"
          alt="Job Image"
          fill
          className="object-cover select-none z-0"
          priority
          draggable={false}
        />
        <h1 className={` items-center justify-center select-none flex h-full w-full poppins-semibold  absolute m-auto transform text-white  text-9xl z-20
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
          transition-all duration-700 ease-out`}

          >
          City Living, Perfected
        </h1>
        <div className="absolute inset-0 bg-black/5 dark:bg-black/30 z-10" />
      </div>
      <div className="bg-white h-screen">

      </div>
      <div className="bg-black h-screen">

      </div>
    </main>
  );
}