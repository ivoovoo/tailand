/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function Welness() {
  const card = [
    {
      cardTitle: "Превентивная медицина",
      cardDesc: "Диагностика, восстановление, спортивное питание",
    },
    {
      cardTitle: "активный отдых",
      cardDesc: "Горные походы, йога, тренировки",
    },
    {
      cardTitle: "wellness & spa",
      cardDesc: "Банные ритуалы, массажы, фитотерапии",
    },
    {
      cardTitle: "этнотуризм",
      cardDesc: "Мастер-классы, национальная кухня",
    },
    {
      cardTitle: "mice-туризм",
      cardDesc: "Корпоративные ретриты, спортивные сборы",
    },
  ];

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-[50px] mt-[100px] px-[20px] xl:px-0">
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-[30px] sm:text-[50px] lg:text-[60px] text-[#1E3A8A] font-[600] font-inter leading-tight"
          >
            WELNESS-КУРОРТ 4*
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] mt-[40px]">
            {card.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white flex flex-col p-[25px] rounded-[30px] sm:rounded-[40px] welness_card"
              >
                <span className="font-inter break-word uppercase text-[#1E3A8A] text-[22px] sm:text-[24px] lg:text-[28px] font-[700]">
                  {item.cardTitle}
                </span>
                <span className="font-inter text-[14px] sm:text-[16px] mt-[15px] sm:mt-[20px]">
                  {item.cardDesc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 mt-[40px] lg:mt-0"
        >
          <img
            src="/welness.png"
            className="hidden lg:block w-full h-auto object-cover"
            alt="Welness image"
          />
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default Welness;
