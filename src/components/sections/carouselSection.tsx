import { Carrossel } from "../extras/carousel";
import { ButtonFilled } from '../buttons/buttonFilled'

interface CarouselSection {
  id: string;
}

export function CarouselSection({id}: CarouselSection) {
  return (
    <section className="h-screen w-full flex flex-col items-end space-y-8" id={id}>
      <Carrossel />
      <div className="mr-20">
      <ButtonFilled text="See all works" link="https://www.instagram.com/gaspar.zaldo/?hl=pt" />
      </div>
    </section>
  );
}
