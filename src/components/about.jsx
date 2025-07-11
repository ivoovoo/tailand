/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about bg-[#23303F] text-white max-[1440px]:relative static px-[20px] xl:px-0 overflow-hidden pb-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 md:gap-[70px] min-[1440px]:relative">
          <motion.div
            className="flex flex-col gap-8 max-w-[650px] mt-8 md:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-[30px] md:text-[55px] lg:text-[65px] "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              О компании
            </motion.h2>

            <motion.p
              className="text-[18px] md:text-[20px] lg:text-[25px] mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша команда специализируется на создании прибыльных
              инвестиционных решений в курортных локациях — от элитных вилл до
              современных апартаментов с высоким доходом от аренды. Мы не просто
              продаем недвижимость — мы создаем активы, которые приносят
              стабильный доход и растущую капитализацию. Курорты – это место,
              где инвестиции обретают особый смысл.
            </motion.p>

            <div className="h-[148px] hidden lg:block"></div>
          </motion.div>

          <div className="flex flex-col w-full">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/about1.png" className="mt-[70px]" />
            </motion.div>
            {/* <motion.p
              className="text-[18px] md:text-[20px] lg:text-[25px] mt-2 w-[full]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Покупка инвестиционной недвижимости здесь – это:
            </motion.p> */}
          </div>

          {/* <motion.img
            src="/about2.png"
            className="absolute md:top-[-40px] bottom-[280px] z-[1] right-0 w-[150px] md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          /> */}
        </div>
         <motion.p
              className="text-[20px] md:text-[20px] lg:text-[25px] mt-3 w-[full]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Покупка инвестиционной недвижимости здесь – это:
            </motion.p>
        <ul className="flex w-full gap-6 pl-2 md:gap-[100px] mt-3 flex-wrap md:flex-nowrap">
          <li className="list-disc text-[20px] mt-3">
            Возможность создавать воспоминания – будь то утро с видом на горы,
            баня у реки или прогулка по осеннему лесу.
          </li>
          <li className="list-disc text-[20px] mt-1 md:mt-3">
            Ваше личное пространство для отдыха – без очередей на заселение и
            чужих правил;
          </li>
          <li className="list-disc text-[20px] mt-1 md:mt-3">
            Доходный актив, который работает на вас круглый год;{" "}
          </li>
        </ul>
      </Wrapper>
    </div>
  );
}

export default About;
