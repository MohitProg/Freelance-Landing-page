import React from 'react'
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className=" fixed w-full">
          <nav className=" w-full md:w-[80%]  z-[999]  mx-auto p-3 flex items-center  justify-between">
            {/* add logo */}

            <div className="  gap-2  flex items-center  p-2  lg:p-3 px-4 border-[0.5px] bg-white border-gray-300  shadow-lg  rounded-xl">
              <img
                src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
                className="h-6"
                alt=""
              />

              <div className="text-[0.7rem] hidden lg:block leading-tight  border-l-[1px] border-gray-300 px-2">
                The everting
                <br /> app for work
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 ">
              <button className="p-3 hover:bg-[#f1f1f9] hidden lg:block text-sm px-4 border-[0.5px] bg-white border-gray-300  shadow-lg  rounded-xl">
                Contact Sales
              </button>

              <div className="lg:p-1 flex items-center justify-between gap-3   border-[0.5px] bg-white border-gray-300  shadow-lg  rounded-xl">
                <button className=" p-[0.6rem] text-sm hidden lg:block  rounded-lg hover:bg-[#f1f1f9]">
                  Login
                </button>
                <button className="p-[0.6rem] lg:hover:scale-105 transition-all duration-300 ease-in-out font-bold  bg-gradient-to-r  text-sm from-[#4273fa] via-[#721afa] to-[#af12f0] text-white rounded-lg ">
                  SignUp
                </button>
              </div>

              <button className="lg:hidden">
                <FiMenu size={25} />
              </button>
            </div>
          </nav>
        </header>
  )
}

export default Navbar
