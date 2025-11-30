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
  title: "Sanjay D | Full Stack Developer",
  description: "Portfolio of Sanjay D, a Full Stack Developer specializing in modern web technologies.",
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/icons/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/icons/android-chrome-512x512.png" },
    ],
  },
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