import Image from "next/image";
import AboutImg from "../../assets/about.jpg";

interface AboutSection {
  id: string;
}

export function AboutSection({id}: AboutSection) {
  return (
    <section className="h-screen w-full flex items-center fullHD:h-[48rem]" id={id}>
      <div className="h-[32rem] w-full bg-gray-200 flex space-x-8 fullHD:h-[40rem]">
        <div className="flex">
          <div className="bg-orange-500 h-[0.25rem] w-48 mt-12 fullHD:h-[0.4rem] fullHD:w-56" />
          <Image src={AboutImg} alt="about-imagem" className="w-96 fullHD:w-[26rem]" />
        </div>
        <div className="w-[34rem] space-y-4 leading-relaxed text-sm mt-12 fullHD:w-[37rem] fullHD:text-xl">
          <h1 className="text-2xl font-bold fullHD:text-4xl">About me</h1>
          <p>
            I think i am a good hurnaured, very responsible, hard working and
            emotional person. I like creativity and appreciate this trit in
            others.
          </p>

          <div>
            <p>I dont´t like to he and i feel when others do.</p>
            <p>
              I try not to be late and i hate when others don´t come on time
            </p>
            <p>
              I prefer to associate with dever and polite people. It is very
              annoying vhen somebody whome i thust turns aut to be unreliable.
            </p>
          </div>

          <h2 className="font-bold">My favourite thinks:</h2>
          <ul className="list-disc ml-4 space-y-1 fullHD:space-y-2">
            <li>basketball</li>
            <li>travel</li>
            <li>camping</li>
            <li>draw</li>
            <li>dogs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
