import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiBehance } from "react-icons/si";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { Button } from "../ui/button";

export function FooterMain() {
  return (
    <footer className="w-full py-5 sm:py-10 flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-around text-xs bg-black text-gray-300">
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Image src={LogoGMZ} alt="logo-gmz" className="w-10" />
        <p>Professional Photografer</p>
      </div>

      <div className="space-y-4 flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="cursor-pointer"
          >
            <ImTwitter className="w-3 h-3 lg:w-4 lg:h-4" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImInstagram className="w-3 h-3 lg:w-4 lg:h-4" />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="cursor-pointer"
          >
            <SiBehance className="w-3 h-3 lg:w-4 lg:h-4" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImFacebook className="w-3 h-3 lg:w-4 lg:h-4" />
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="w-3 h-3 lg:w-4 lg:h-4" />
          <p>+1(404)654-37-91</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 lg:space-x-4">
        <p>Privacy policy</p>
        <FaRegCopyright />
        <p>Prights Reserved</p>
      </div>

      <Button className="w-36 lg:w-40 lg:h-10 text-sm border-[3px] border-orange-400 text-orange-400 hover:border-orange-500 hover:text-orange-500">
        Hire me
      </Button>
    </footer>
  );
}
