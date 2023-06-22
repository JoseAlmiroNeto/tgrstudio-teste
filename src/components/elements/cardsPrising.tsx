import { AiFillCheckSquare } from "react-icons/ai";
import { ButtonBuy } from "./buttons/buttonBuy";

interface CardsPrising {
  namePlan: string;
  price: string;
}

export function CardsPrising({ namePlan, price }: CardsPrising) {
  return (
    <div className="w-72 h-[26rem] bg-gray-200 flex flex-col justify-evenly px-8 text-xs fullHD:w-[28rem] fullHD:h-[44rem] fullHD:text-2xl fullHD:px-16">
      <h1 className="text-gray-600 font-bold text-[1.4rem] fullHD:text-4xl">{namePlan}</h1>
      <h2 className="text-orange-500 font-bold text-[1.4rem] fullHD:text-4xl">$ {price}</h2>
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
      <ButtonBuy text="Buy now" />
    </div>
  );
}
