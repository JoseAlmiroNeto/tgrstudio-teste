import { HiOutlineMicrophone, HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineCamera, AiOutlineVideoCamera } from "react-icons/ai";
import { ServicesContainers } from "../extras/servicesContainers";
import { LineOrange } from "../extras/lineOrange";

export function ServicesSection() {
  return (
    <section className="h-[24rem] w-full flex flex-col items-center justify-between py-12">
      <h2 className="text-2xl font-bold">What can do for you</h2>
      <div className="w-full px-12 flex items-center justify-around">
        <ServicesContainers
          icon={<AiOutlineCamera size={46} />}
          title="Photo shooting"
          description="High-quality and vibrant photos tomach or you"
        />
        <ServicesContainers
          icon={<AiOutlineVideoCamera size={46} />}
          title="Video shooting"
          description="Capture your moments so that they always remain with you"
        />
        <ServicesContainers
          icon={<HiOutlinePhotograph size={46} />}
          title="Retouch"
          description="Your photos will be the most beautiful"
        />
        <ServicesContainers
          icon={<HiOutlineMicrophone size={46} />}
          title="Sound recording"
          description="Only high-quality recording of your sound and its processing"
        />
      </div>
      <div className="w-full flex items-center space-x-12">
        <LineOrange size="100%" />
        <h2 className="w-[38rem] text-2xl font-bold text-center">
          My latest works
        </h2>
      </div>
    </section>
  );
}
