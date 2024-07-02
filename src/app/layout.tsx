import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/ui/Spotlight";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import Button from "@/components/Button";

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
          <Spotlight className='z-50' fill="blue" />
          <div className='flex flex-col gap-3'>
            <Link href={"/projects"}>
              <Button>Projects</Button>
            </Link>
            <Link href={"/skills"}>
              <Button>Skills</Button>
            </Link>
            <Link href={"/experience"}>
              <Button>Experience</Button>
            </Link>
            <Link href={"/contact"}>
              <Button>Contact me</Button>
            </Link>
          </div>
          <HeroHighlight className='w-[70vw] h-[80vh] bg-transparent text-white rounded-[20px]'>
            <div className='w-full h-full rounded-2xl p-5 border-2 border-blue-600 shadow-2xl shadow-blue-600/50 bg-black flex items-center gap-5'>
              {children}
            </div>
          </HeroHighlight>
          <Link href={"/"} className='text-blue-600 text-md font-bold border shadow-2xl shadow-blue-700/50 border-blue-600 rounded-md active:shadow-blue-700 transition-all'>
            <Button>Home</Button>
          </Link>
        </section>
      </body>
    </html>
  );
}
