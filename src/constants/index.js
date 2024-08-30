import {
  mobile,
  backend,
  creator,
  web,
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
  threejs,
} from "../assets";

import blog from '../assets/blo.png';
import code from '../assets/mas.png';
import shoe from '../assets/ai.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  {
    title: "Frontend Developer",
    icon: creator,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "CSR Intern",
    company_name: "CountryEdu Private Limited",
    icon: "https://cdn.sanity.io/images/c938qibx/production/b6a22626ccc31486a3d9c627a131403eac9d9ef2-200x200.jpg",
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Successfully identified and fixed website problems, including broken links, typographical errors, and formatting issues",
      "Worked as a productive team member to make company's website while also writing engaging content for various services offered by the company.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Flib",
    icon: "https://media.licdn.com/dms/image/D560BAQHJF495-ne7KQ/company-logo_200_200/0/1681971867929?e=1724284800&v=beta&t=glAIMVefMytkwZB0xXs-IpZfveAFnsIce9Fr4mt_RLo",
    iconBg: "#2d9f5a",
    date: "May 2024 - Present",
    points: [
      "Built flib’s website from scratch, focusing on user experience and responsiveness.",
      "Worked closely with the design team to translate their concepts into a functional site",
      "Integrated Firebase to streamline the orders gateway for real-time data and management.",
      "Coordinated project timelines and stakeholder communications to ensure timely delivery.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Om proved me wrong.",
  //   name: "Sanyam",
  //   designation: "CEO",
  //   company: "Flib",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Om does.",
  //   name: "Aditya",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // // {
  // //   testimonial:
  // //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  // //   name: "Lisa Wang",
  // //   designation: "CTO",
  // //   company: "456 Enterprises",
  // //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // // },
];

const projects = [
  {
    name: "E-commerce store",
    description:
      "CodeAssist is an intelligent coding assistant designed to enhance developer productivity by leveraging AI-driven insights. It connects with the Gemini model to provide solutions, recommendations, and code snippets tailored to the developer's needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: {code},
    source_code_link: "https://codeasssist.vercel.app/",
  },
  {
    name: "My blog",
    description:
      "A responsive blog page using React to provide a seamless user experience with authentication. The design focuses on clean aesthetics, intuitive navigation, and mobile compatibility. Integration with social media and subscription options will enhance user engagement. The project aims to deliver a interactive blogging environment.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: {blog},
    source_code_link: "https://guts-fx13.vercel.app/",
  },
  {
    name: "E-commerce store",
    description:
      "A responsive e-commerce store using React and Node.js, featuring Stripe integration for secure payments. The store will offer seamless navigation, a user-friendly interface, and efficient product management.The project aims to deliver an engaging online shopping experience at the comfort of your home.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: {shoe},
    source_code_link: "https://ai-shoes.vercel.app/",
  },
  
  // {
  //   name: "Unicus",
  //   description:
  //     "A basic landing page prototype integrating ai chatbot",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "redux-toolkit",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "https://i.postimg.cc/1Xz7sfB0/Screenshot-2024-06-25-232248.png",
  //   source_code_link: "https://unicuss.vercel.app/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
