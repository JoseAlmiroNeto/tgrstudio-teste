import { HiOutlineMicrophone, HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineCamera, AiOutlineVideoCamera } from "react-icons/ai";
import { ServicesContainers } from "../elements/servicesContainers";


export function ServicesSection() {
  return (
    <section
      className="w-full flex flex-col gap-10 items-center justify-around py-12"
      data-aos="fade-down"
    >
      <h2 className="text-2xl font-bold">
        What can do for you
      </h2>

      <div className="w-full lg:px-12 flex flex-wrap sm:flex-nowrap items-center justify-around 2xl:justify-center 2xl:gap-10">
        <ServicesContainers
          icon={<AiOutlineCamera className="w-full h-full" />}
          title="Photo shooting"
          description="High-quality and vibrant photos tomach or you"
        />
        <ServicesContainers
          icon={<AiOutlineVideoCamera className="w-full h-full" />}
          title="Video shooting"
          description="Capture your moments so that they always remain with you"
        />
        <ServicesContainers
          icon={<HiOutlinePhotograph className="w-full h-full" />}
          title="Retouch"
          description="Your photos will be the most beautiful"
        />
        <ServicesContainers
          icon={<HiOutlineMicrophone className="w-full h-full" />}
          title="Sound recording"
          description="Only high-quality recording of your sound and its processing"
        />
      </div>
    </section>
  );
}
