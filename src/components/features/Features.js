import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Wordpress Development"
          des="Developed responsive, user-friendly websites using WordPress, specializing in SEO optimization, performance tuning, and intuitive UI/UX design for clients."
        />
        <Card
          title="Web Development"
          des="Developed dynamic, responsive websites using HTML, CSS, JavaScript, React, MongoDB, Golang, NodeJs delivering seamless user experiences with modern UI design principles."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Expert in SEO optimization, enhancing website visibility, improving rankings, driving organic traffic, and boosting online performance with strategic techniques"
          icon={<SiProgress />}
        />
        {/* <Card
          title="Mobile Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<FaMobile />}
        /> */}
        <Card
          title="UX Design"
          des="UI Designer specializing in crafting intuitive, modern website designs using Figma to deliver visually engaging, user-friendly digital experiences."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Provide reliable website hosting solutions with a focus on speed, security, and seamless performance for clients' web applications and websites"
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
