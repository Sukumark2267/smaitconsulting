import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google";   // ⭐ NEW: Sporty display font
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Toaster } from "@/components/ui/sonner";
config.autoAddCss = false;

// MAIN UI FONTS (Geist)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SPORTY BRAND FONT (Anton)
export const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMA IT Consulting Group",
  description: "SMA IT Consulting Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${anton.variable}   /* Anton now globally available */
          antialiased
        `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
