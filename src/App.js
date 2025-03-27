import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  About,
  Education,
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  Projects,
  StarsCanvas,
} from "./components";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary min-h-screen md:mt-0 mt-[40px]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <About />
                </div>
              </>
            }
          />
          <Route
            path="/education"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Education />
              </div>
            }
          />
          <Route
            path="/experience"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Experience />
              </div>
            }
          />
          <Route
            path="/skills"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Skills />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Projects />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
