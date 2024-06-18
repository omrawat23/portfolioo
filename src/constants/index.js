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
  {
    title: "Backend Developer",
    icon: backend,
  },
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
    title: "Web Developer",
    company_name: "Flab",
    icon: "https://flabslis.com/static/media/Flabs_Header.2418a485b6ed5e188937091d214e377a.svg",
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Collaborated with the development team to develop and debug software components, ensuring compliance with quality standards.",
      "Contributed to the development of new features and enhancements.",
      "Participated in code reviews, debugging, and troubleshooting of software issues.",
      "Performed a component library version migration, ensuring compatibility with existing software components.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Flib",
    icon: "https://media.licdn.com/dms/image/D560BAQHJF495-ne7KQ/company-logo_200_200/0/1681971867929?e=1724284800&v=beta&t=glAIMVefMytkwZB0xXs-IpZfveAFnsIce9Fr4mt_RLo",
    iconBg: "#2d9f5a",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "A responsive e-commerce store using React and Node.js, featuring Stripe integration for secure payments. The store will offer seamless navigation, a user-friendly interface, and efficient product management.The project aims to deliver a high-performance, secure, and engaging online shopping experience.",
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
        name: "redux-toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/yx2DTghC/shoe.png",
    source_code_link: "https://github.com/omrawat23/ai-shoes.git",
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
    image: "https://i.postimg.cc/RhFYqYDf/Screenshot-9.png",
    source_code_link: "https://github.com/omrawat23/blog.git",
  },
  {
    name: "Snake game",
    description:
      "A classic Snake game using React for a dynamic and interactive user experience. Key functionalities include game start/pause/reset options and increasing difficulty levels as the snake grows. The project aims to provide an engaging and nostalgic gaming experience with modern web technologies.",
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
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/QxB5Wsgr/snake.png",
    source_code_link: "https://github.com/omrawat23/snake",
  },
];

export { services, technologies, experiences, testimonials, projects };
