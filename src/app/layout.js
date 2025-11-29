import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Developer Portfolio",
  description: "A showcase of my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, outfit.variable, "scroll-smooth")}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
