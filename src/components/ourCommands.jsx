/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";



function splitRespectingParentheses(text) {
  const result = [];
  let current = "";
  let insideParens = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === "(") insideParens = true;
    if (char === ")") insideParens = false;

    if (char === "," && !insideParens) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  if (current.trim()) result.push(current.trim());

  return result;
}

export const commands = [
  {
    picture: "/logo25.jpg",
    fullName: "Давид Никурадзе",
    job: "Управляющий партнер",
    userComment: `Визионер, Главный архитектор, управляющий партнер архитектурного бюро  SPECTRUM`,
  },
  {
    picture: "/lg4.jpg",
    fullName: "Станислав Быков",
    job: "Управляющий партнер",
    userComment:
      "Визионер, Стратег Специалист курортной недвижимости (Сочи, Крым, Северный Кавказ)",
  },
  {
    picture: "/lg5.jpg",
    fullName: "Виталий Тихий",
    job: "Управляющий партнер",
    userComment:
      "Управление проектами, Стратег Специалист международной инвестиционной недвижимости",
  },
  {
    picture: "/newTeamUser3.jpeg",
    fullName: "Карижман бакиев",
    job: "Строительство и управление",
    userComment: "Генеральный Директор ТОО Engineering services",
  },
  {
    picture: "/teamUser3.jpg",
    fullName: "Тамара черных",
    job: "Гостиничный оператор",
    userComment:
      "Гостиничный оператор Директор управляющей компании UPRO GROUP",
  },
];

function OurCommands() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-[#23303F] pb-10 lg:pb-[70px] xl:pb-[100px]">
      <h1 className="text-[30px] text-white md:text-[55px] lg:leading-[60px] lg:text-[65px] text-center py-[50px] md:py-[100px]">
        Наша команда
      </h1>

      <div className="relative max-w-[1200px] 2xl:max-w-[1500px] mx-auto w-full">
        <div
          ref={prevRef}
          className="absolute max-[1350px]:hidden left-[-60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="54"
            viewBox="0 0 48 54"
            fill="none"
          >
            <path
              d="M2.5 31.3301C-0.833337 29.4056 -0.833333 24.5944 2.5 22.6699L40 1.01923C43.3333 -0.905266 47.5 1.50036 47.5 5.34937V48.6506C47.5 52.4996 43.3333 54.9053 40 52.9808L2.5 31.3301Z"
              fill="#fff"
            />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="absolute max-[1350px]:hidden right-[-60px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="54"
            viewBox="0 0 48 54"
            fill="none"
          >
            <path
              d="M45.5 22.6699C48.8333 24.5944 48.8333 29.4056 45.5 31.3301L8 52.9808C4.66666 54.9053 0.5 52.4996 0.5 48.6506V5.34936C0.5 1.50036 4.66667 -0.905262 8 1.01924L45.5 22.6699Z"
              fill="#fff"
            />
          </svg>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          slidesPerView={1.2}
          centeredSlides={true}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.1,
            },
            1280: {
              slidesPerView: 1.1,
            },
          }}
        >
          {commands.map((user, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-[50px] md:gap-[100px] justify-center text-[#23303F] py-[20px] md:py-[50px] px-[15px] md:px-[50px] lg:px-[80px]"
              >
                <div className="md:w-1/2">
                  <h3 className="text-[24px] text-white md:text-[32px] font-[500] uppercase text-center md:text-start">
                    {user.fullName}
                  </h3>
                  <img
                    src={user.picture}
                    className="mt-[25px] h-[290px] w-[225px] rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[24px] text-white md:text-[32px] font-[500]">
                    {user.job}
                  </h4>
                  <div className="mt-[40px] bg-[#fff] py-[15px] px-[25px] md:px-[35px] rounded-[20px] max-w-[630px] text-[#23303F] text-[20px] md:text-[30px] md:leading-[42px] font-[400]">
                    <p className="!font-[math]">
                  
                   {splitRespectingParentheses(user.userComment).map((part, idx, arr) => (
              <React.Fragment key={idx}>
                {part}
                {idx < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurCommands;
