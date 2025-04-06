"use client";
import { Ellipsis } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            className={`w-full fixed top-12 indent-0 z-50 px-3.5 md:px-20 flex items-center gap-2 dark:invert dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
                        transition-all duration-700 ease-out`}
        >
            <div className='w-full flex flex-row items-center justify-between'>
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
                <div className='text-sm flex flex-row justify-between items-center space-x-20 uppercase dark:invert'>
                    <Link href={"/apartment"}>Apartments</Link>
                    <Link href={"/apartment"}>Pricing</Link>
                    <Link href={"/apartment"}>Location</Link>
                </div>
                    <Ellipsis className='cursor-pointer dark:invert w-7 h-7' />

            </div>
        </section>
    );
}
