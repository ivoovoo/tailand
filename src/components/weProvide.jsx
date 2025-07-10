/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function WeProvide() {
  const cards = [
    {
      cardTitle: "Технический надзор",
      cardDesc:
        "ENGINEERING SERVICES — инжиниринговая компания Казахстана, специализирующаяся на предоставлении услуг технического надзора за строительством и реконструкцией объектов различного назначения.",
      cardImg: "",
      cardBg: "#4ABDC56E",
    },
    {
      cardTitle: "БиОТ",
      cardDesc:
        "Безопасность и охрана труда включает в себя комплекс мероприятий по обеспечению безопасности на рабочих местах и соблюдению норм охраны труда",
      cardImg: "/beenhere.svg",
    },
    {
      cardTitle: "Проектирование",
      cardDesc:
        "Мы проектируем здания любой сложности, начиная от жилых домов и заканчивая крупными коммерческими и промышленными объектами",
      cardImg: "/cases.svg",
    },
    {
      cardTitle: "Финансово-технический контроль",
      cardDesc:
        "Комплекс мер по рациональному использованию средств и ресурсов при строительстве с соблюдением технических требований.",
      cardImg: "/finance.svg",
    },
    {
      cardTitle: "Техническое обследование",
      cardDesc:
        "Техническое обследование объекта — это процедура оценки его текущего состояния и определения необходимости улучшения, ремонта или реконструкции.",
      cardImg: "/settings.svg",
    },
    {
      cardTitle: "Управление проектами",
      cardDesc:
        "Управление проектами в строительстве — это комплексный процесс планирования, организации, координации и контроля всех этапов строительного проекта, от его начала до завершения.",
      cardImg: "/controll.svg",
    },
  ];

  return (
    <div className="bg-[#23303F] text-white py-20 px-[20px] xl:px-0">
      <Wrapper>
        <motion.h2
          className="text-[32px] md:text-[50px] lg:text-[65px] font-bold leading-tight mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Мы предоставляем
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 ${
                item.cardBg ? "" : "bg-[#2F3F50]"
              }`}
              style={item.cardBg ? { backgroundColor: item.cardBg } : {}}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-start gap-4 mb-4">
                {item.cardImg && (
                  <img
                    src={item.cardImg}
                    className="w-10 h-10 object-contain"
                    alt={item.cardTitle}
                  />
                )}
                <h4 className="text-[24px] font-semibold">{item.cardTitle}</h4>
              </div>
              <p className="text-[16px] leading-relaxed">{item.cardDesc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: cards.length * 0.2 }}
          viewport={{ once: true }}
        >
          <button className="w-full md:w-[285px] h-[55px] gold_button mt-[80px]">
            Оставить заявку
          </button>
        </motion.div>
      </Wrapper>
    </div>
  );
}

export default WeProvide;
