import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiBehance } from "react-icons/si";
import { FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { ButtonTransparent } from "../buttons/buttonTransparent";

export function FooterMain() {
  return (
    <footer className="w-full h-36 flex items-center justify-around text-xs bg-black text-gray-300">
      <div className="flex items-center space-x-2">
        <Image src={LogoGMZ} alt="logo-gmz" height={20} />
        <p>Professional Photografer</p>
      </div>
      <div className="space-y-4 flex flex-col items-center">
        <div className="flex items-center space-x-6">
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="cursor-pointer"
          >
            <ImTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImInstagram size={20} />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="cursor-pointer"
          >
            <SiBehance size={30} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImFacebook size={20} />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt size={16} />
          <p className="">+1(404)654-37-91</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p>Privacy policy</p>
        <FaRegCopyright />
        <p>Prights Reserved</p>
      </div>
      <ButtonTransparent text="Hire me" />
    </footer>
  );
}
