import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Google from "../images/Google.png";
import Facebook from "../images/facebook.png";
import Instagram from "../images/insta.png";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const CompanyScroller = () => {
  return (
    <>
      <div className="  ">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{
          650:{
              slidesPerView:3
            },

            900:{
              slidesPerView:4
            }


          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className=" flex items-center justify-center h-[100px]" // Ensure proper height
        >
          <SwiperSlide className="  ">
            <div className=" w-1/2 sm:w-2/3 mx-auto flex items-center justify-center h-full">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-full object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex items-center justify-center w-full h-full">
            <div className=" w-1/2 sm:2/3  mx-auto flex items-center justify-center h-full">
              <img
                src={Instagram}
                alt="Instagram"
                className="w-full object-contain"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className=" flex items-center justify-center w-full h-full">
            <div className=" w-1/2 sm:w-3/4 mx-auto flex items-center justify-center h-full">
              <img
                src={Google}
                alt="Instagram"
                className="w-full object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CompanyScroller;
