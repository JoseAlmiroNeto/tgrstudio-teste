import { Carrossel } from "../elements/carousel";
import { ButtonFilled } from '../elements/buttons/buttonFilled'
import { LineOrange } from "../elements/lineOrange";

interface CarouselSection {
  id: string;
}

export function CarouselSection({id}: CarouselSection) {
  return (
    <section className="h-screen w-full flex flex-col items-end justify-center space-y-8 fullHD:h-[62rem]" id={id}>
      <div className="w-full flex items-center space-x-12">
        <LineOrange size="100%" />
        <h2 className="w-[38rem] text-2xl font-bold text-center fullHD:text-4xl">
          My latest works
        </h2>
      </div>
      <Carrossel />
      <div className="mr-20">
      <ButtonFilled text="See all works" link="https://www.instagram.com/gaspar.zaldo/?hl=pt" />
      </div>
    </section>
  );
}
