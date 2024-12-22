import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.TECH in Computer Science"
            subTitle="Bharati Vidyapeeth's College of Engineering (2020 - 2024)"
            result="8.5/10"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kamal Public School (2017 - 2020)"
            result="7.5/10"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="St. Peter School (2003 - 2017)"
            result="8.4/10"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
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
      </div> */}
    </motion.div>
  );
};

export default Education;
