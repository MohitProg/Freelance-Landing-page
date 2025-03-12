import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const App = () => {
  return (
    <>
      <main>
        <header>
          <nav className=" w-full mx-auto p-6 flex items-center  justify-between">
            {/* add logo */}

            <div className="  p-2 px-4 border-[0.5px] border-gray-300  shadow-lg  rounded-xl">
              <img
                src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="flex items-center gap-4 px-2 ">
              <button className="p-3 font-bold bg-gradient-to-r  text-sm from-[#4273fa] via-[#721afa] to-[#af12f0] text-white rounded-xl ">
                SignUp
              </button>

              <button>
                <FiMenu size={25} />
              </button>
            </div>
          </nav>
        </header>

        {/* section 1 */}

        <section className="flex flex-col gap-5 h-[60vh]  text-center justify-center items-center p-3 py-7 "> 
          <h1 className="text-5xl p-1 font-bold">The everything app,for work</h1>

          <p className="text-xl font-semibold">
            Get everyone working in a single platform designed to manage any
            type of work
          </p>


<div className="flex flex-col items-center gap-2">

          <button className="flex items-center shadow-sm gap-2 p-3 px-10 font-bold bg-gradient-to-r  text-md from-[#4273fa] via-[#721afa] to-[#af12f0] text-white rounded-xl  ">
            Get started.its FREE <FaArrowRightLong />
          </button>
          <p className=" font-semibold text-[#7970ae]">Free Forever No Credit Card </p>
</div>
        </section> 

        {/* section 2  */}

        <section className="p-3 py-7 ">
          <h1  className=" text-center">Trusted by 3 millions+ teams</h1>
          

        </section>
      </main>
    </>
  );
};

export default App;
