/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function Uchastok() {
  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row justify-between mt-[60px] lg:mt-[100px] gap-[40px] lg:gap-[60px] px-[20px] xl:px-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-[30px] sm:text-[48px] lg:text-[60px] font-inter font-[500] leading-tight">
            Участок 52 га
          </h2>

          <div className="flex flex-col gap-[20px] mt-[30px]">
            {[
              {
                title: "Категория земель",
                desc: "Земли населенных пунктов",
              },
              {
                title: "Территориальная зона",
                desc: "Сельскохозяйственное использование СХ1",
              },
              {
                title: "Вид разрешенного использования",
                desc: "Сельскохозяйственное производство",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="font-inter font-[400] text-[14px] text-gray-500">
                  {item.title}
                </p>
                <p className="font-inter font-[400] text-[20px] sm:text-[22px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#1E3A8A] mt-[40px] sm:mt-[50px] lg:mt-[60px] p-[25px] sm:p-[30px] rounded-[20px] sm:rounded-[30px] text-white font-inter max-w-full sm:max-w-[500px]"
          >
            <h3 className="text-[20px] sm:text-[25px] font-[600] mb-[20px] font-inter">
              ВОЗМОЖНЫЕ ВАРИАНТЫ ВРИ
            </h3>

            <div className="flex flex-col gap-[20px]">
              {[
                {
                  title: "4.7 – ГОСТИНИЧНОЕ ОБСЛУЖИВАНИЕ",
                  desc: "Для полноценного курортного комплекса",
                },
                {
                  title: "5.0 – РЕКРЕАЦИЯ",
                  desc: "Для глэмпинга, эко-отдыха, баз отдыха",
                },
                {
                  title: "5.2.1 – ТУРИСТИЧЕСКОЕ ОБСЛУЖИВАНИЕ",
                  desc: "Для смешанных форматов: гостиницы, санатории, SPA",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-[10px]"
                >
                  <img
                    src="/check.svg"
                    alt="check"
                    className="min-w-[20px] mt-[4px]"
                  />
                  <div>
                    <span className="text-[14px] font-[600] leading-[22px] block font-inter">
                      {item.title}
                    </span>
                    <span className="text-[14px] font-[400] font-inter">
                      {item.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <img
            src="/uchastok.png"
            alt="Uchastok"
            className="w-full h-auto max-w-[600px] object-contain"
          />
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default Uchastok;
