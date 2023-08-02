"use client";
import { useEffect } from "react";
import Image from "next/image";
import LogoGMZ from "../../assets/logo.svg";
import { BiMenu } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import AOS from "aos";
import "aos/dist/aos.css";


export function HeaderMain() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className="w-full flex justify-between text-white text-xl xl:text-sm 2xl:text-xl px-14 lg:px-24 2xl:px-32 py-6 2xl:py-10 absolute z-10">
      <div className="flex items-center gap-4" data-aos="fade-right">
        <Image
          src={LogoGMZ}
          alt="logo"
          className="h-14 w-14 2xl:h-20 2xl:w-20"
        />
        <p className="hidden sm:block">Professional Photografer</p>
      </div>
      <div className="flex items-center space-x-8" data-aos="fade-left">
        <p className="hidden lg:flex items-center gap-3">
          <FaPhoneAlt />
          +1(404)654-37-91
        </p>
        <div className="hidden lg:flex space-x-3">
          <Button className="p-0 text-xl xl:text-sm 2xl:text-xl hover:text-orange-400 focus:text-orange-500">
            US
          </Button>
          <Button className="p-0 text-xl xl:text-sm 2xl:text-xl hover:text-orange-400 focus:text-orange-500">
            FN
          </Button>
          <Button className="p-0 text-xl xl:text-sm 2xl:text-xl hover:text-orange-400 focus:text-orange-500">
            RU
          </Button>
        </div>

        <Menubar className="p-0 border-0">
          <MenubarMenu>
            <MenubarTrigger className="p-0 cursor-pointer">
              <BiMenu className="h-8 w-8 2xl:h-10 2xl:w-10" />
            </MenubarTrigger>
            <MenubarContent
              align="center"
              className="bg-black text-white border-gray-800 rounded"
            >
              <MenubarItem className="hover:bg-gray-700 rounded cursor-pointer">Works</MenubarItem>
              <MenubarItem className="hover:bg-gray-700 rounded cursor-pointer">About</MenubarItem>
              <MenubarItem className="hover:bg-gray-700 rounded cursor-pointer">Video</MenubarItem>
              <MenubarItem className="hover:bg-gray-700 rounded cursor-pointer">Price</MenubarItem>
              <MenubarItem className="hover:bg-gray-700 rounded cursor-pointer">Contact</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
