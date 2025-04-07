"use client";

import { useTheme } from "@/lib/useTheme";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";


export default function ThemeSwitcher() {
  const { theme, setTheme, mode, setMode } = useTheme();

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
    <section className="fixed bottom-6 z-50">
    <div className="flex items-center gap-2 ">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="rounded-full p-2">
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent>
          {availableThemeColors.map((themeColor) => (
            <div key={themeColor.name}>
              <SelectItem
                value={`${themeColor.name.toLowerCase()}`}

              >
                <div className="flex items-center space-x-3">
                  <div className={`h-[20px]  w-[20px] rounded-full ${mode === "light" ? themeColor.light : themeColor.dark}`} ></div>
                  <div className="text-sm">{`${themeColor.name} ${mode}`}</div>
                </div>
              </SelectItem>
            </div>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="ghost"
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
        className="rounded-full"
      >
        {mode === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
    </div>
    </section>
  );
}

