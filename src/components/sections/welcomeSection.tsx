import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { ButtonTransparent } from "../buttons/buttonTransparent";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SiBehance } from "react-icons/si";

export function WelcomeSection() {
  return (
    <section className="h-screen w-full text-white px-24 pt-12 relative bg-[url('../assets/photographer-img.jpg')] bg-cover bg-no-repeat">
      <div className="flex items-center justify-start h-full space-x-14">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[0.2rem] bg-white h-40" />
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="cursor-pointer"
          >
            <ImTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImInstagram size={20} />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="cursor-pointer"
          >
            <SiBehance size={20} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImFacebook size={20} />
          </a>
          <div className="w-[0.2rem] bg-white h-40" />
        </div>

        <div className="space-y-8">
          <h1 className="font-bold text-4xl">Gaspar Manuel Zaldo</h1>
          <p className="w-96 text-sm leading-relaxed">
            I am a photografer. I like a photograph people, happy people. Life
            stories. I try do it stylish and bautiful, leelings and amotions.
          </p>
          <ButtonTransparent text="Hire me" />
        </div>
      </div>

      <button className="animate-bounce centralize-div absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-12">
        <AiOutlineArrowDown size={28} />
      </button>
    </section>
  );
}
