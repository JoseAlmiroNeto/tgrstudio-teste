import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiBehance } from "react-icons/si";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { ButtonTransparent } from "../elements/buttons/buttonTransparent";

export function FooterMain() {
  return (
    <footer className="w-full h-44 flex items-center justify-around text-xs bg-black text-gray-300 fullHD:text-xl">
      <div className="flex items-center space-x-2">
        <Image src={LogoGMZ} alt="logo-gmz" className="w-16 fullHD:w-20" />
        <p>Professional Photografer</p>
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="cursor-pointer"
          >
            <ImTwitter className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImInstagram className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="cursor-pointer"
          >
            <SiBehance className="h-5 w-5  
              fullHD:h-12 fullHD:w-12" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImFacebook className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt size={16} />
          <p>+1(404)654-37-91</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <p>Privacy policy</p>
        <FaRegCopyright />
        <p>Prights Reserved</p>
      </div>
      <ButtonTransparent text="Hire me" />
    </footer>
  );
}
