import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Kreate Technologies (2022-2022)"
            result="DELHI"
            des="Collaborated with the dynamic team at Kreate Company as a Frontend Developer intern, contributing to the
          development and enhancement of user interfaces with a focus on creating seamless and visually appealing web
          applications."
          />
          <ResumeCard
            title="Python Developer & Trainer"
            subTitle="Hackveda(2023 - 2023)"
            result="DELHI"
            des="Completed a dynamic internship at Hackveda, showcasing expertise as a Python developer. Contributed to the
 development of innovative solutions, gaining hands-on experience in creating efficient and scalable Python
 applications"
          />
          <ResumeCard
            title="COMING SOON"
            // subTitle="Nike - (2020 - 2011)"
            // result="Oman"
            // des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
