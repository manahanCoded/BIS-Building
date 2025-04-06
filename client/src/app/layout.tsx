
import Navbar from "@/components/Navbar";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with dynamic theming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <ThemeSwitcher /> 
        {children}
      </body>
    </html>
  );
}

