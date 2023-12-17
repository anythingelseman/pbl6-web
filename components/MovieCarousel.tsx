"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Navigation, Autoplay } from "swiper/modules";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import Image from "next/image";
function App() {
  const slides = [
    {
      url: "/images/oppenheimer.jpg",
    },
    {
      url: "/images/barbie2.avif",
    },
    {
      url: "/images/marvel.jpg",
    },
    {
      url: "/images/lovereset.webp",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "200px",
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="bg-white h-[420px]">
      <Slider {...settings}>
        <div style={{ width: 880 }}>
          <img
            src={slides[0].url}
            className="px-6 w-full h-full object-cover max-h-[400px]"
          />
        </div>
        <div style={{ width: 880 }}>
          <img
            src={slides[1].url}
            className="px-6 w-full h-full object-cover max-h-[400px]"
          />
        </div>
        <div style={{ width: 880 }}>
          <img
            src={slides[2].url}
            className="px-6 w-full h-full object-cover max-h-[400px]"
          />
        </div>
        <div style={{ width: 880 }}>
          <img
            src={slides[3].url}
            className="px-6 w-full h-full object-cover max-h-[400px]"
          />
        </div>
      </Slider>
    </div>
  );
}
export default App;

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return <RiArrowLeftCircleFill className="text-4xl z-[10000] text-black" />;
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} text-3xl text-black bg-black`}
      style={{ left: 0, zIndex: 1000 }}
      onClick={onClick}
    >
      <RiArrowRightCircleFill className="text-4xl z-[10000] text-black" />
    </button>
  );
};
