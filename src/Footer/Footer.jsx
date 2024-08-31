import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <>
      <div className="w-full h-auto text-white md:pl-16 pr-60 md:pt-14 pt-0 bg-black sm:flex-wrap overflow-hidden">
        <div className=" lg:flex justify-between w-100% lg:pb-16 pl-1 md:pl-3">
          <div className="md:w-96 w-80  pr-10">
            <div className="flex w-80 h-auto ">
              <img src="Logo/Logo.png" alt="Logo" className="w-h-24 h-24" />
              <img src="Logo/Tagline.png" alt="Logo" className="w-h-24 h-24" />
            </div>
            <p className="ml-4 mt-5 font-normal text-gray-200">
              BullRush Entertainment LLC
            </p>
            <p className="ml-4 mt-5 font-normal text-gray-200">
              701 S Carson Street, Suite 200, Carson City, NV 89701
            </p>
            <FontAwesomeIcon
              icon={faSquareTwitter}
              className="ml-4 mt-8 font-normal w-10 h-10 text-gray-300 hover:text-white hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faDiscord}
              className="ml-4 mt-8 font-normal w-10 h-10 text-gray-300 hover:text-white hover:cursor-pointer"
            />
          </div>

          <div className="pt-9 text-gray-400 cursor-pointer min-w-72  lg:pl-20 pl-4 pr-20 ">
            <p className="font-normal text-lg hover:text-white">
              Terms of Use
            </p>
            <p className="pt-4 font-normal text-lg hover:text-white">
              Privacy Policy
            </p>
            <p className="pt-4 font-normal text-lg hover:text-white">Help</p>
            <p className="pt-4 font-normal text-lg hover:text-white">FAQ</p>
          </div>

          <div className="pb-10 text-gray-400 cursor-pointer pl-4 min-w-72 ">
           <div className=" flex group">
           <p className="pt-6 lg:pt-7 font-normal text-lg hover:text-white group">Log In </p>
           <FontAwesomeIcon className="h-3 pt-[33px] md:pt-[37px]  pl-2 w-auto group-hover:text-white" icon={faFileExport} />
           </div>
           <div className=" flex">
            <p className="mt-5 font-normal text-lg hover:text-white">
              Create a Free Account
            </p>
            <FontAwesomeIcon className="h-3 pt-[29px]  pl-2 w-auto hover:text-white" icon={faFileExport} />
           </div>
            <p className="mt-11 font-normal text-base hover:text-white">
              Wanna help us spread the word?
            </p>
            <p className=" font-normal text-base hover:text-white">
              Join the launch crew here.
            </p>
          </div>
          
        </div>

      </div>
        <div className="w-full h-[1px] flex justify-center bg-black overflow-hidden">
            <div className="w-[95%] h-[1px] bg-slate-200"></div>
        </div>
      
      
      <div className="bg-black text-white pt-7 pb-10 md:pl-20 pl-5">
        <p>Copyright © 2024 Bullrush Entertainment LLC all rights reserved</p>
        <p className="pt-5">
          Bullrush, The Bullrush Logo, “Bullrush Trading Competitions”,
          “Bullrush Trading Tournament”,” Trade, Compete, Win”, “Trading Trivia
          Competition”, “Trading Freedom” and “Trading Olympics” are all
          trademarks of Bullrush Entertainment LLC.
        </p>
      </div>
    </>
  );
}

export default Footer;
