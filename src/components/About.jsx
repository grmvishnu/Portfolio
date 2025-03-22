import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          About <span className="italic">me</span>.
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[40px] max-w-3xl leading-[60px] font-serif"
      >
        <p className="mb-4">Not a fan of reading bios?</p>
        <p className="mb-4">I understand, so I made it</p>
        <p className="mb-4">easier for you - No long passages,</p>
        <p className="mb-4">just the essentials!</p>
        <p className="mt-8 text-[20px] italic">(You’re welcome)</p>
        <p className="mt-8 text-[20px] font-calibri">
          Feel free to watch the video or keep scrolling to get to know me.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-40 text-white text-[45px] mac-w-3xl leaading-[60px] font-serif"
      >
        <p>
          A little bit about <span className="italic">who I am</span>
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-[35px] font-serif"
      >
        <div>
          <h3>I’m...</h3>
          <ul className="text-[20px] mt-8">
            <li className="mt-4 font-calibri">
              An{" "}
              <a
                href="https://www.enneagraminstitute.com/type-3/"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enneagram
              </a>{" "}
              3
            </li>
            <li className="mt-4 font-calibri">A Problem Solver</li>
            <li className="mt-4 font-calibri">A Results-Driven Achiever</li>
            <li className="mt-4 font-calibri">A Life-Long Learner</li>
            <li className="mt-4 font-calibri">
              A{" "}
              <a
                href="https://drive.google.com/file/d/1kULEUK2FbrNZPrGr6DwVT_9cXpTnXjpB/view?usp=sharing"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Traveller
              </a>{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3>My values</h3>
          <ul className="text-[20px] mt-8">
            <li className="mt-4 font-calibri">
              Integrity : Always honest, even when tough
            </li>
            <li className="mt-4 font-calibri">
              Gratitude : Grateful for every opportunity given
            </li>
            <li className="mt-4 font-calibri">
              Accountability : Owning my actions and outcomes
            </li>
            <li className="mt-4 font-calibri">
              Respect : Valuing others and their perspectives
            </li>
            <li className="mt-4 font-calibri">
              Excellence : Striving to be the best
            </li>
            <li className="mt-4 font-calibri">
              Growth : Constantly learning, evolving, and improving
            </li>
          </ul>
        </div>

        <div>
          <h3>When I'm not coding...</h3>
          <ul className="text-[20px] mt-8">
            <li className="mt-4 font-calibri">
              Watching{" "}
              <a
                href="https://www.royalchallengers.com/"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cricket
              </a>{" "}
              (totally productive to watch{" "}
              <a
                href="https://en.wikipedia.org/wiki/Virat_Kohli"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                him
              </a>
              )
            </li>
            <li className="mt-4 font-calibri">
              Movies & Web Series (research purposes)
            </li>
            <li className="mt-4 font-calibri">
              <a
                href="https://open.spotify.com/track/1VBvgXzwESW9V7DXXGSiwm?si=10ec505294224842"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                Music
              </a>{" "}
              (future rockstar training)
            </li>
            <li className="mt-4 font-calibri">
              Cooking (trying not to burn stuff)
            </li>
            <li className="mt-4 font-calibri">
              Watching{" "}
              <a
                href="https://en.wikipedia.org/wiki/Roman_Reigns"
                className="underline font-calibri"
                target="_blank"
                rel="noopener noreferrer"
              >
                WWE
              </a>{" "}
              (purely educational)
            </li>
            <li className="mt-4 font-calibri">
              Gym Workouts (my muscles keep begging for mercy)
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
