import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  toppr,
  nsha,
  trihedral,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const schools = [
  {
    name: "Dalhousie University",
    degree: "Master of Applied Computer Science",
    field: "Computer Science",
    duration: "Sep 2021 - Sep 2023",
    location: "Halifax, Canada",
    cgpa: "4.13/4.30",
  },
  {
    name: "B V Raju Institute of Technology",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    duration: " Aug 2016 - Jul 2020",
    location: "Medak, India",
    cgpa: "9.12/10.00",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "VTScada by Trihedral",
    icon: trihedral,
    iconBg: "white",
    duration: "October 2023 - December 2024",
    points: [
      "Designed and implemented 6 innovative features for VTScada, the company’s flagship product, using VTScada script, C++, JavaScript, and HTML5. Resolved 20+ critical incidents and addressed 30+ customer support requests using TrackStudio, ensuring uninterrupted performance and reliability while contributing to product innovation and enhanced functionality.",
      "Debugged, troubleshot, and executed comprehensive testing for all 6 new features and 50+ bug fixes, ensuring high-quality software delivery and adherence to industry standards. Authored 10+ detailed design documents for new features, facilitating seamless implementation and alignment across cross-functional teams.",
      "Reviewed 10+ tasks for code changes from team members, improving code quality, maintaining consistency, and upholding high software development standards. Refined performance for existing modules by analyzing and resolving bottlenecks, improving system efficiency by 15%.",
      "Partnered with the R&D team to identify and prioritize feature requests, ensuring alignment with customer needs and market trends. Supported challenging customer applications by tailoring solutions to complex requirements, increasing customer satisfaction by 20%.",
    ],
  },
  {
    title: "Data Engineer / Angular Developer",
    company_name: "Nova Scotia Health Authority (Co-op)",
    icon: nsha,
    iconBg: "white",
    duration: "April 2023 - August 2023",
    points: [
      "Developed User-friendly Interfaces for 2 healthcare applications - “Surgery Scheduling Tool” and “Emergency Department Wait Times” - using Angular, HTML, and CSS, streamlining workflows across the main admin panel, clerk panel, and surgeon panel. Boosted the “ED Wait Times” site's engagement, accruing 164,000 total views (as of Aug '23) with a daily average of 1,500 views.",
      "Constructed 14 wireframes and 10 interactive UI prototypes using Figma and MockFlow to translate user requirements into functional designs, enhancing usability and navigation. Created 4 comprehensive sitemaps for applications to ensure seamless data flow and intuitive layouts.",
      "Crafted and released 2 Proof of Concepts (POCs) on Heroku for testing and demonstrations, showcasing feasibility and scalability of new features. Leveraged Angular components to integrate real-time updates and data visualization into applications.",
      "Incorporated healthcare industry regulations (HIPAA compliance) in the design and development processes, reducing data breach risks by 35%. Ensured secure data handling and optimized application performance by streamlining data retrieval workflows.",
    ],
  },
  {
    title: "Junior Product Developer",
    company_name: "Toppr",
    icon: toppr,
    iconBg: "white",
    duration: "February 2020 - July 2021",
    points: [
      "Planned and carried out 5 core features, including automated attendance recognition, performance tracking, and profit/loss reporting, following SDLC methodologies in an Agile environment. Customized user interfaces using ReactJS, improving browser memory usage and performance by up to 50%.",
      "Optimized front-end performance by incorporating React functional components, React Hooks, Redux, and efficient state management, resulting in a 40% reduction in load times. Engineered RESTful APIs with NodeJS to enhance communication between the UI and MongoDB database, increasing data retrieval speed by 50% and boosting system efficiency.",
      "Implemented CI/CD pipelines using GitHub Actions to automate testing, builds, and deployments, ensuring faster and more reliable releases. Integrated Jest tests within the pipeline to maintain over 90% test coverage and uphold high code quality. Utilized JIRA and Confluence to streamline team workflows and project management.",
    ],
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { schools, technologies, experiences, testimonials, projects };
