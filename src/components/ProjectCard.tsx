import Image from "next/image";
import { Meteors } from "./ui/meteors";
import { urlFor } from "@/sanity";
import { ProjectResponseInterface } from "@/interfaces/ProjectsResponseInterfaces";
import Link from "next/link";

const ProjectCard = ({
  projectData,
  className
}: {
  projectData: ProjectResponseInterface;
  className : string
}) => {
  return (
    <div className={`relative h-[300px] md:h-[450px] 2xl:h-[500px] w-full sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] flex flex-row md:flex-row items-center justify-center z-0  ${className}`}>
      <div className='h-2/5 w-full rounded-full blur-3xl bg-gradient-to-br from-sky-600/50 to-blue-600 absolute inset-y-40' />
      <div className=' h-[350px] sm:h-[400px] mt-12 sm:mt-40 md:mt-0 md:h-[450px] w-[1020px] relative bg-black/70 backdrop-filter backdrop-blur rounded-lg overflow-hidden hover:scale-[1.01] transition-all flex flex-col lg:flex-row items-center gap-5 px-5 py-5 xl:py-0 z-0'>
        <Image
          src={urlFor(projectData?.thumbnail)?.url()}
          width={1280}
          height={720}
          decoding='async'
          className='w-52 md:w-72 xl:w-96 h-[100px] sm:h-[150px] md:h-[200px] xl:h-[250px] shadow-2xl shadow-black rounded-xl flex-1 object-cover'
          alt='Project thumbnail'
          quality={80}
          loading='lazy'
        />
        <div className='relative flex-1 flex items-center justify-center -gap-3 sm:justify-around flex-col w-full h-[calc(100%-192px)] overflow-hidden px-4 py-5 sm:py-3'>
          <h1 className='text-orange-600 font-bold my-1'>
            {projectData?.projectName}
          </h1>
          <p className='mx-auto my-2 sm:my-0 text-xs sm:text-sm font-medium text-slate-300/50'>
            {projectData?.description.slice(0, 150)}...
            <span className='text-sm font-medium sm:font-bold'>
              {" "}
              read more on github
            </span>
          </p>
          <div className='flex items-center justify-between w-full'>
            <Link
              href={projectData?.githubLink}
              target="_blank"
              className='text-sm px-3 sm:px-5 py-1 sm:py-2 rounded-md text-slate-400 bg-gradient-to-br from-slate-800 to-blue-950/40 border border-blue-600 shadow-black shadow-xl backdrop-filter backdrop-blur cursor-pointer hover:text-blue-600 transition-all'
            >
              Github
            </Link>
            <Link
              href={projectData?.deployedLink}
              target="_blank"
              className='text-sm px-3 sm:px-5 py-1 sm:py-2 rounded-md text-slate-400 bg-gradient-to-br from-slate-800 to-blue-950/40 border border-blue-600 shadow-black shadow-xl backdrop-filter backdrop-blur cursor-pointer hover:text-blue-600 transition-all'
            >
              Deployement
            </Link>
          </div>
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
