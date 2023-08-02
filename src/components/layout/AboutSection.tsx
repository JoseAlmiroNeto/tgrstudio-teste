import Image from "next/image";
import AboutImg from "../../assets/about.jpg";
import { Separator } from "../ui/separator";

export function AboutSection() {
  return (
    <section
      className="w-full flex gap-8 my-9 bg-gray-100"
      data-aos="fade-right"
    >
      <div className="flex">
        <Separator className="h-1 w-0 xl:w-36 2xl:w-64 mt-8 bg-orange-400" />
        <Image
          src={AboutImg}
          alt="about-imagem"
          className="w-96 h-auto object-cover"
        />
      </div>

      <div className="h-auto flex flex-col justify-center text-xs sm:text-sm lg:text-base space-y-2 sm:space-y-4">
        <h2 className="text-lg sm:text-2xl font-bold">About me</h2>
        <p className="max-w-[36rem] space-y-2">
          <p>
            I think i am a good hurnaured, very responsible, hard working and
            emotional person. I like creativity and appreciate this trait in
            others.
          </p>
          <p>
            I dont´t like to he and i feel when others do.
            <br />
            I try not to be late and i hate when others don´t come on time.
            <br />I prefer to associate with dever and polite people. It is very
            annoying when someone whom i trust turns out to be unreliable.
          </p>
        </p>
        <h2 className="font-bold">My favourite thinks:</h2>
        <ul className="list-disc ml-4 space-y-1">
          <li>basketball</li>
          <li>travel</li>
          <li>camping</li>
          <li>draw</li>
          <li>dogs</li>
        </ul>
      </div>
    </section>
  );
}
