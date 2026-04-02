import {
  SiJavascript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiStripe,
  SiGithub,
  SiPostman,
  SiVercel,
  SiVite,
  SiRender,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React",       icon: SiReact,     color: "#61DAFB" },
      { name: "HTML5",       icon: SiHtml5,     color: "#E34F26" },
      { name: "CSS3",        icon: SiCss,       color: "#1572B6" },
      { name: "Material UI", icon: SiMui,       color: "#007FFF" },
      { name: "Bootstrap",   icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js",   icon: SiNodedotjs, color: "#339933" },
      { name: "Express",   icon: SiExpress,   color: "#888888" },
      { name: "REST APIs", icon: TbApi,       color: "#FF6C37" },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python",            icon: SiPython,     color: "#3776AB" },
      { name: "SQL",               icon: FaDatabase,   color: "#00758F" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL",             icon: SiMysql,    color: "#4479A1" },
      { name: "Firestore (NoSQL)", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Firebase",  icon: SiFirebase, color: "#FFCA28" },
      { name: "Stripe API",icon: SiStripe,   color: "#635BFF" },
      { name: "Git/GitHub",icon: SiGithub,   color: "#f1f5f9" },
      { name: "Postman",   icon: SiPostman,  color: "#FF6C37" },
      { name: "Vercel",    icon: SiVercel,   color: "#f1f5f9" },
      { name: "Render",    icon: SiRender,   color: "#46E3B7" },
      { name: "Vite",      icon: SiVite,     color: "#646CFF" },
    ],
  },
];

export default skillsData;