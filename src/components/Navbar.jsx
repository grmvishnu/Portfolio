import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { navbar_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const handleHomeClick = () => {
    if (window.location.pathname === "/") {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
        navigate("/");
      }
    } else {
      navigate("/");
    }
    setActive("");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex flex-nowrap justify-between items-center max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleHomeClick}
        >
          <img
            src={navbar_logo}
            alt="logo"
            className="w-9 h-9 object-contain"
          />

          <p className="text-white text-[16px] xl:text-[18px] font-bold flex truncate max-w-xs">
            Guturu Rama Mohan Vishnu
          </p>
        </div>

        {/* Desktop Menu: only visible on xl (>=1280px) */}
        <ul className="list-none hidden xl:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer font-calibri`}
              onClick={() => {
                setActive(link.title);
                if (link.title === "About") {
                  handleAboutClick();
                }
              }}
            >
              {link.id === "resume" ? (
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  {link.title}
                </a>
              ) : link.id === "about" ? (
                <span className="cursor-pointer">About</span>
              ) : (
                <Link to={`/${link.id}`}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle: visible on screens below xl */}
        <div className="xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col gap-4`}
          >
            <ul className="list-none flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] font-calibri`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    if (link.id === "resume") {
                      window.open("/resume.pdf", "_blank");
                    } else if (link.id === "about") {
                      handleAboutClick();
                    } else {
                      navigate(`/${link.id}`);
                    }
                  }}
                >
                  {link.id === "resume" ? (
                    <span className="cursor-pointer">Resume</span>
                  ) : link.id === "about" ? (
                    <span className="cursor-pointer">About</span>
                  ) : (
                    <Link to={`/${link.id}`}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
