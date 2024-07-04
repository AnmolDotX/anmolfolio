"use client";
import { SparkleUnderline } from "@/components";
import GlobeComponent from "@/components/GlobeComponent";
import { FlipWords } from "@/components/ui/flip-words";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { AboutInterfaces } from "@/interfaces/AboutInterfaces";
import { client } from "@/sanity";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [aboutData, setAboutData] = useState<AboutInterfaces>();

  const fetchData = async () => {
    const about = await client.fetch('*[_type == "about"]');
    if (about) {
      setAboutData(about[0]);
    }
  };

  let words = ["Frontend", "UI/UX", "Backend", "MERN", "Django"];
  if (aboutData !== undefined) {
    words.push(aboutData?.WhatIsTitle);
  }

  useEffect(() => {
    fetchData();
    alert("The app is not yet responsive for mobile or tablet! Kindly open it in full sized laptop/computer")
  }, []);

  return (
    <>
      <div className='flex flex-col w-full lg:w-3/5 items-center gap-2'>
        <TextRevealCard
          text='Btw, my name is...'
          revealText='Anmol Kumar'
          className='h-32 md:w-2/3 lg:w-full flex justify-center items-center rounded-2xl border-2 border-blue-600 text-center relative z-20'
        />

        <div className='text-2xl font-bold tracking-widest font-mono'>
          <FlipWords duration={1000} words={words} />
        </div>
        <p className='max-w-[330px] text-center text-xs font-light text-slate-300 mb-3'>
          {aboutData?.bio}
        </p>
        <SparkleUnderline className='-mb-16 w-[90%] md:w-2/3 lg:w-full' />
      </div>
      <GlobeComponent />
    </>
  );
};

export default HomePage;
