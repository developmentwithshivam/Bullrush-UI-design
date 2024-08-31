import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Loginbutton from "../Button/Loginbutton";
import { Link, NavLink } from 'react-router-dom';
function Header() {
  return (
    <>
     <header className="bg-black bg-opacity-95 w-full h-20 flex justify-between">
        <div className='flex justify-startbg-blue-600'>
            <div className="flex  justify-center h-full ">
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

            <div className="hidden text-white list-none lg:flex justify-between  lg:items-center lg:text-lg ">
              <NavLink to="/home"  className={({isActive})=>`${isActive?'text-red-600 border-red-600 border-t-2 p-5':'text-white'} hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-5`}>Home</NavLink>
              <NavLink to="/blog" className={({isActive})=> `${isActive?'text-red-600 border-red-600 border-t-2 p-5':'text-white'} hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-5`}>Blog</NavLink>
              <NavLink to="/trive" className={({isActive})=>`${isActive?'text-red-600 border-red-600 border-t-2 p-5':'text-white'} hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-5`}>Trive</NavLink>
              <NavLink to="/Leaderboard" className={({isActive})=>`${isActive?'text-red-600 border-red-600 border-t-2 p-5':'text-white'} hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-5`}>Leaderboard</NavLink>
              <NavLink to="/faq" className={({isActive})=>`${isActive?'text-red-600 border-red-600 border-t-2 p-5':'text-white'} hover:text-red-600 cursor-pointer border-red-600 border-0 hover:border-t-2 p-5`}>FAQ</NavLink>
            </div>
              <div className="cursor-pointer bg-red-600 p-1 pl-7 pr-7 h-9 mt-6 ml-3 hover:text-black hover:bg-white rounded-md hidden lg:block">Play Free</div>
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