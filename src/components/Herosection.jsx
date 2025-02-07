import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import heroimage1 from "../assets/img/heroimage1.png";
import heroimage2 from "../assets/img/heroimage2.png";
import heroimage3 from "../assets/img/heroimage3.avif";
import heroimage4 from "../assets/img/heroimage4.avif";
import heroimage7 from "../assets/img/heroimage7.png";

const images = [
  {
    src: heroimage1,
    overlayText:
      "Discover the perfect venue for your next event. Our event center offers versatile spaces, modern amenities, and exceptional service to make your occasion unforgettable. Whether it’s a wedding, corporate meeting, or birthday bash, we have the ideal setting for you. ",
  },
  {
    src: heroimage2,
    overlayText:
      "Host your dream wedding in a breathtaking venue with elegant decoration.",
  },
  {
    src: heroimage3,
    overlayText:
      "Modern facilities for productive corporate meetings and conferences.",
  },
  {
    src: heroimage4,
    overlayText:
      "Celebrate your special moments in a charming and spacious setting.",
  },
  {
    src: heroimage7,
    overlayText:
      "Create unforgettable memories with our exceptional event services.",
  },
];

const Herosection = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="shadow-lg"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px]  object-cover "
              />
              <div className="absolute inset-0 flex items-center justify-center  text-white  bg-black opacity-70 text-lg font-bold">
                <div className="w-4/5  lg:w-[800px] ">
                  {index == 0 ? (
                    <h1 className="text-center  text-2xl lg:text-5xl font-bold leading-20 lg:leading-20 font-poppins">
                      welcome to Eventure Hall
                    </h1>
                  ) : (
                    ""
                  )}

                  <p className="text-[20px]  lg:text-2xl font-light text-center leading-[1.5] font-poppins">
                    {item.overlayText}
                  </p>
                  {/* <button
                    type="submit"
                    className="bg -red-500 text-white p-2 rounded-lg mt-2"
                    onClick={() => console.log("Button Clicked")}
                  >
                    <a href="https://tailwindcss.com/docs/padding">clikcj</a>
                  </button> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
