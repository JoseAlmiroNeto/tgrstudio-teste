import { AiFillCheckSquare } from "react-icons/ai";
import { Button } from "../ui/button";

interface CardsPrising {
  namePlan: string;
  price: string;
}

export function CardsPrising({ namePlan, price }: CardsPrising) {
  return (
    <div className="w-72 h-[26rem] bg-gray-200 flex flex-col justify-evenly px-8 text-xs">
      <h1 className="text-gray-600 font-bold text-[1.4rem] :text-4xl">
        {namePlan}
      </h1>
      <h2 className="text-orange-500 font-bold text-[1.4rem] :text-4xl">
        $ {price}
      </h2>
      <p className="leading-relaxed">
        Perfect for small sessions and personal photo shoots with and many
        purpos
      </p>

      <ul className="space-y-3">
        <li className="flex items-center space-x-1">
          <AiFillCheckSquare color="#D66939" size={20} />
          <p>2-hours shoot</p>
        </li>
        <li className="flex items-center space-x-1">
          <AiFillCheckSquare color="#D66939" size={20} />
          <p>50 photos avaliable</p>
        </li>
        <li className="flex items-center space-x-1">
          <AiFillCheckSquare color="#D66939" size={20} />
          <p>3 revisions</p>
        </li>
        <li className="flex items-center space-x-1">
          <AiFillCheckSquare color="#D66939" size={20} />
          <p>Free retouch</p>
        </li>
      </ul>

      <div className="w-full flex justify-center sm:justify-normal">
        <Button className="w-40 h-10 text-sm border-[3px] border-orange-400 text-orange-400 hover:border-orange-500 hover:text-orange-500">
          Buy now
        </Button>
      </div>
    </div>
  );
}
