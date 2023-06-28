import { SiJavascript, SiCss3, SiHtml5, SiMongodb, SiPython, SiReact, SiGithub, SiGooglecloud, SiLinux, SiNetlify, SiTypescript, SiUbuntu, SiVercel, SiCplusplus, SiExpress, SiTailwindcss, SiPostman, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const data = [
  {
    name: 'JavaScript',
    icon: SiJavascript,
    options: {
      color: 'yellow'
    }
  },
  {
    name: 'CSS3',
    icon: SiCss3,
    options: {
      color: '#1572B6',
    }
  },
  {
    name: 'HTML5',
    icon: SiHtml5,
    options: {
      color: '#E34F26'
    }
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    options: {
      color: '#47A248'
    }
  },
  {
    name: 'NodeJS',
    icon: FaNodeJs,
    options: {
      color: '#339933'
    }
  },
  {
    name: 'Python',
    icon: SiPython,
    options: {
      color: '#3776AB'
    }
  },
  {
    name: 'React',
    icon: SiReact,
    options: {
      color: '#61DAFB'
    }
  },
 
  {
    name: 'GitHub',
    icon: SiGithub,
    options: {
      color: 'black'
    }
  },

  {
    name: 'Linux',
    icon: SiLinux,
    options: {
      color: 'black'
    }
  },
  {
    name: 'NextJs',
    icon: SiNextdotjs,
    options: {
      color: 'black'
    }
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    options: {
      color: '#3178C6'
    }
  },
  {
    name: 'Ubuntu',
    icon: SiUbuntu,
    options: {
      color: '#E95420'
    }
  },
  {
    name: 'C++',
    icon: SiCplusplus,
    options: {
      color: '#00599C'
    }
  },
  {
    name: 'Google Cloud Platform',
    icon: SiGooglecloud,
    options: {
      color: '#4285F4'
    }
  },
  {
    name: 'Express',
    icon: SiExpress,
    options: {
      color: 'black'
    }
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    options: {
      color: '#06B6D4'
    }
  },
  {
    name: 'Postman',
    icon: SiPostman,
    options: {
      color: '#FF6C37'
    }
  },
  
];

export const Icons = data.sort((a, b) => a.name.localeCompare(b.name));
