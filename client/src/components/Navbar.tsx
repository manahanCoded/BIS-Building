"use client";
import { Ellipsis } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
            className={`w-full fixed top-12 indent-0 z-50 px-3.5 md:px-20 flex items-center gap-2  text-primary dark:drop-shadow-[0_0_0.3rem_#ffffff70] 
            ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
            transition-all duration-700 ease-out`}
        >
            <div className='w-full flex flex-row items-center justify-between dark:invert '>
                <Link href={"/"}>
                    <Image
                        src="/Branding_Img/BIS_Logo.png"
                        alt="Brand"
                        width={96}
                        height={96}
                        className="select-none "
                        draggable={false}
                    />
                </Link>
                <div className='md:flex hidden text-sm  flex-row justify-between items-center space-x-20 uppercase text-white invert '>
                    <Link
                        className='drop-shadow-[0_0_0.3rem_#ffffff70]'
                        href={"/apartment"}>Apartments</Link>
                    <Link
                        className='drop-shadow-[0_0_0.3rem_#ffffff70]'
                        href={"/apartment"}>Pricing</Link>
                    <Link
                        className='drop-shadow-[0_0_0.3rem_#ffffff70]'
                        href={"/apartment"}>Location</Link>
                </div>
                <div className='invert text-white'>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Ellipsis className='cursor-pointer  w-7 h-7 ' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent side="bottom" align="end" sideOffset={8} className="w-64">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <User />
                                    <span>Profile</span>
                                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <CreditCard />
                                    <span>Billing</span>
                                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings />
                                    <span>Settings</span>
                                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Keyboard />
                                    <Link href={"/apartment"}>Pricing</Link>
                                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    <Users />
                                    <span>Team</span>
                                </DropdownMenuItem>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        <UserPlus />
                                        <span>Invite users</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem>
                                                <Mail />
                                                <span>Email</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <MessageSquare />
                                                <span>Message</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <PlusCircle />
                                                <span>More...</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem>
                                    <Plus />
                                    <span>New Team</span>
                                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Github />
                                <span>GitHub</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <LifeBuoy />
                                <span>Support</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem disabled>
                                <Cloud />
                                <span>API</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LogOut />
                                <span>Log out</span>
                                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    );
}
