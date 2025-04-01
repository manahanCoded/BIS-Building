"use client";

import { useTheme } from "@/lib/useTheme";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select";


export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

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
    <div className="flex items-center gap-2 dark:invert">
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger className="rounded-full p-2">
          <SelectValue placeholder="Select Theme" />
        </SelectTrigger>
        <SelectContent>
          {availableThemeColors.map((themeColor) => (
            <div key={themeColor.name}>
              <SelectItem
                value={`${themeColor.name.toLowerCase()}-light`}
               
              >
                <div className="flex items-center space-x-3">
                  <div className={`h-[20px]  w-[20px] rounded-full ${themeColor.light}`} ></div>
                  <div className="text-sm">{`${themeColor.name} Light`}</div>
                </div>
              </SelectItem>
              <SelectItem
                value={`${themeColor.name.toLowerCase()}-dark`}
      
              >
                <div className="flex items-center space-x-3">
                  <div className={`h-[20px] w-[20px] rounded-full ${themeColor.dark}`}></div>
                  <div className="text-sm">{`${themeColor.name} Dark`}</div>
                </div>
              </SelectItem>
            </div>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
