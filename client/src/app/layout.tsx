

import "./globals.css"; // Ensure global styles are imported
import ThemeSwitcher from "@/components/ThemeSwitcher";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js app with dynamic theming",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeSwitcher /> {/* Only this is client-side */}
        {children}
      </body>
    </html>
  );
}

