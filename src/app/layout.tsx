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
        <section className='w-screen h-screen bg-black flex items-center justify-center px-5 relative'>
          <Spotlight className='z-50' fill="blue" />
          <div className='flex-col gap-3 hidden xl:flex'>
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
          <HeroHighlight className='w-[90vw] sm:w-[80vw] md:w-[70vw] h-[80vh] bg-transparent text-white rounded-[20px]'>
            <div className='w-full h-full rounded-2xl p-5 border-2 border-blue-600 shadow-2xl shadow-blue-600/50 bg-black flex items-center gap-5 absolute -top-16 xl:static'>
              {children}
            </div>
          </HeroHighlight>
          <Link href={"/"} className='text-blue-600 hidden xl:block text-md font-bold border shadow-2xl shadow-blue-700/50 border-blue-600 rounded-md active:shadow-blue-700 transition-all'>
            <Button>Home</Button>
          </Link>
          <div className="w-[90vw] sm:w-[80vw] md:w-[70vw] h-20 border-blue-600 border-2 rounded-md absolute bottom-5 xl:hidden flex items-center justify-around">
              <Link href={'/'} className="py-1 px-2 font-light sm:px-3 sm:py-[7px] text-xs sm:font-medium md:px-5 md:py-2 rounded-full bg-transparent hover:border-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/50 text-blue-400 border border-blue-500 hover:text-white transition-all duration-200 md:text-sm md:font-bold active:shadow-blue-400 active:shadow-2xl">
                Home
              </Link>
              <Link href={'/projects'} className=" py-1 px-2 font-light sm:px-3 sm:py-[7px] text-xs sm:font-medium md:px-5 md:py-2 rounded-full bg-transparent hover:border-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/50 text-blue-400 border border-blue-500 hover:text-white transition-all duration-200 md:text-sm md:font-bold active:shadow-blue-400 active:shadow-2xl">
                Projects
              </Link>
              <Link href={'/skills'} className="py-1 px-2 font-light sm:px-3 sm:py-[7px] text-xs sm:font-medium md:px-5 md:py-2 rounded-full bg-transparent hover:border-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/50 text-blue-400 border border-blue-500 hover:text-white transition-all duration-200 md:text-sm md:font-bold active:shadow-blue-400 active:shadow-2xl">
                Skills
              </Link>
              <Link href={'/experience'} className="py-1 px-2 font-light sm:px-3 sm:py-[7px] text-xs sm:font-medium md:px-5 md:py-2 rounded-full bg-transparent hover:border-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/50 text-blue-400 border border-blue-500 hover:text-white transition-all duration-200 md:text-sm md:font-bold active:shadow-blue-400 active:shadow-2xl">
                Experience
              </Link>
              <Link href={'/contact'} className="py-1 px-2 font-light sm:px-3 sm:py-[7px] text-xs sm:font-medium md:px-5 md:py-2 rounded-full bg-transparent hover:border-2 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/50 text-blue-400 border border-blue-500 hover:text-white transition-all duration-200 md:text-sm md:font-bold active:shadow-blue-400 active:shadow-2xl">
                Contact me
              </Link>
          </div>
        </section>
      </body>
    </html>
  );
}
