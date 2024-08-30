import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Loginbutton from "../Button/Loginbutton";
function Header() {
  return (
    <>
     <header className="bg-black bg-opacity-95 w-full h-20 flex justify-between">
        <div className='flex justify-start'>
            <div className="flex  justify-center  w-auto h-full ">
              <img
                src="Logo/Logo.png"
                alt="Logo"
                className="w-auto h-16 ml-3 md:ml-6 md:max-h-16 bg-cover cursor-pointer"
              />
              <img
                src="Logo/Tagline.png"
                alt="Logo"
                className="w-auto h-16 md:max-h-16 bg-cover cursor-pointer"
              />
            </div>

            <div className="hidden lg:text-white list-none lg:flex lg:justify-between lg:items-center relative lg:text-lg w-[650px] ml-6">
              <li className="hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-6">Home</li>
              <li className="hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-6">Blog</li>
              <li className="hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-6">Trive</li>
              <li className="hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-6">Leaderboard</li>
              <li className="hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-6">FAQ</li>
              <li className="cursor-pointer bg-red-600 p-1 pl-7 pr-7 hover:text-black hover:bg-white rounded-md">Play Free</li>
            </div>
        </div>

        <div className=" w-44 md:w-80 lg:w-64 flex justify-evenly items-center ">
          <div className="w-auto md:w-24 ">
            <Loginbutton word={"Login"} iconname={faRightToBracket} />
          </div>

          <div className="w-auto md:w-28  ">
            <Loginbutton word={"SignUp"} iconname={faUserPlus} />
          </div>

          <div className="flex justify-center align-middle">
            <FontAwesomeIcon
              icon={faBars}
              className="lg:hidden h-6 w-6 text-white hover:text-slate-300  cursor-pointer "
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header