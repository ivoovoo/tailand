/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Wrapper from "../layout/wrapper";

function ImplementedProjects() {
  const projectCard = [
    {
      cityName: "КАЗАХСТАН",
      hotel: "HILTON",
      year: "2019-2020",
      pic: "/project1.jpg",
    },
    {
      cityName: "КАЗАХСТАН",
      hotel: "HAMPTON BY HILTON",
      year: "2019-2020",
      pic: "/project2.jpg",
    },
    {
      cityName: "КАЗАХСТАН",
      hotel: "AKTAU RIVIERA",
      year: "2021-2023",
      pic: "/project3.jpg",
    },
    {
      cityName: "КАЗАХСТАН",
      hotel: "OI-QARAGAI",
      year: "2024-2025",
      pic: "/project4.jpg",
    },
  ];

  return (
    <Wrapper>
      <motion.h1
        className="text-[30px] md:text-[55px] lg:leading-[60px] lg:text-[65px] text-center py-[100px] capitalize"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        реализованные <br /> проекты
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 pb-20">
        {projectCard.map((project, index) => (
          <motion.div
            key={index}
            className="relative h-[250px] bg-cover bg-center overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${project.pic})` }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h5 className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-[20px] md:text-[25px] font-[400] tracking-wider uppercase drop-shadow">
              {project.cityName}
            </h5>

            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[30px] md:text-[40px] lg:text-[50px] font-[400] w-full text-center drop-shadow-lg">
              {project.hotel}
            </h4>

            <h3 className="absolute bottom-5 right-5 text-white text-[20px] md:text-[25px] font-[400] drop-shadow-md">
              {project.year}
            </h3>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
}

export default ImplementedProjects;
