import { ButtonTransparent } from "../elements/buttons/buttonTransparent";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IconsLeft } from "../elements/iconsLeft";

export function WelcomeSection() {
  return (
    <section
      className="h-screen w-full text-white px-24 pt-12 relative bg-[url('../assets/photographer-img.jpg')] bg-cover bg-no-repeat
      fullHD:text-xl fullHD:px-36 fullHD:pt-14"
    >
      <div className="flex items-center justify-start h-full space-x-14
      fullHD:space-x-20"
      >
        <IconsLeft />

        <div className="space-y-8
        fullHD:space-y-12"
        >
          <h1
            className="font-bold text-4xl
            fullHD:text-6xl"
          >
            Gaspar Manuel Zaldo
          </h1>
          <p
            className="w-96 text-sm leading-relaxed
            fullHD:w-[34rem] fullHD:text-xl"
          >
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
