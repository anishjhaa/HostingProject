// import React from "react";
// import Title from "../layouts/Title";
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
// import ProjectsCard from "./ProjectsCard";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title
//           title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//         <ProjectsCard
//           title="Fitness Point"
//           des=" I built a fitness website using HTML, CSS, JavaScript, and React, creating a responsive and dynamic platform. The site offers a seamless user experience with innovative design elements and smooth functionality, providing users with an engaging and interactive online experience tailored to fitness enthusiasts."
//           src={projectOne}
//         />
//         <ProjectsCard
//           title="Book Store Website"
//           des=" Specializing in building dynamic, responsive Book Store websites using MERN Stack for delivering seamless shopping experiences with modern design, smooth navigation, and high performance to drive business success"
//           src={projectTwo}
//         />
//         <ProjectsCard
//           title="Chatting App"
//           des=" COMING SOON"
//           src={projectThree}
//         />
//         {/* <ProjectsCard
//           title="SOCIAL MEDIA CLONE"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         /> */}
//         {/* <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectOne}
//         /> */}
//         {/* <ProjectsCard
//           title="Chatting App"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//         /> */}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Fitness Point"
          des=" I built a fitness website using HTML, CSS, JavaScript, and React, creating a responsive and dynamic platform. The site offers a seamless user experience with innovative design elements and smooth functionality, providing users with an engaging and interactive online experience tailored to fitness enthusiasts."
          src={projectOne}
          link="https://fitnesspointt.netlify.app/" // Add link here for Fitness Point
        />
        <ProjectsCard
          title="Book Store Website"
          des=" Specializing in building dynamic, responsive Book Store websites using MERN Stack for delivering seamless shopping experiences with modern design, smooth navigation, and high performance to drive business success"
          src={projectTwo}
          link="https://bookztron-dev-branch.netlify.app/" // Add link here for Fitness Point
        />
        <ProjectsCard
          title="Chatting App"
          des=" COMING SOON"
          src={projectThree}
        />
      </div>
    </section>
  );
};

export default Projects;
