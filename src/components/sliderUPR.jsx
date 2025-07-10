import React from "react";
import Wrapper from "../layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const SliderUPR = () => {


const slides = [
    {
        image: "/sl1.png",
        title: "Riviera Sunrise Resort & SPA 5*",
        rooms: "210 номеров",
        location: "Алушта, Республика Крым",
        },
        {
        image: "/sl2.png",
        title: "Алые Паруса, 4**",
        rooms: "99 номеров",
        location: "Феодосия, Республика Крым",
        },
        {
        image: "/sl3.png",
        title: "Апарт-комплекс Alba del Mare 4*",
        rooms: "348 юнитов",
        location: "Евпатория, Республика Крым",
    },
        {
        image: "/sl4.png",
        title: "Porto Mare 4**",
        rooms: "95 номеров",
        location: "Алушта, Республика Крым",
    },
    {
        image: "/sl5.png",
        title: "Alleya Resort, 4*",
        rooms: "112 номеров",
        location: "Махачкала, Республика Крым",
    },
    {
        image: "/sl6.png",
        title: "Арт Море 5*",
        rooms: "137 номеров",
        location: "Судак, Республика Крым",
    }
]


const slides2 = [
    {
        image:"/sl7.png",
        title: "Санаторий «Елизавета — Минеральные Воды» 4*",
        rooms: "126 номеров",
        location: "Железноводск, Ставропольский край",
    },
    {
        image: "/sl8.png",
        title: "Отель Журавли, 4*",
        rooms: "90 номеров",
        location: "Джемете, Краснодарский край",
    },
    {
        image: "/sl9.png",
        title: "Gala Palmira 3*",
        rooms: "107 номеров",
        location: "Витязево, Краснодарский край",
    },
    {
        image: "/sl10.png",
        title: "Отель премиум-класса 5*",
        rooms: "100 номеров",
        location: "Курортный регион России",
    },
    {
        image: "/sl11.png",
        title: "Cipresso, 4*",
        rooms: "36 номеров",
        location: "Алушта, Республика Крым",
    }
]

  return (
    <div
      className="bg min-h-screen pt-[80px] pb-10 px-3 sm:px-6 md:px-8 lg:px-10 xl:px-0"
      style={{
        background: "url('/slbg.png') no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <Wrapper>
        <div className="title flex flex-col sm:flex-row items-start justify-between mb-8 lg:mb-0">
          <h2 className="text-xl md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold text-[#000000] font-montserrat tracking-[9%] mb-2.5 lg:mb-10 xl:mb-16 uppercase">
            Объекты в управлении{" "}
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-[26px] text-[#00000033] font-extrabold font-montserrat uppercase">
            Upro Group
          </p>
        </div>
        <Swiper  spaceBetween={30} className="mySwiper">
          <SwiperSlide>
            <div className="content grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-7 lg:gap-10 ">
              {slides.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt="sl1" className="rounded-[20px]" />
                  <h3 className="mt-5 md:mt-7 lg:mt-9 text-lg lg:text-xl 2xl:text-[22px] text-[#E8A559] font-bold font-montserrat mb-2 lg:mb-2.5 xl:mb-[15px]">
                    {item.title}
                  </h3>
                  <div className="bar">
                    <p className="py-1 lg:py-1.5 px-2 lg:px-2.5 w-max font-montserrat font-medium text-xs lg:text-sm text-[#6D6D6D] border border-solid border-[#E8A559] rounded-[18px] mb-[6px]">
                      {item.rooms}
                    </p>
                    <p className="py-1 lg:py-1.5 px-2 lg:px-2.5 w-max font-montserrat font-medium text-xs lg:text-sm text-[#6D6D6D] border border-solid border-[#E8A559] rounded-[18px]">
                      {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
              <SwiperSlide>
            <div className="content grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-7 lg:gap-10 ">
              {slides2.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt="sl1" className="rounded-[20px]" />
                  <h3 className="mt-5 md:mt-7 lg:mt-9 text-lg lg:text-xl 2xl:text-[22px] text-[#E8A559] font-bold font-montserrat mb-2 lg:mb-2.5 xl:mb-[15px]">
                    {item.title}
                  </h3>
                  <div className="bar">
                    <p className="py-1 lg:py-1.5 px-2 lg:px-2.5 w-max font-montserrat font-medium text-xs lg:text-sm text-[#6D6D6D] border border-solid border-[#E8A559] rounded-[18px] mb-[6px]">
                     {item.rooms}
                    </p>
                    <p className="py-1 lg:py-1.5 px-2 lg:px-2.5 w-max font-montserrat font-medium text-xs lg:text-sm text-[#6D6D6D] border border-solid border-[#E8A559] rounded-[18px]">
                     {item.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </div>
  );
};

export default SliderUPR;
