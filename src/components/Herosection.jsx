import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import heroimage1 from "../assets/img/heroimage1.png";
import heroimage2 from "../assets/img/heroimage2.png";
import heroimage3 from "../assets/img/heroimage3.avif";
import heroimage4 from "../assets/img/heroimage4.avif";
import heroimage7 from "../assets/img/heroimage7.png";
import Button from "./Button";

const images = [heroimage1, heroimage2, heroimage3, heroimage4, heroimage7];

const Herosection = () => {
  return (
    <div className="relative w-full">
      {/* Static Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black opacity-70 text-lg font-bold z-10 px-4">
        <div className="w-4/5 lg:w-[800px] text-center">
          <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight font-poppins">
            Welcome to Eventure Hall
          </h1>

          {/* Mobile Shorter Text */}
          <p className="text-[16px] sm:text-lg lg:text-2xl font-light leading-9 sm:leading-7 lg:leading-10 font-plus-jakarta-sans mb-4 sm:mb-6 lg:mb-10 sm:hidden ">
            The perfect venue for any event, offering modern amenities &
            top-notch service.
          </p>

          {/* Desktop Full Text */}
          <p className="hidden sm:block text-[18px] lg:text-2xl font-light leading-7 lg:leading-10 font-poppins mb-6 lg:mb-10">
            Discover the perfect venue for your next event. Our event center
            offers versatile spaces, modern amenities, and exceptional service
            to make your occasion unforgettable. Whether it’s a wedding,
            corporate meeting, or birthday bash, we have the ideal setting for
            you.
          </p>

          {/* Buttons */}
          <div className="flex justify-center mt-4 sm:mt-8 ">
            {/* Mobile: "Book for an Event" button */}
            <Button className="bg-[#5833F1] hover:bg-sky-700 w-[190px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-plus-jakarta-sans sm:hidden text-[20px]">
              Book for an Event
            </Button>

            {/* Desktop: "View Gallery" & "Contact Us" buttons */}
            <div className="hidden sm:flex gap-6">
              <Button className="bg-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                View Gallery
              </Button>
              <Button className="border border-[#5833F1] hover:bg-sky-700 w-[150px] h-[50px] text-white px-4 py-2 rounded-lg transition cursor-pointer font-light font-poppins">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper for Images Only */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] sm:h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
