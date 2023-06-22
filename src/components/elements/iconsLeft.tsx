import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiBehance } from "react-icons/si";

export function IconsLeft() {
  return (
    <div className="flex flex-col items-center space-y-4
          fullHD:space-y-6
        ">
          <div className="w-[0.2rem] bg-white h-40
          fullHD:w-1 fullHD:h-72"
          />
          <a
            href="https://twitter.com/home"
            target="_blank"
            className="cursor-pointer"
          >
            <ImTwitter className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" 
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImInstagram  className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" 
             />
          </a>
          <a
            href="https://www.behance.net"
            target="_blank"
            className="cursor-pointer"
          >
            <SiBehance  className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" 
             />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="cursor-pointer"
          >
            <ImFacebook  className="h-5 w-5  
              fullHD:h-8 fullHD:w-8" 
             />
          </a>
          <div className="w-[0.2rem] bg-white h-40
          fullHD:w-1 fullHD:h-72" 
          />
        </div>
  )
}