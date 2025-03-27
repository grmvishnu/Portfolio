import {
  toppr,
  nsha,
  trihedral,
  agile,
  angular,
  aws,
  azure,
  bitbucket,
  cicd,
  confluence,
  css,
  docker,
  dynamodb,
  expressjs,
  firebase,
  flask,
  gcp,
  github_tech,
  heroku,
  html,
  java,
  javascript,
  jira,
  junit,
  kafka,
  linux,
  mockito,
  mongodb,
  mysql,
  nodejs,
  oop,
  postman,
  python,
  reactjs,
  redux,
  scrum,
  sdlc,
  springboot,
  sql,
  swagger,
  tdd,
  trackstudio,
  typescript,
  vtscada,
  portfolio,
  budgetsurfing,
  dbms,
  greencloud,
  serverless,
  ecommerce,
  tornado_model,
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
  { name: "Java", category: "Programming Languages", icon: java },
  { name: "Python", category: "Programming Languages", icon: python },
  { name: "SQL", category: "Programming Languages", icon: sql },
  { name: "JavaScript", category: "Programming Languages", icon: javascript },
  { name: "TypeScript", category: "Programming Languages", icon: typescript },
  { name: "VTScada", category: "Programming Languages", icon: vtscada },

  { name: "Spring Boot", category: "Frameworks", icon: springboot },
  { name: "Flask", category: "Frameworks", icon: flask },
  { name: "Redux", category: "Frameworks", icon: redux },

  { name: "MySQL", category: "Databases", icon: mysql },
  { name: "MongoDB", category: "Databases", icon: mongodb },
  { name: "DynamoDB", category: "Databases", icon: dynamodb },

  { name: "React.js", category: "Web Technologies", icon: reactjs },
  { name: "Angular", category: "Web Technologies", icon: angular },
  { name: "Node.js", category: "Web Technologies", icon: nodejs },
  { name: "Express.js", category: "Web Technologies", icon: expressjs },
  { name: "HTML5", category: "Web Technologies", icon: html },
  { name: "CSS3", category: "Web Technologies", icon: css },

  { name: "AWS", category: "Cloud Technologies", icon: aws },
  { name: "GCP", category: "Cloud Technologies", icon: gcp },
  { name: "Azure", category: "Cloud Technologies", icon: azure },
  { name: "Firebase", category: "Cloud Technologies", icon: firebase },
  { name: "Docker", category: "Cloud Technologies", icon: docker },

  { name: "SDLC", category: "Development Practices", icon: sdlc },
  { name: "Agile", category: "Development Practices", icon: agile },
  { name: "Scrum", category: "Development Practices", icon: scrum },
  { name: "OOP", category: "Development Practices", icon: oop },
  { name: "TDD", category: "Development Practices", icon: tdd },

  { name: "Linux", category: "Tools", icon: linux },
  { name: "GitHub", category: "Tools", icon: github_tech },
  { name: "Bitbucket", category: "Tools", icon: bitbucket },
  { name: "JIRA", category: "Tools", icon: jira },
  { name: "Heroku", category: "Tools", icon: heroku },
  { name: "JUnit", category: "Tools", icon: junit },
  { name: "Mockito", category: "Tools", icon: mockito },
  { name: "Confluence", category: "Tools", icon: confluence },

  {
    name: "TrackStudio",
    category: "Monitoring/Integration Tools",
    icon: trackstudio,
  },
  { name: "CI/CD", category: "Monitoring/Integration Tools", icon: cicd },
  { name: "Swagger", category: "Monitoring/Integration Tools", icon: swagger },
  { name: "Kafka", category: "Monitoring/Integration Tools", icon: kafka },
  { name: "Postman", category: "Monitoring/Integration Tools", icon: postman },
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
    name: "Portfolio Website",
    description:
      "Created an immersive digital portfolio using advanced technologies like React.js, Three.js, and React Three Fiber, seamlessly integrating dynamic 3D sections. Engineered a refined, responsive interface with Tailwind CSS, enhanced by smooth cinematic animations via Framer Motion. <br /> Implemented a fully automated CI/CD pipeline with GitHub Actions, streamlining the build process and seamlessly deploying updates to AWS S3. Leveraged AWS CloudFront for secure HTTPS connections and global content delivery, ensuring optimal performance & scalability across all devices. <br /> Integrated EmailJS for seamless email communication, enabling dynamic contact form functionality without requiring a backend server, ensuring efficient and user-friendly messaging capabilities",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "EmailJS",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "CI/CD Pipeline",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/grmvishnu/Portfolio.git",
  },
  {
    name: "Budget Surfing",
    description:
      "Created a Spring Boot based application enabling domestic and international hotel bookings, along with the functionality to convert residencies into hotels. Employed clean code practices, design/architecture patterns, data structures, SOLID principles, and MVC layer distribution, adhering to test-driven development (TDD). <br /> Harnessed Code Smell Detection techniques to reduce technical debt and improve maintainability in object-oriented design (OOP). Conducted unit testing with JUnit and Mockito, achieving over 90% test coverage, and validated APIs using Postman. Tracked work items using Atlassian JIRA and collaborated on code through GitLab, ensuring efficient workflow and version control.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Mockito",
        color: "pink-text-gradient",
      },
      {
        name: "Heroku",
        color: "blue-text-gradient",
      },
      {
        name: "JUnit",
        color: "green-text-gradient",
      },
    ],
    image: budgetsurfing,
    source_code_link:
      "https://github.com/grmvishnu/Dalhousie_University_CSCI_5308_ASDC.git",
  },
  {
    name: "Distributed Relational Database Management System",
    description:
      "Devised and implemented a distributed relational database management system (RDBMS) inspired by MySQL, hosted across two GCP instances in separate availability zones, ensuring high availability and fault tolerance. <br /> Constructed essential database functionalities, including Query Processing (DDL, DML, DQL, TCL), Transaction Log Management, Reverse Engineering for data modeling, Analytics, and User Authentication. Enabled schema management with support for primary and foreign keys, table relationships, and handling data duplication. <br /> Utilized a combination of data structures for efficient in-memory operations and designed a custom file-based storage system for persistent data management. Released the system on Heroku for scalable testing and operations. Built a console-based user interface for streamlined query execution and system interaction. Executed log management and analytics to track user operations & maintain database consistency during schema modifications.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "green-text-gradient",
      },
    ],
    image: dbms,
    source_code_link:
      "https://github.com/grmvishnu/Dalhousie_University_CSCI_5408_DMWA.git",
  },
  {
    name: "E-commerce Clothing Website",
    description:
      "Established a clothing e-commerce platform that enables authenticated users to browse, purchase garments, and track order history, delivering a seamless shopping experience. Built a responsive and device-compatible user interface using ReactJS, HTML, and CSS, adhering to Web Usability Principles such as User-Centric Design and Task Flow Optimization. Leveraged Redux for efficient state management and seamless user interactions. <br /> Engineered a secure backend using MongoDB, Express.js, and NodeJS, implementing Web Security Guidelines to ensure data protection. Followed Agile principles for continuous development and deployment (CI/CD) and deployed the system on Heroku. Made low- and high-fidelity prototypes for each feature to ensure optimal task flows. Conducted performance testing to deliver a high-performing, scalable system.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Heroku",
        color: "green-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Green Cloud",
    description:
      "Established a cloud application to translate text into audio in the desired language, providing downloadable and playable audio files. Innovated the frontend in ReactJS and backend in Django. Automated deployment using AWS CloudFormation for microservice provisioning. <br /> Leveraged AWS Lambda to integrate with AWS Polly and AWS Translate for real-time text translation and audio generation, with outputs stored in user-specific S3 buckets. Secured data and APIs with a Virtual Private Cloud (VPC) and harnessed services like EC2, RDS, and S3 for hosting, storage, and database management, ensuring reliability and smooth application operation.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS Lambda",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
      {
        name: "AWS CloudFormation",
        color: "blue-text-gradient",
      },
      {
        name: "AWS VPC",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
    ],
    image: greencloud,
    source_code_link:
      "https://github.com/grmvishnu/Dalhousie_University_CSCI_5409_CC.git",
  },
  {
    name: "Multi Cloud Serverless Hotel Management",
    description:
      "Synthesized a multi-cloud, serverless application for hotel reservations and custom tour packages, leveraging AWS and GCP to ensure high availability and scalability. Composed a microservices-based backend using AWS Lambda, GCP Cloud Functions, and containerized services with Docker. Used AWS Cognito for authentication and GCP Firestore for user data storage and validation, securing data with Caesar Cipher encryption. <br /> Integrated a chatbot using AWS Lex and a message-passing system with GCP Pub/Sub. Deployed Machine Learning models via Google Cloud Vertex AI for service automation. Generated reports and visualized data using Google Data Studio. Hosted the application on GCP using Cloud Run and GCP Registry for streamlined operations.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "GCP",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
    ],
    image: serverless,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tornado Prediction Model",
    description:
      "Crafted a predictive model to estimate tornado features, including latitude, longitude, length, width, magnitude, and associated damage costs. Formed a Neural Network to uncover relationships between tornado features and their locations. <br /> Applied ensemble modeling techniques using Linear Regression, Decision Tree, Random Forest, and Logistic Regression. Tuned models to achieve an accuracy of 72%, demonstrating robust predictions and reliable feature mapping.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Neural Networks",
        color: "pink-text-gradient",
      },
      {
        name: "Data Science",
        color: "blue-text-gradient",
      },
    ],
    image: tornado_model,
    source_code_link: "https://github.com/",
  },
];

export { schools, technologies, experiences, testimonials, projects };
