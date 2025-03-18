import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className=" py-5 lg:mt-30 mt-10   w-full lg:w-[80%]  grid-cols-1 grid gap-3   mx-auto      ">
    <div className="flex flex-col md:flex-row lg:gap-8 gap-10   items-center justify-between">
      <div className="flex items-center md:justify-center md:w-1/2 flex-col  gap-1 ">
        {" "}
        <img
          src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
          className="h-8"
          alt=""
        />{" "}
        <h1 className="text-sm  font-bold">
          The everything app for work
        </h1>
      </div>

      {/* social tabs  */}

      <div className="grid grid-cols-3 gap-4 w-full px-8  lg:w-[50%]   ">
        <div className="  ">
          <h1 className="text-lg font-semibold  ">Follow us</h1>

          <ul className="text-sm flex flex-col text-gray-600 gap-3 mt-2">
            <Link to={"#"} className="flex items-center gap-2">
              {" "}
              <FaInstagram color="#9f34ad" size={20} /> Instagram
            </Link>
            <Link to={"#"} className="flex items-center gap-2">
              {" "}
              <FaFacebookSquare color="#1773ea" size={20} />
              Facebook
            </Link>
            <Link to={"#"} className="flex items-center gap-2">
              {" "}
              <FaSquareGithub size={20} color="#1a1e22" />
              Github
            </Link>
            <Link to={"#"} className="flex items-center gap-2">
              {" "}
              <FaLinkedin size={20} color="#1773ea" />
              Linkedin
            </Link>
          </ul>
        </div>
        <div className=" h-full flex flex-col    ">
          <h1 className="text-lg font-semibold  ">Tabs</h1>
          <ul className="text-sm flex flex-col text-gray-600 gap-3 mt-2">
            <Link to={"#"} className="">Home</Link>
            <Link to={"#"} className="flex items-center gap-2">Service</Link>
            <Link to={"#"} className="flex items-center gap-2">About us</Link>
            <Link to={"#"} className="flex items-center gap-2">Blog</Link>
          </ul>
        </div>
        <div className="p-2  ">
        {/* <h1 className="text-lg font-semibold  ">About us</h1> */}
          <ul className="text-sm flex flex-col  text-gray-600 gap-3 mt-7">
            <Link to={"#"} className=""> Security</Link>
            <Link to={"#"} className="flex items-center gap-2"> Privacy</Link>
            <Link to={"#"} className="flex items-center gap-2"> Terms</Link>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex  items-center gap-1 justify-center border-t-[1px] mt-2 py-3  border-gray-500 ">
      <h1 className="text-sm text-gray-600">@copyright 456</h1>
    </div>
  </footer>
  )
}

export default Footer
