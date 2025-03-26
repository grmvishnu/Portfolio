import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { schools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaUniversity, FaBook, FaTrophy, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";
import GraduationPic from "../assets/graduation-pic.jpeg";

const SchoolCard = ({
  index,
  name,
  degree,
  field,
  duration,
  location,
  cgpa,
}) => (
  <Tilt className="xs:w-full w-full h-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 flex flex-col justify-between h-full"
      >
        <h3 className="text-white text-[22px] font-bold mb-4 flex items-center justify-center">
          <FaUniversity className="mr-2" />
          {name}
        </h3>

        <div className="grid grid-cols-1 gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <PiCertificateFill className="mr-2 text-white" />
              <h3 className="text-white text-[18px] font-medium">Degree:</h3>
            </div>
            <p className="text-gray-300 text-[18px]">{degree}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaBook className="mr-2 text-white" />
              <h3 className="text-white text-[18px] font-medium">Field:</h3>
            </div>
            <p className="text-gray-300 text-[18px]">{field}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaLocationDot className="mr-2 text-white" />
              <h3 className="text-white text-[18px] font-medium">Location:</h3>
            </div>
            <p className="text-gray-300 text-[18px]">{location}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-white" />
              <h3 className="text-white text-[18px] font-medium">Duration:</h3>
            </div>
            <p className="text-gray-300 text-[18px]">{duration}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaTrophy className="mr-2 text-white" />
              <h3 className="text-white text-[18px] font-medium">CGPA:</h3>
            </div>
            <p className="text-gray-300 text-[18px]">{cgpa}</p>
          </div>
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Education = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Mentored by legends - yes, I was that lucky
          </p>
          <h2 className={styles.sectionHeadText}>
            My <span className="italic">Education</span>.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here's a glimpse of my academic journey so far. I've been fortunate to
          study at some of the best institutions in the world. I've had the
          privilege of learning from some of the finest minds in the industry. I
          am grateful for the opportunities that have come my way.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-10">
          {schools.map((school, index) => (
            <div key={school.name} className="w-full">
              <SchoolCard index={index} {...school} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative lg:right-[-50px]">
        <motion.img
          src={GraduationPic}
          alt="Graduation"
          className="w-full lg:w-[80%] rounded-[20px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
