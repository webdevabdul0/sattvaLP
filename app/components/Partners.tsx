"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const partnerImages = Array.from(
  { length: 8 },
  (_, i) => `/images/partners/partner (${i + 1}).png`
);

const Partners = () => {
  return (
    <div className="bg-dark py-10 md:py-20 relative">
      <div className=" mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
        <h2 className="text-3xl text-primary font-mono mb-8 md:mb-16 text-center md:text-start">
          Akik minket választottak
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={8}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
            1580: { slidesPerView: 8 },
          }}
          loop={true}
          autoplay={{ delay: 2000 }}
          navigation={{
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
          }}
          className="w-full"
        >
          {partnerImages.map((image, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="h-24 md:h-30 lg:h-36 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="z-20 hidden sm:block partners-prev absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-primary/50 rounded-full hover:bg-primary/70">
          <ChevronLeft size={24} />
        </button>
        <button className="z-20 partners-next hidden sm:block absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 bg-primary/50 rounded-full hover:bg-primary/70">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Partners;
