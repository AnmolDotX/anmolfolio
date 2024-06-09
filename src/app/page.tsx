"use client";
import { SparkleUnderline } from "@/components";
import GlobeComponent from "@/components/GlobeComponent";
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

  console.log(aboutData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='flex flex-col items-center gap-2'>
        <span className='md:text-5xl font-mono tracking-wide text-3xl lg:text-7xl font-bold text-center text-white relative z-20 -mb-4'>
          {aboutData?.name}
        </span>
        <p className='text-2xl font-bold tracking-widest font-mono'>
          <span className="text-blue-500 animate-pulse">{aboutData?.WhatIsTitle}</span>
        </p>
        <p className='max-w-[330px] text-center text-xs font-light text-slate-300 mb-3'>
          {aboutData?.bio}
        </p>
        <SparkleUnderline className='-mb-16' />
      </div>
      <GlobeComponent/>
    </> 
  );
};

export default HomePage;
