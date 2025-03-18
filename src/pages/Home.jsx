import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import CompanyScroller from "../components/CompanyScroller";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <main className="overflow-hidden h-[100%] w-[100%] transition-all ease-in-out duration-200 p-2 ">
        {/* moving cursor  */}

        {/* section 1 */}

        <section className="flex   flex-col gap-5 md:gap-4  lg:gap-5  text-center justify-center items-center p-3 py-30  md:py-[40] lg:py-50 ">
          <h1 className="text-[2.6rem] leading-tight md:text-[3.4rem] lg:text-[4.3rem] px-3  p-1 font-bold">
            The everything app,for work
          </h1>

          <p className="text-xl w-[80%] sm:w-[50%] lg:w-[30%] mx-auto ">
            <strong> Get everyone working in a single platform</strong> designed
            to manage any type of work
          </p>

          <div className="flex flex-col items-center gap-2">
            <button className="flex lg:hover:scale-105 transition-all duration-300 ease-in-out items-center md:mt-3 lg:mt-0 shadow-md gap-2 p-3 px-10 sm:px-12 md:px-15 lg:px-20 sm:py-4 md:py-3 font-bold bg-gradient-to-r md:text-[1.3rem]  lg:text-[1.5rem] text-md from-[#4273fa] via-[#721afa] to-[#af12f0] text-white rounded-xl  ">
              Get started.its FREE <FaArrowRightLong size={20} />
            </button>
            <p className=" font-semibold text-[#7970ae]">
              Free Forever No Credit Card{" "}
            </p>
          </div>
        </section>

        {/* section 2  */}

        <section className="p-3 py-7 ">
          <h1 className=" text-center text-lg font-semibold">
            Trusted by 3 millions+ teams
          </h1>

          {/* company features */}

          <div className="lg:w-[80%] mx-auto">
            <CompanyScroller />
          </div>
        </section>

        {/* section 3  */}

        <section className="p-4 py-7 space-y-5  ">
          <h1 className="text-4xl md:text-[2.4rem] lg:text-[2.9rem] p-1 px-3 font-bold text-center">
            Everthing your team is looking for
          </h1>
          <p className="text-xl  px-10 sm:w-[80%]   lg:w-[50%] mx-auto text-center ">
            <strong>
              ClickUp exceptional flexiability can handle any type of work
            </strong>
            .And we never stop innovating
          </p>

          <div className=" grid grid-cols-1 lg:w-[80%] mx-auto md:grid-cols-2 lg:grid-cols-3  md:mt-12 gap-9 mt-3 sm:p-5 ">
            {/* image  div 1 */}
            <div className="bg-gradient-to-b z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative from-[#c00ff9]   flex flex-col justify-around rounded-xl to-[#5037e6]  ">
              {/* info div  */}
              <div className=" px-5 py-5 absolute  top-0 bottom-0 left-0 right-0 flex text-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  AI-powered productivity
                </h1>
                <p className="text-md  text-white font-semibold">
                  Get work done faster with the only AI-powered assisitant
                  tailored to your role{" "}
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://images.ctfassets.net/w8fc6tgspyjz/5sEQN5mm48tnX6kyqRXUBU/8377db6638b36ae5aa6bd29bbd708eda/AI-powered-productivity.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
            {/* image div 2  */}
            <div className="bg-gradient-to-b z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative from-[#4da7fa]   flex flex-col justify-around rounded-xl to-[#604cef]  ">
              {/* info div  */}
              <div className=" px-5 py-5   flex text-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  View work your way
                </h1>
                <p className="text-md  text-white font-semibold">
                  Instant switch between 15 views including list,board, and more
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://clickup.com/assets/home-test/view-work-your-way.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>

            <div className="bg-[#252a31] z-[-1] overflow-hidden lg:hover:scale-105 transition-all duration-300 ease-in-out relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-5   flex text-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Search Everything
                </h1>
                <p className="text-md  text-white font-semibold">
                  Find any file in ClickUp, a connected app, or your local
                  drive, from one place.
                </p>
              </div>

              {/* sample image div  */}

              <div className=" ">
                <img
                  src="https://clickup.com/assets/home-test/search-everything.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* contact form */}

        <ContactForm />
        {/* footer section  */}
      </main>
    </>
  );
};

export default Home;
