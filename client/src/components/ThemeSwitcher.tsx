"use client";

import { useTheme } from "@/lib/useTheme";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";


export default function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();
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

  const availableThemeColors = [
    { name: "Zinc", light: "bg-zinc-500", dark: "bg-zinc-900" },
    { name: "Rose", light: "bg-rose-500", dark: "bg-rose-900" },
    { name: "Blue", light: "bg-blue-500", dark: "bg-blue-900" },
    { name: "Green", light: "bg-green-500", dark: "bg-green-900" },
    { name: "Orange", light: "bg-orange-500", dark: "bg-orange-900" },
    { name: "Yellow", light: "bg-yellow-500", dark: "bg-yellow-900" },
    { name: "Violet", light: "bg-violet-500", dark: "bg-violet-900" },
  ];



  return (
    <section className={`fixed bottom-6 md:left-20 left-3.5 z-50 text-primary drop-shadow-[0_0_0.3rem_#ffffff70]  ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
            transition-all duration-700 ease-out`}>
      <div className="flex items-center gap-2 ">
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="rounded-full border-none p-2 !bg-white !text-black">
            <SelectValue className="" placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent >
            {availableThemeColors.map((themeColor) => (
              <div key={themeColor.name}>
                <SelectItem
                  value={`${themeColor.name.toLowerCase()}`}

                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-[20px]  w-[20px] rounded-full ${mode === "light" ? themeColor.light : themeColor.dark}`} ></div>
                    <div className="text-sm">{`${themeColor.name} `}</div>
                  </div>
                </SelectItem>
              </div>
            ))}
          </SelectContent>
        </Select>

        <Button
          
          size="icon"
          onClick={() => {
            const newMode = mode === "light" ? "dark" : "light";
            setMode(newMode);
            if (newMode === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
          className="rounded-full  !bg-white    !text-black   cursor-pointer"

        >
          {mode === "light" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>
      </div>
    </section>
  );
}

