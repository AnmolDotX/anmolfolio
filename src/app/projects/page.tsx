"use client";
import ProjectCard from "@/components/ProjectCard";
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ProjectResponseInterface } from "@/interfaces/ProjectsResponseInterfaces";
import { client, urlFor } from "@/sanity";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageBitmapLoader } from "three";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState<ProjectResponseInterface[]>();
  const words = [
    {
      text: "Some of my previous",
      className: "text-3xl font-bold tracking-wider",
    },
    {
      text: "Workings.",
      className: "text-blue-500 text-4xl dark:text-blue-500",
    },
  ];

  const fetchData = async () => {
    const project = await client.fetch('*[_type == "project"]');

    if (project) {
      setProjectData(project);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    projectData && (
      <div className='flex items-center justify-center flex-col w-full h-full'>
        <h1 className='text-orange-600/90 text-4xl tracking-wide font-extrabold rounded-b-lg'>
          My Workings
        </h1>
        <TypewriterEffectSmooth words={words} />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          centeredSlides={true}
          className='w-full h-full flex items-center justify-center'
        >
          {projectData.map((project) => (
            <SwiperSlide key={project?._id}>
              <ProjectCard projectData={project} className="mx-auto mt-5" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default ProjectsPage;
