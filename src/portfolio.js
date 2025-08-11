const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/espi0054',
  title: 'CE',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Carl Espiritu',
  role: 'Front End Developer',
  description:
    "I build modern, responsive websites and apps that focus on performance, usability, and clean design. With a strong foundation in both front-end and back-end development, I create solutions that not only look great but work seamlessly. Check out my projects and let's create something amazing together!",
  resume: 'https://carl-espiritu-resume.tiiny.site',
  social: {
    linkedin: 'https://ca.linkedin.com/in/carl-espiritu',
    github: 'https://github.com/espi0054',
    medium: 'https://github.com/silly-g00s'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Movie Night',
    description:
      'A Flutter application with a swipe-based interface for selecting movies, inspired by dating app interactions. Integrates with The Movie DB API to fetch current, popular, and upcoming films. Supports real-time, two-device collaboration via a unique session code, with all preferences synchronized through the MovieNight API and with all preferences saved in a database.',
    stack: ['Flutter', 'MongoDB', 'API'],
    sourceCode: 'https://github.com/espi0054/movie_night',
  },
  {
    name: 'Giftr Project',
    description:
      'A full-stack gift list application developed with React, Node.js, and MongoDB. Enables users to add, edit, and remove gift items with associated links, with all changes persisted in real time to the database.',
    stack: ['React', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/espi0054/Giftr-React'
  },
  {
    name: 'Supply Chain Simulator',
    description:
      'A C++ program that models the supply chain with Product, Supplier, Transporter, and Retailer classes. Demonstrates OOP principles and simulates product flow from suppliers to retailers.',
    stack: ['C++', 'OOP', 'STL'],
    sourceCode: 'https://github.com/espi0054/SupplyChainSimulator'
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Flutter',
  'Swift',
  'SASS',
  'SASS',
  'Material UI',
  'Git',
  'Figma',
  'Photoshop',
  'Illustrator',
]

const contact = {
  email: 'cjespiritu802@gmail.com',
}

export { about, contact, header, projects, skills }

