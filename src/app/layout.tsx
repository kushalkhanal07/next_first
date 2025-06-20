import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./sidebar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex flex-col overflow-hidden">
          {/* Fixed navbar */}
          <div className="h-14 bg-gray-300 shrink-0">navbar</div>

          {/* Main content area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <Sidebar />

            {/* Scrollable content */}
            <div className="flex-1 overflow-hidden overflow-y-auto p-5 custom-scrollbar ml-0 md:ml-60 transform transition-all duration-500">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
