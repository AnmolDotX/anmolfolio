"use client";
import ProjectCard from "@/components/ProjectCard";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ProjectResponseInterface } from "@/interfaces/ProjectsResponseInterfaces";
import { Roboto_Mono } from "next/font/google";
import { client } from "@/sanity";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const robotoMono = Roboto_Mono({
    subsets: ["latin", "greek", "cyrillic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ProjectsPage = () => {
  const [projectData, setProjectData] = useState<ProjectResponseInterface[]>();

  const words = [
    {
      text: "Some of my previous",
      className: `text-3xl font-medium tracking-wider ${robotoMono.className}`
    },
    {
      text: "Workings.",
      className: `text-blue-500 font-bold text-4xl dark:text-blue-500 ${robotoMono.className}`,
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
        <h1
          className={`text-orange-600/90 text-4xl tracking-wide font-extrabold rounded-b-lg`}
        >
          Projects
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
          autoplay={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          centeredSlides={true}
          className='w-full h-full flex items-center justify-center'
        >
          {projectData.map((project) => (
            <SwiperSlide key={project?._id}>
              <ProjectCard projectData={project} className='mx-auto ' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
};

export default ProjectsPage;
