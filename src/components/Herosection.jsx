import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  {
    src: "/src/assets/img/heroimage1.png",
    overlayText:
      "Discover the perfect venue for your next event. Our event center offers versatile spaces, modern amenities, and exceptional service to make your occasion unforgettable. Whether it’s a wedding, corporate meeting, or birthday bash, we have the ideal setting for you. ",
  },
  {
    src: "/src/assets/img/heroimage2.png",
    overlayText:
      "Host your dream wedding in a breathtaking venue with elegant decor.",
  },
  {
    src: "/src/assets/img/heroimage3.avif",
    overlayText:
      "Modern facilities for productive corporate meetings and conferences.",
  },
  {
    src: "/src/assets/img/heroimage4.avif",
    overlayText:
      "Celebrate your special moments in a charming and spacious setting.",
  },
  {
    src: "/src/assets/img/heroimage6.avif",
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
                className="w-full h-[500px] sm:h-[600px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center  text-white  bg-black opacity-50 text-lg font-bold">
                <div className="w-4/5  lg:w-[400]">
                  <h6 className="text-[10px] lg:text-3xl font-bold">
                    {item.overlayText}
                  </h6>
                  <button
                    type="submit"
                    className="bg-red-500 text-white p-2 rounded-lg mt-2"
                    onClick={() => console.log("Button Clicked")}
                  >
                    <a href="https://tailwindcss.com/docs/padding">clikcj</a>
                  </button>
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
