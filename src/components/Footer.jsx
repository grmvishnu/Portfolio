import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="c-space py-4 px-6 md:px-12 text-white-500 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex gap-3 text-sm text-gray-400">
        <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
        <span>|</span>
        <p className="hover:text-white cursor-pointer">Privacy Policy</p>
      </div>

      <div className="flex gap-6">
        {[
          { name: "LINKEDIN", url: "https://www.linkedin.com/in/grm-vishnu/" },
          { name: "GITHUB", url: "https://github.com/grmvishnu" },
          { name: "INSTAGRAM", url: "https://www.instagram.com/_vishhh_19_/" },
          { name: "EMAIL ME", url: "mailto:grmvishnu123@gmail.com" },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 flex items-center gap-1 text-sm hover:text-white"
          >
            <span>{item.name}</span> <ArrowUpRight size={16} />
          </motion.a>
        ))}
      </div>

      <p className="text-sm text-gray-400 text-center md:text-left">
        © 2025 Guturu Rama Mohan Vishnu. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
