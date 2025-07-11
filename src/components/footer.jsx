/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function Footer() {
  return (
    <div className="bg-[#23303F] mt-[120px] pt-[80px] pb-[65px] px-[20px] xl:px-0">
      <Wrapper>
        <motion.div
          className="text-white flex flex-col md:flex-row items-end justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <motion.img
              src="/logo.svg"
              alt="Logo"
              className="w-[150px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            />

            <motion.div
              className="flex flex-col md:flex-row items-end justify-between md:w-[77%]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[20px] md:text-[25px] md:max-w-[507px] py-8 md:py-0">
                Мы создаем прибыльные инвестиционные решения в курортных локациях — от элитных вилл до современных апартаментов с высоким доходом от аренды. Мы не просто продаем недвижимость — мы создаем активы, которые приносят стабильный доход и растущую капитализацию.
              </span>

              <span className="text-[20px] md:text-[25px] mt-4 md:mt-0">
                © 2025 samur group
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
}

export default Footer;
