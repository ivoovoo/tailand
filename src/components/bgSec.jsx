/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function BgSec() {
  return (
    <div className="bg_section relative !mt-0">
      <div className="bg_filter absolute inset-0 z-0"></div>

      <motion.h1
        className="uppercase text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[80px] text-white relative z-10 px-4 text-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        погружение в живописную атмосферу региона
      </motion.h1>
    </div>
  );
}

export default BgSec;
