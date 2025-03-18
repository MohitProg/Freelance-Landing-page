import React from 'react'
import Contactpng from "../images/contact.png";
const ContactForm = () => {
  return (
    <section className="w-full p-3  md:p-0   mt-10 lg:mt-30  lg:w-[80%] rounded-lg mx-auto grid grid-cols-1 md:shadow-lg  md:grid-cols-2 md:border-[2px] gap-10 border-gray-300 overflow-hidden  ">
    <div className="hidden md:flex bg-[#000000]   justify-between flex-col gap-1  ">
      <div className="px-10 py-10 space-y-2 text-white text-start  ">
        <h1 className="text-4xl font-bold">Join With Us</h1>
        <p className=' w-[80%]'>
          We will Provide Permanent solution to your problem Just keep
          faith in us{" "}
        </p>
      </div>

      <div className="h-full  flex items-center justify-center">
        <img
          src={Contactpng}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    </div>
    <form
      action=""
      className="flex flex-col  gap-3  border-[2px] md:border-none border-gray-300 md:shadow-none  shadow-lg  rounded-lg p-4   "
    >
      <h1 className=" text-center text-xl font-bold">Contact Us</h1>{" "}
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-sm   font-semibold text-gray-500"
        >
          Name
        </label>
        <input
          type="text"
          className="p-3 border-gray-500  text-gray-500 font-semibold text-sm focus:border-gray-700  outline-none border-[1px]  rounded-lg"
          placeholder="Enter your Name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-sm   font-semibold text-gray-500"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-3 border-gray-500  text-gray-500 font-semibold text-sm focus:border-gray-700  outline-none border-[1px]  rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor=""
          className="text-sm   font-semibold text-gray-500"
        >
          Message
        </label>
        <textarea
          type="text"
          rows={10}
          placeholder="Enter your Message"
          className="p-3 border-gray-500  text-gray-500 font-semibold text-sm focus:border-gray-700  outline-none border-[1px]  rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center p-3 ">
        <button className=" from-[#4273fa] text-white p-2  px-5 rounded-lg  font-semibold via-[#721afa] to-[#af12f0] bg-gradient-to-r">
          Submit
        </button>
      </div>
    </form>
  </section>

  )
}

export default ContactForm
