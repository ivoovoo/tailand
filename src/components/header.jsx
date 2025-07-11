/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/h4.jpg", "/h5.jpg", "/h2.jpg", "/h1.jpg", "/h3.jpg"];

function Header({ setIsModalOpen }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [delay, setDelay] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setDelay(5000);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentImage, delay]);

  return (
    <div className="header px-[20px] xl:px-0 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[currentImage]}
          className="absolute top-0    left-0 w-full h-full z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      <div className="header-black absolute top-0 left-0 w-full h-full z-[1] bg-black/40" />

      <Wrapper>
        <nav className="text-white flex items-center justify-between relative z-[2]">
          <img src="/logo.svg" className="w-[100px] py-2" />
          <a
            href="tel:+7 (980) 9999988"
            className="text-[18px] md:text-[20px] lg:text-[25px]"
          >
            7 (980) 9999988
          </a>
        </nav>

        <motion.header
          className="text-white relative z-[2]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[80px] font-[400] tracking-[0.6px] pt-[80px] uppercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="lg:pl-[88px]"></span>
            Девелопмент курортной недвижимости в красивейших уголках планеты
          </motion.h1>

          {/* <motion.p
            className="text-[18px] md:text-[20px] lg:text-[25px] font-medium pt-[30px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Уникальные предложения в лучших районах. Персональный подход и
            конфиденциальность.
          </motion.p> */}

          <motion.button
            className="w-full md:w-[349px] h-[65px] gold_button mt-[77px] mb-[100px] md:mb-[200px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            onClick={() => setIsModalOpen(true)}
          >
            Заказать консультацию
          </motion.button>
        </motion.header>
      </Wrapper>
    </div>
  );
}

export default Header;
