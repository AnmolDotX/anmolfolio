import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/ui/Spotlight";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anmol Kumar | Portfolio",
  description: "Fullstack Web developer with Javascript & Python",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <section className='w-screen h-screen bg-black flex items-center justify-center px-5'>
          <Spotlight className="z-50" />
            <div className="text-white text-2xl font-bold">
              some data here
            </div>
          <HeroHighlight className='w-[70vw] h-[80vh] bg-transparent border-4 shadow-lg shadow-orange-500 border-blue-600 text-white rounded-[20px]'>
            <div className='w-full h-full rounded-2xl border-4 border-orange-600  p-5 bg-black flex items-center gap-5'>
              {children}
            </div>
          </HeroHighlight>
            <div className="text-white text-2xl font-bold">
              some data here
            </div>
        </section>
      </body>
    </html>
  );
}
