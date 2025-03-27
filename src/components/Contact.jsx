import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const isFormValid =
    form.name.trim() && isValidEmail(form.email) && form.message.trim();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Guturu Rama Mohan Vishnu",
          from_email: form.email,
          to_email: "grmvishnu123@gmail.com",
          message: form.message,
          reply_to: form.email,
          name: form.name,
          email: form.email,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Email sent! Thank you :)");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Wanna say "hi" or share memes or share ideas? - I'm all ears!
        </p>
        <h2 className={styles.sectionHeadText}>
          Contact <span className="italic">me</span>.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        Thanks for reaching the end of this application. If you like what you
        see, let's connect and build something together!
      </motion.p>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 2)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary font-calibri py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary font-calibri py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {!isValidEmail(form.email) && form.email.length > 0 && (
                <span className="text-red-500 text-sm mt-1">
                  Please enter a valid email address
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message*</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary font-calibri py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary ${
                !isFormValid || loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-tertiary"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 2)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
