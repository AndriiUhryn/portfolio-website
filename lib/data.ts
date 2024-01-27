import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import SciValImg from "@/public/SciVal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer at Elsevier",
    location: "Amsterdam, Netherlands",
    description:
      "Elsevier is a global leader in information and analytics. I led and finalized the React migration of Expert Lookup. I was promoted to the core product SciVal and collaborated with the Principal and Staff Engineers to design and scope the work for the Next.js migration.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SciVal",
    description:
      "I was promoted to the core product SciVal and collaborated with the Principal and Staff Engineers to design and scope the work for the Next.js migration.",
    tags: ["Java", "jQuery", "Java JSP", "MySQL", "React", "Next.js"],
    imageUrl: SciValImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Cypress",
  "Git",
  "Tailwind",
  "MaterialUI",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redux",
  "MobX",
  "GraphQL",
  "Apollo",
  "Express",
  "Meteor.js",
  "Parse SDK",
  "Framer Motion",
  "Jenkins",
  "Docker",
  "Amazon Web Services",
  "Google Cloud Platform",
  "Java",
  "Python",
  "Angular.js",
  "Vue.js",
  "WebSockets",
  "RESTful API",
] as const;
