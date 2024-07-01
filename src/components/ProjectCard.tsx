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
    <div className={`relative h-[500px] w-[1020px] flex items-center justify-center ${className}`}>
      <div className='h-2/5 w-full rounded-full blur-3xl bg-gradient-to-br from-sky-600/50 to-blue-600 absolute inset-y-40' />
      <div className='h-[480px] w-[1020px] relative bg-black/70 backdrop-filter backdrop-blur rounded-lg overflow-hidden hover:scale-[1.01] transition-all flex items-center gap-5 px-5'>
        <Image
          src={urlFor(projectData?.thumbnail)?.url()}
          width={1280}
          height={720}
          decoding='async'
          className='w-96 h-[250px] rounded-xl flex-1 object-cover'
          alt='Project thumbnail'
          quality={80}
          loading='lazy'
        />
        <div className='relative flex-1 flex items-center justify-around flex-col w-full h-[calc(100%-192px)] overflow-hidden px-4 py-3'>
          <h1 className='text-orange-600 font-bold my-1'>
            {projectData?.projectName}
          </h1>
          <p className='mx-auto text-sm font-medium text-slate-300/50'>
            {projectData?.description.slice(0, 200)}...
            <span className='text-sm font-bold'>
              {" "}
              read more
            </span>
          </p>
          <div className='flex items-center justify-between w-full'>
            <Link
              href={projectData?.githubLink}
              target="_blank"
              className='text-sm px-5 py-2 rounded-md text-slate-400 bg-gradient-to-br from-slate-800 to-blue-950/40 border border-blue-600 shadow-black shadow-xl backdrop-filter backdrop-blur cursor-pointer hover:text-blue-600 transition-all'
            >
              Github
            </Link>
            <Link
              href={projectData?.deployedLink}
              target="_blank"
              className='text-sm px-5 py-2 rounded-md text-slate-400 bg-gradient-to-br from-slate-800 to-blue-950/40 border border-blue-600 shadow-black shadow-xl backdrop-filter backdrop-blur cursor-pointer hover:text-blue-600 transition-all'
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
