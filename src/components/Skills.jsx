import React, { Suspense, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => {
  const groupedByCategory = technologies.reduce((acc, technology) => {
    const { category } = technology;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(technology);
    return acc;
  }, {});

  const [currentCategory, setCurrentCategory] = useState(
    Object.keys(groupedByCategory)[0]
  );

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Tools mastered, skills unleashed
        </p>
        <h2 className={styles.sectionHeadText}>
          My <span className="italic">Skills</span>.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px]"
      >
        Code - crafted, tech - driven! Here's a collection of tools and
        technologies I've mastered along my journey - each skill sharpened
        through hands-on experience and a passion for building exceptional
        solutions.
      </motion.p>

      <div className="mt-8">
        <div>
          <div className="flex flex-wrap justify-center gap-5 mb-4">
            {Object.keys(groupedByCategory).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full text-base transition duration-300 ease-in-out transform hover:scale-105 ${
                  category === currentCategory
                    ? "bg-[#915EFF] text-white font-calibri animate-bounceCustom"
                    : "bg-gradient-to-r from-purple-800 to-purple-600 text-white font-calibri"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={currentCategory}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-wrap justify-center gap-10 mx-auto max-w-screen-lg mt-8"
        >
          {groupedByCategory[currentCategory].map((technology) => (
            <Suspense key={technology.name} fallback={<div>Loading...</div>}>
              <div className="flex flex-col items-center w-32 h-40 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                <BallCanvas icon={technology.icon} />
                <h3 className="mt-2 text-center text-sm font-medium text-white transition duration-300 ease-in-out transform hover:text-blue-500 font-calibri">
                  {technology.name}
                </h3>
              </div>
            </Suspense>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
