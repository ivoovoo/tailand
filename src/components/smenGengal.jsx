/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function SmenGengal() {
  return (
    <Wrapper>
      <div className="px-[20px] xl:px-0">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="font-inter text-[30px] md:text-[35px] lg:text-[48px] text-[#1E3A8A] mt-[80px]"
        >
          СХЕМА ГЕНПЛАНА
        </motion.h2>

        <motion.img
          src="/smenGengal.png"
          alt="Схема генплана"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-[20px] w-full h-auto object-contain"
        />
      </div>
    </Wrapper>
  );
}

export default SmenGengal;
