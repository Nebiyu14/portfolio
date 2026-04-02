import { FaApple } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { SiNetflix } from "react-icons/si";
import { MdShoppingCartCheckout } from "react-icons/md";

export const projectData = [
  {
    title: "Apple Homepage Clone",
    type: "Frontend Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A responsive clone of Apple's homepage replicating its clean design, modern UI structure, and precise styling.",
    demo: "https://",
    github: "https://",
    icon: FaApple,
    iconBg: "#1c1c1e",
    iconColor: "#ffffff",
  },
  {
    title: "ClickCart E-Commerce",
    type: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express", "Firebase", "Stripe"],
    description: "Full-stack e-commerce platform with authentication, cart management, and secure Stripe payments with Firestore storage.",
    demo: "https://",
    github: "https://",
    icon: BsCartCheckFill,
    iconBg: "#0f2744",
    iconColor: "#3b82f6",
  },
  {
    title: "Netflix Clone",
    type: "Frontend Web Application",
    tech: ["React", "Firebase", "TMDB API", "CSS"],
    description: "Netflix-inspired app with Firebase authentication, protected routes, and real-time movie data from the TMDB API.",
    demo: "https://",
    github: "https://",
    icon: SiNetflix,
    iconBg: "#1a0000",
    iconColor: "#e50914",
  },
  {
    title: "ShopFlow E-Commerce",
    type: "Full-Stack Web Application",
    tech: ["React", "Node.js", "Express", "Stripe", "Context API"],
    description: "Full-stack e-commerce app with secure Stripe PaymentIntent, cart management, and scalable frontend/backend architecture.",
    demo: "https://",
    github: "https://",
    icon: MdShoppingCartCheckout,
    iconBg: "#0d2218",
    iconColor: "#22c55e",
  },
];