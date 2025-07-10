/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about bg-[#23303F] text-white max-[1440px]:relative static px-[20px] xl:px-0 overflow-hidden">
      <Wrapper>
        <div className="flex flex-col lg:flex-row lg:items-end gap-[70px] min-[1440px]:relative">
          <motion.div
            className="flex flex-col gap-8 max-w-[650px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-[30px] md:text-[55px] lg:text-[65px] pt-[100px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              О компании
            </motion.h2>

            <motion.p
              className="text-[18px] md:text-[20px] lg:text-[25px] mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Мы — команда профессионалов в сфере недвижимости, объединённая одной целью: 
              сделать покупку, продажу и аренду недвижимости максимально комфортной 
              и безопасной для наших клиентов.
            </motion.p>

            <motion.p
              className="text-[18px] md:text-[20px] lg:text-[25px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша миссия — помогать людям находить идеальные пространства для 
              жизни и работы, делая каждый этап сделки прозрачным, комфортным 
              и безопасным.
            </motion.p>

            <div className="h-[148px] hidden lg:block"></div>

            <motion.div
              className="flex lg:items-center flex-col lg:flex-row lg:gap-[100px] about_list lg:absolute lg:h-[148px] w-full lg:w-[70%] bottom-0 left-0 text-[25px] md:text-[35px] lg:text-[45px] leading-[50px] p-3 md:p-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                11+
                <br className="hidden md:block" /> лет
              </div>
              <div>
                300+ <br className="hidden md:block" /> сотрудников
              </div>
              <div>
                4.5 <br className="hidden md:block" /> млн м²
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/about1.png" />
          </motion.div>

          <motion.img
            src="/about2.png"
            className="absolute md:top-[-40px] bottom-[280px] z-[1] right-0 w-[150px] md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </Wrapper>
    </div>
  );
}

export default About;
