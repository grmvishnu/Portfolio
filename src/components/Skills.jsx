import React, { Suspense, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const groupedByCategory = technologies.reduce((acc, technology) => {
    const { category } = technology;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(technology);
    return acc;
  }, {});

  const categories = Object.keys(groupedByCategory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < categories.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
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

      <div className="flex justify-between items-center mt-6 mb-4">
        <motion.button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          whileTap={currentIndex === 0 ? {} : { scale: 0.7 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`p-2 bg-white rounded-full text-black ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= categories.length}
          whileTap={
            currentIndex + itemsPerPage >= categories.length
              ? {}
              : { scale: 0.7 }
          }
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={`p-2 bg-white rounded-full text-black ${
            currentIndex + itemsPerPage >= categories.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mx-auto max-w-screen-lg mt-8">
        {categories
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((category) => (
            <div
              key={category}
              className="w-full bg-gray-700/50 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-white text-lg font-bold mb-4 text-center">
                {category}
              </h3>
              <div className="grid gap-8 justify-center mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {groupedByCategory[category].map((technology) => (
                  <Suspense
                    key={technology.name}
                    fallback={<div>Loading...</div>}
                  >
                    <div className="flex flex-col items-center w-full h-32 transform transition duration-300 ease-in-out hover:scale-105">
                      <BallCanvas icon={technology.icon} />
                      <h3 className="mt-2 text-center text-sm font-medium text-white">
                        {technology.name}
                      </h3>
                    </div>
                  </Suspense>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
