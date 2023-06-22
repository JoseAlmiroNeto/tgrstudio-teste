'use client'

import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { scrollToComponent } from "@/utils/scrollToComponent";

export function HeaderMain() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="flex justify-between text-xs absolute z-20 text-white w-full px-24 py-8 
      fullHD:text-xl fullHD:px-36 fullHD:py-14
    ">
      <div className="flex items-center space-x-2">
        <Image src={LogoGMZ} alt="logo-gmz" className="w-12 fullHD:w-20" />
        <p>Professional Photografer</p>
      </div>

      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt size={22} />
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

        <button onClick={toggleSidebar}>
          <BiMenu size={42} />
        </button>
      </div>

      <div
        className={`h-screen w-64 py-8 px-4 space-y-2 absolute top-0 right-1 z-40 bg-[#b9917a] fullHD:w-80 
          ${isOpen ? 'sidebar-open' : 'hidden'}`}
      >
        <button onClick={toggleSidebar}>
          <AiOutlineCloseCircle size={28} />
        </button>
        <div className="space-y-8 text-xl flex flex-col items-center fullHD:text-3xl">
          <button onClick={() => {scrollToComponent('works'); toggleSidebar()}} className="transition-colors hover:text-gray-400">Works</button>
          <button onClick={() => {scrollToComponent('about'); toggleSidebar()}} className="transition-colors hover:text-gray-400">About me</button>
          <button onClick={() => {scrollToComponent('video'); toggleSidebar()}} className="transition-colors hover:text-gray-400">Video</button>
          <button onClick={() => {scrollToComponent('price'); toggleSidebar()}} className="transition-colors hover:text-gray-400">Prising</button>
          <button onClick={() => {scrollToComponent('contact'); toggleSidebar()}} className="transition-colors hover:text-gray-400">Contact</button>
        </div>
      </div>
    </header>
  );
}
