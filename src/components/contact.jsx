/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function Contact({ setIsModalOpen }) {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-between mt-[80px] px-[20px] xl:px-0 text-[#23303F]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h3
            className="text-[20px] md:text-[25px] font-[500]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Связаться с нами
          </motion.h3>

          <motion.h1
            className="text-[30px] md:text-[50px] xl:text-[55px] 2xl:text-[65px] font-[400] mt-[13px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="tel:+7 (980) 9999988">
              +7 (980) 9999988
            </a>
          </motion.h1>

          <motion.div
            className="flex flex-col gap-[16px] mt-[60px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="uppercase text-[20px] md:text-[25px] font-[500]">
              адрес
            </h4>
            <span className="text-[18px] md:text-[20px] font-[500]">
              МФК Башня Меркурий
123112, 1-ый Красногвардейский проезд, д.15
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[16px] mt-[29px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="uppercase text-[20px] md:text-[25px] font-[500]">
              e-mail
            </h4>
            <a href="email:samur.group@mail.ru" className="text-[18px] md:text-[20px] font-[500]">
              samur.group@mail.ru
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col gap-[16px] mt-[29px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="uppercase text-[20px] md:text-[25px] font-[500]">
              соцсети
            </h4>
            <div className="flex items-center gap-[20px]">
              
              <img src="/websiteIcon.svg" alt="Website" />
            </div>
          </motion.div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-[349px] h-[65px] gold_button mt-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Оставить заявку
          </motion.button>
        </motion.div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="/contact.png" alt="Contact" />
        </motion.div>
      </div>
    </Wrapper>
  );
}

export default Contact;
