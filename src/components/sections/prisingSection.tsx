import { CardsPrising } from "../elements/cardsPrising";
import { LineOrange } from "../elements/lineOrange";

interface PrisingSection {
  id: string;
}

export function PrisingSection({id}: PrisingSection) {
  return (
    <div className="h-screen w-full flex flex-col justify-around fullHD:h-[66rem]" id={id}>
      <div className="flex items-center">
        <LineOrange size="100%" />
        <h1 className="w-[40rem] text-center text-2xl font-bold fullHD:text-4xl">Prising</h1>
      </div>
      <div className="w-full flex items-center justify-center space-x-8">
        <CardsPrising namePlan="MINIMUM" price="200"/>
        <CardsPrising namePlan="STANDARD" price="500"/>
        <CardsPrising namePlan="PREMIUM" price="900"/>
      </div>
    </div>
  );
}
