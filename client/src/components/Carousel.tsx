import React, { useState } from "react";
// , { useRef, useState }
import { Swiper, SwiperSlide } from "swiper/react";

import { RecipeMap } from "../constants/constants";
import { RecipeCard } from "./RecipeCard";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type CarouselProps = {
  category: string;
};

const swiperStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap');

  .mySwiper { overflow: visible !important; }

  .mySwiper .swiper-button-prev,
  .mySwiper .swiper-button-next { display: none; }

  .swiper-slide { transition: transform 0.3s ease; }
  .swiper-slide:hover { transform: translateY(-4px); }
`;

export const Carousel: React.FC<CarouselProps> = ({ category }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <style>{swiperStyles}</style>
      <div className="py-6">
        {/* Header row: title left, arrows right */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3
              className="text-2xl font-semibold text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category}
            </h3>
            <div className="mt-1.5 h-[3px] w-10 bg-orange-500 rounded-full" />
          </div>

          {/* Custom arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              ref={setPrevEl}
              className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 text-gray-700 shadow-sm"
            >
              ‹
            </button>
            <button
              ref={setNextEl}
              className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 text-gray-700 shadow-sm"
            >
              ›
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          modules={[Navigation]}
          navigation={{ prevEl, nextEl }}
          className="mySwiper"
          style={{ width: "100%" }}
        >
          {RecipeMap[category].map((recipe) => (
            <SwiperSlide key={recipe.name}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
