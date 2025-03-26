import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full bg-white object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <ul className="mt-2 text-secondary text-[14px] list-disc pl-5">
            {description.split("<br />").map((point, idx) => (
              <li key={idx}>{point.trim()}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`px-3 py-1 text-xs font-medium rounded-full ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Proof that I can google error messages like a pro
        </p>
        <h2 className={styles.sectionHeadText}>
          My <span className="italic">Projects</span>.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        Welcome to my projects section, where ideas meet execution, and code
        turns coffee into functionality! Each project here is a blend of
        creativity, problem - solving, and a few "why isn't this working?"
        moments. From sleek web applications to powerful backend systems, I love
        building solutions that are efficient, scalable, and user-friendly.
        You'll find applications here that leverage APIs, implement real-world
        business logic, and follow best practices in software development. Of
        course, no project is complete without its fair share of debugging
        marathons and last-minute "Eureka!" moments. But that's what makes
        coding exciting! <br />
        Feel free to explore my work below. Some projects are personal
        experiments, others are solutions to real-world problems, but all of
        them reflect my enthusiasm for building great software. Click on the
        github icon to check out the code, and maybe even get inspired!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
