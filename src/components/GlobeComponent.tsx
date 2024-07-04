import { motion } from "framer-motion";
import { globeConfig, sampleArcs } from "@/utils/globeConfig";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
    ssr: false,
  });

const GlobeComponent = () => {
  return (
    <div className='hidden lg:flex flex-row items-center justify-center py-20 h-full dark:bg-black bg-white relative lg:w-2/5'>
      <div className='mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4  flex flex-col justify-center items-center'>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className='div'
        >
        </motion.div>
        <div className='absolute w-full lg:h-[50%] xl:h-[60%] z-50 flex items-center justify-center inset-auto'>
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default GlobeComponent;
