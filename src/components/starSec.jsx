/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function StarSec() {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center gap-[80px] px-[20px] xl:px-0">
        <motion.div
          className="flex items-center flex-col text-center gap-[10px] lg:w-1/2 xl:w-1/3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/hotel_logo.svg" alt="Hotel Logo" />
          <img src="/Frame 66.png" alt="Frame" />
          <p className="font-montserrat text-[18px] md:text-[20px] lg:text-[26px] font-[600]">
            –это погружение в живописную атмосферу региона
          </p>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.img
                key={i}
                src="/star.svg"
                alt="star"
                className="w-5 h-5"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <p className="font-montserrat text-[18px] md:text-[20px]">
            Современный отель 4* с инфраструктурой для полноценного отдыха
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/hotel1.png" alt="Hotel Image" />
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default StarSec;
