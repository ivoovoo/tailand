/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function ExtoMedical() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen w-full flex items-center justify-center text-white mt-[100px]"
        style={{ backgroundImage: "url('/exto.png')" }}
      >
        <Wrapper>
          <div className="text-center flex items-center flex-col justify-center h-full">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[80px] font-[400] uppercase tracking-[0.6px] font-inter"
            >
              ethno MEDICAL SPA 4*
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[20px] md:text-[25px] lg:text-[32px] max-w-[700px] mt-[25px] font-inter"
            >
              Курорт для тех, кто ищет не просто отдых, а возможность
              восстановить здоровье и ощутить гармонию с природой
            </motion.p>

            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-[25px] text-[18px] md:text-[20px] text-[#1E3A8A] bg-white rounded-[13px] px-[20px] py-[10px] font-inter"
            >
              В Дагестане и на северном кавказе
            </motion.span>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default ExtoMedical;
