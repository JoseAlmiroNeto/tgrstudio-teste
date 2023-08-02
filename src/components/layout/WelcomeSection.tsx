import { Button } from "../ui/button";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiBehance } from "react-icons/si";

export function WelcomeSection() {
  return (
    <section className="h-screen w-full text-white relative bg-cover bg-no-repeat bg-[url('../assets/photographer-img.jpg')]">
      <div className="h-full w-full flex justify-start items-center gap-8 px-14 lg:px-24 2xl:px-32 space-y-4" data-aos="fade-right">
        <div className="h-full flex flex-col items-center justify-center space-y-4">
          <div className="h-[20%] w-[0.1rem] bg-white" />
          <ImTwitter color="white" className="h-5 w-5" />
          <ImInstagram
            color="white"
            className="h-5 w-5"
          />
          <SiBehance color="white" className="h-5 w-5" />
          <ImFacebook color="white" className="h-5 w-5" />
          <div className="h-[20%] w-[0.1rem] bg-white" />
        </div>
        <div className="flex flex-col items-start space-y-8">
          <h1 className="text-5xl font-bold">Gaspar Manuel Zaldo</h1>
          <p className="max-w-[28rem]">
            I am a photografer. I like a photograph people, happy people. Life
            stories. I try do it stylish and bautiful, leelings and amotions.
          </p>
          <Button className="w-40 h-10 text-sm border-[3px] border-orange-400 text-orange-400 hover:border-orange-500 hover:text-orange-500">
            Hire me
          </Button>
        </div>
      </div>

      <Button className="animate-bounce absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-12">
        <AiOutlineArrowDown size={28} />
      </Button>
    </section>
  );
}
