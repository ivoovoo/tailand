/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function TwoPicSec() {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row items-center justify-center w-full overflow-x-hidden mt-[80px] px-[20px] xl:px-0">
        <motion.img
          src="/onlyPic1.png"
          className="w-[900px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.img
          src="/onlyPic2.png"
          className="w-[283px] hidden md:block"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>

      <div className="px-[20px] xl:px-0">
        <motion.img
          src="/restaurant.png"
          className="mt-[40px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </div>
    </Wrapper>
  );
}

export default TwoPicSec;
