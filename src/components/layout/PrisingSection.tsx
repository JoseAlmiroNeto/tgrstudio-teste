import { CardsPrising } from "../elements/cardsPrising";
import { Separator } from "../ui/separator";

export function PrisingSection() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center pt-12">
        <Separator className="h-1 w-3/6 sm:w-3/5 bg-orange-400" />
        <h2 className="text-base sm:text-2xl text-center flex-1 font-semibold">
          Prising
        </h2>
      </div>
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-10 pb-20"
        data-aos="fade-up"
      >
        <CardsPrising namePlan="MINIMUM" price="200" />
        <CardsPrising namePlan="STANDARD" price="500" />
        <CardsPrising namePlan="PREMIUM" price="900" />
      </div>
    </div>
  );
}
