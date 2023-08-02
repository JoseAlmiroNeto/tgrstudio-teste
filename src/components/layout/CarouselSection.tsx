import { Carrossel } from "../elements/carousel";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function CarouselSection() {
  return (
    <section className="w-full" data-aos="fade-down">
      <div className="flex items-center py-8">
        <Separator className="h-1 w-3/6 sm:w-3/5 bg-orange-400" />
        <h2 className="text-base sm:text-2xl text-center flex-1 font-semibold">
          My latest works
        </h2>
      </div>
      <Carrossel />
      <div className="flex justify-end pr-4 sm:pr-24">
        <Button className="w-40 h-10 my-6 ml-auto text-sm text-white bg-orange-400 hover:bg-orange-500">
          See all works
        </Button>
      </div>
    </section>
  );
}
