import { HiOutlineMicrophone, HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineCamera, AiOutlineVideoCamera } from "react-icons/ai";
import { ServicesContainers } from "../elements/servicesContainers";

export function ServicesSection() {
  return (
    <section className="h-[22rem] w-full flex flex-col items-center justify-around py-10 fullHD:h-[24rem]">
      <h2 className="text-2xl font-bold fullHD:text-4xl">
        What can do for you
      </h2>
      <div className="w-full px-12 flex items-center justify-around">
        <ServicesContainers
          icon={
            <AiOutlineCamera
              className="h-14 w-14  
              fullHD:h-20 fullHD:w-20"
            />
          }
          title="Photo shooting"
          description="High-quality and vibrant photos tomach or you"
        />
        <ServicesContainers
          icon={
            <AiOutlineVideoCamera
              className="h-14 w-14
              fullHD:h-20 fullHD:w-20"
            />
          }
          title="Video shooting"
          description="Capture your moments so that they always remain with you"
        />
        <ServicesContainers
          icon={
            <HiOutlinePhotograph
              className="h-14 w-14
              fullHD:h-20 fullHD:w-20"
            />
          }
          title="Retouch"
          description="Your photos will be the most beautiful"
        />
        <ServicesContainers
          icon={
            <HiOutlineMicrophone
              className="h-14 w-14
              fullHD:h-20 fullHD:w-20"
            />
          }
          title="Sound recording"
          description="Only high-quality recording of your sound and its processing"
        />
      </div>
    </section>
  );
}
