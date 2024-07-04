"use client";
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Roboto_Mono } from "next/font/google";
import { client } from "@/sanity";
import { Experience } from "@/interfaces/ExperienceInterfaces";
import Link from "next/link";

const robotoMono = Roboto_Mono({
  subsets: ["latin", "greek", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch('*[_type == "experience"]');
      setExperiences(data);
    };
    fetchData();
  }, []);

  const words = [
    {
      text: "Few of my",
      className: `text-[12px] sm:text-lg md:text-xl 2xl:text-3xl font-medium tracking-wider ${robotoMono.className}`,
    },
    {
      text: " Professional",
      className: `text-blue-500 font-bold text-lg sm:text-xl md:text-2xl 2xl:text-4xl dark:text-blue-500 ${robotoMono.className}`,
    },
    {
      text: " works.",
      className: `text-[12px] sm:text-lg md:text-xl 2xl:text-3xl font-medium tracking-wider ${robotoMono.className}`,
    },
  ];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsHovered(true);
    console.log("mouse hover ho rha");
    
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='h-full w-full flex flex-col items-center justify-center' 
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}>
      
      {/* mouse efffect follower */}
      <div
        className={`absolute z-50 w-52 h-52 bg-blue-600/40 animate-bounce rounded-full filter blur-3xl transition-all duration-200 ${
          isHovered ? "cursor-movement" : "hidden"
        }`}
        style={{
          left: `${mousePosition.x - 280}px`,
          top: `${mousePosition.y - 50}px`,
          transform : "translate(-50%, -50%)"
        }}
      />

      <div className='flex flex-col items-center relative'>
        <div className='absolute h-20 w-96 bg-blue-600/80 blur-2xl rounded-full -rotate-6' />
        <h1
          className={`text-orange-600/90 text-xl md:text-3xl 2xl:text-4xl tracking-wide font-extrabold rounded-b-lg z-10`}
        >
          Experiences
        </h1>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div
        id='experience-timeline'
        className='h-full w-full p-5 overflow-scroll'
      >
        <div className='relative flex flex-col items-center'>
          <div className='absolute left-0 transform -translate-x-1/2 w-[2px] md:w-1 bg-orange-600 h-full'></div>
          {experiences &&
            experiences?.map((exp, index) => (
              <div key={exp._id} className='flex items-center mb-8 w-full'>
                <div className='w-1/12 flex justify-center relative'>
                  <div className='h-3 w-3 md:h-6 md:w-6 rounded-full bg-blue-500 absolute left-0 transform -translate-x-1/2'></div>
                </div>
                <div className='ml-8 flex flex-col w-10/12 border-l-2 pl-2 py-2 rounded-l-2xl border-orange-600'>
                  <h3 className='text-xs sm:text-base md:text-lg lg:text-xl font-medium lg:font-semibold'>
                    {exp.role} at{" "}
                    <Link
                      href={exp?.companyLink || "#"}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-500'
                    >
                      {exp.companyName}
                    </Link>
                  </h3>
                  <p className='text-xs font-light lg:text-base text-gray-500'>
                    {new Date(exp.startDate).toLocaleDateString()} -{" "}
                    {exp.current
                      ? "Present"
                      : new Date(exp.endDate!).toLocaleDateString()}
                  </p>
                  <ul className='list-disc list-inside mt-2 pl-2'>
                    {exp?.description?.map((desc, idx) => (
                      <li key={idx} className='text-xs md:text-sm text-gray-300 md:text-gray-400 mt-2'>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
