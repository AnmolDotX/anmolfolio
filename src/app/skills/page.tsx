"use client"
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SkillSet } from "@/interfaces/SkillResponseInterface";
import { client, urlFor } from "@/sanity";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const robotoMono = Roboto_Mono({
    subsets: ["latin", "greek", "cyrillic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const SkillsPage = () => {
    const [skillsData, setSkillData] = useState<SkillSet>();

    const fetchData = async () => {
        const data = await client.fetch('*[_type == "skill"]');
        if(data) {
            setSkillData(data[0])
        }
    }

    const words = [
        {
          text: "Tools & Technologies",
          className: `text-blue-500 font-bold text-lg sm:text-xl md:text-2xl 2xl:text-4xl dark:text-blue-500 ${robotoMono.className}`
        },
        {
          text: "I use for developement :",
          className: `text-[12px] sm:text-lg md:text-xl 2xl:text-3xl font-medium tracking-wider  ${robotoMono.className}`,
        },
      ];

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="flex flex-col items-center h-full w-full relative overflow-hidden">
            <h1 className="text-orange-600/90 text-xl md:text-3xl 2xl:text-4xl tracking-wide font-extrabold rounded-b-lg z-10`">Skills & Tools</h1>
            <TypewriterEffectSmooth words={words} />
            <div className="h-full w-full flex flex-col overflow-y-scroll rounded-t-3xl border-t-2 border-blue-600 ">
                <div className="flex-1">
                    {/* <h2 className="text-2xl font-bold text-blue-500 border-r-4 border-b-4 rounded-bl-3xl border-blue-600 rounded-e-3xl w-fit px-4 shadow-2xl shadow-black/70">Skills</h2> */}
                    <div className="h-[90%] flex flex-wrap gap-x-1 sm:gap-x-5  gap-y-1 sm:gap-y-2 py-1 justify-center items-center">
                        {
                            skillsData?.skills.map((skill)=>(
                               <div key={skill._key} className="relative h-32 w-32 flex items-center justify-center">
                                <div className="h-2/3 w-2/3 bg-blue-600 transition-all duration-200 absolute inset-0 blur-3xl" />
                                <div className="relative h-32 w-32 flex flex-col items-center justify-center hover:text-blue-600 duration-300">
                                    <Image
                                        src={urlFor(skill.logo).url()}
                                        width={1280}
                                        height={720}
                                        alt={skill.name}
                                        className="rounded-md h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 xl:h-20 xl:w-20 object-cover z-20 animate-pulse hover:scale-[1.05] transition-all duration-200"
                                    />
                                    <p className="text-xs text-inherit font-normal sm:font-medium md:font-bold tracking-wider mt-2">{skill.name}</p>
                                </div>
                               </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex-1">
                    {/* <h2 className="text-2xl font-bold text-blue-500 border-r-4 border-b-4 rounded-bl-3xl border-blue-600 rounded-e-3xl w-fit px-4 shadow-2xl shadow-black/70">Tools</h2> */}
                    <div className="h-[90%] flex flex-wrap gap-x-1 sm:gap-x-5 justify-center items-center">
                        {
                            skillsData?.tools.map((tool)=>(
                               <div key={tool._key} className="relative h-32 w-32 flex items-center justify-center">
                                <div className="h-2/3 w-2/3 bg-blue-600 transition-all duration-200 absolute inset-0 blur-3xl" />
                                <div className="relative h-32 w-32 flex flex-col items-center justify-center hover:text-blue-600 duration-300">
                                    <Image
                                        src={urlFor(tool.logo).url()}
                                        width={1280}
                                        height={720}
                                        alt={tool.name}
                                        className="rounded-md h-5 w-5 sm:h-8 sm:w-8 md:h-12 md:w-12 xl:h-20 xl:w-20 object-cover z-20 animate-pulse hover:scale-[1.05] transition-all duration-200"
                                    />
                                    <p className="text-xs text-inherit font-normal sm:font-medium md:font-bold tracking-wider mt-2">{tool.name}</p>
                                </div>
                               </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Meteors number={40}/>
        </div>
    );
}

export default SkillsPage;