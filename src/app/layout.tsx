import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/custom/Navbar";
import Footer from "./components/custom/footer";
import { PROJECT_NAME } from "@/config";

export const metadata: Metadata = {
  title: PROJECT_NAME,
  description: "Connect with your research peers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col max-w-[1400px] mx-auto min-h-screen">
        <Navbar />
        <main className="flex-grow mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
