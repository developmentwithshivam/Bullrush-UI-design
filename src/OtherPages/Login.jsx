import React from "react";
import { Link } from "react-router-dom";
import Backbutton from "../Button/Backbutton";
function Login() {
  return (
    <>
      <div className="bg-black w-screen h-screen items-center flex flex-col">
        {/* <div className="w-full h-14 hidden lg:block">
          <div className="mt-8 ml-14">
            <Backbutton />
          </div>
        </div> */}

        <div className=" w-full  h-full md:w-[28rem] md:h-[38rem] md:rounded-md md:bg-stone-900 text-white flex flex-col items-center font-medium md:mt-10">
          <Link to="/home" className="flex ">
            <img
              src="Logo/Logo.png"
              alt="Logo"
              className="w-auto h-[5rem] md:h-[7rem]  bg-cover cursor-pointer "
            />
            <img
              src="Logo/Tagline.png"
              alt="Logo"
              className="w-auto h-[5rem] md:h-[7rem] bg-cover cursor-pointer mt-2"
            />
          </Link>
          <p className="text-xl ">Log in to your account</p>

          <div className="w-[90%] md:w-[85%] mb-5 mt-10">
            <input
              type="text"
              placeholder="Email"
              className="w-full text-sm rounded-md bg-black border-[1px] border-slate-700 h-9 pl-4 placeholder-slate-300 font-normal focus:outline-none  focus:border-red-600"
            />
          </div>
          <div className="w-[90%] md:w-[85%]">
            <input
              type="password"
              placeholder="Password"
              className="w-full text-sm rounded-md bg-black border-[1px] border-slate-700 h-9 pl-4 placeholder-slate-300 font-normal focus:outline-none  focus:border-red-600"
            />
          </div>
          <div className="flex justify-between w-[90%] md:w-[85%] mt-2">
            <div className="flex font-normal">
              <input type="checkbox" className="accent-red-600 " />
              <p className="ml-2">Remember me</p>
            </div>
            <p className="font-normal">Forgot Password?</p>
          </div>
          <div className="bg-red-600 w-[90%] md:w-[85%] h-10 flex justify-center items-center mt-16 text-base rounded-md">
            Login
          </div>
          <p className="mt-6">
            Don't have an account yet?
            <Link className="text-red-600">Sign Up</Link>
          </p>
        </div>
        <div className=" mt-[6rem] md:mt-[10rem] md:text-sm text-xs flex text list-none flex-wrap justify-center">
          <p className="text-white">© 2024 BullRush Entertainment LLC </p>
          <li className="text-red-600 ml-1 mr-1 flex">
            <p className="text-white">|</p> Refund Policy
          </li>
          <li className="text-red-600 ml-1 mr-1 flex">
            <p className="text-white">|</p> Privacy Policy
          </li>
          <li className="text-red-600 ml-1 mr-1 flex">
            <p className="text-white">|</p> Cookie Policy
          </li>
          <li className="text-red-600 ml-1 mr-1 flex">Terms & Conditions</li>
        </div>
      </div>
    </>
  );
}

export default Login;
