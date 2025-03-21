import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { schools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SchoolCard = ({
  index,
  name,
  degree,
  field,
  duration,
  location,
  cgpa,
}) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
        <h3 className="text-white text-[20px] font-bold text-center">
          {degree}
        </h3>
        <h3 className="text-white text-[20px] font-bold text-center">
          {field}
        </h3>
        <h3 className="text-white text-[20px] font-bold text-center">
          {location}
        </h3>
        <h3 className="text-white text-[20px] font-bold text-center">
          {duration}
        </h3>
        <h3 className="text-white text-[20px] font-bold text-center">{cgpa}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Mentored by legends - yes, I was that lucky!
        </p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        YET TO FILL
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {schools.map((school, index) => (
          <SchoolCard key={school.title} index={index} {...school} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
