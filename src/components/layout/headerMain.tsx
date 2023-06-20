import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

export function HeaderMain() {
  return (
    <header className="flex justify-between text-xs absolute z-20 text-white w-full px-24 py-8">
      <div className="flex items-center space-x-2">
        <Image src={LogoGMZ} alt="logo-gmz" height={20} />
        <p>Professional Photografer</p>
      </div>

      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt size={16} />
          <p>+1(404)654-37-91</p>
        </div>

        <div className="flex space-x-3">
          <button className="transition-colors hover:text-orange-400">
            UA
          </button>
          <button className="text-orange-500 transition-colors hover:text-orange-400">
            FN
          </button>
          <button className="transition-colors hover:text-orange-400">
            RU
          </button>
        </div>

        <button>
          <BiMenu size={28} />
        </button>
      </div>
    </header>
  );
}
