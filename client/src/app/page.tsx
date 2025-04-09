"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <main className="">
      <MaxWidthWrapper className=" h-screen  pt-28 pb-2  ">
        <section className="w-full h-full flex flex-row bg-primary rounded-4xl overflow-hidden text-pretty ">
          <div className="w-[50%] flex flex-col justify-between ">
            <div className=" h-[35%] ">
              <h1>asd</h1>
            </div>
            <div className="h-[65%] pt-5 pr-5 bg-white rounded-t-4xl">
            <div className="h-full bg-primary rounded-t-4xl">
              <h1>asd</h1>
            </div>
            </div>
          </div>

          <div className="w-full flex flex-col ">
            <h1>asd</h1>
          </div>
        </section>
      </MaxWidthWrapper>
      <div className="bg-white h-screen">

      </div>
      <MaxWidthWrapper className="bg-black h-screen">
        <h1>asd</h1>
      </MaxWidthWrapper>
    </main>
  );
}