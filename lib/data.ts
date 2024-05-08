import React from "react";
import {CgWorkAlt} from "react-icons/cg";
import {LuGraduationCap} from "react-icons/lu";

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
        title: "Software Engineer at Booking.com",
        location: "Amsterdam, Netherlands (Hybrid)",
        description:
            "Booking.com is all about the journey, helping you explore new challenges in a place where you can be your best self, with plenty of exciting twists, turns, and opportunities along the way.",
        icon: React.createElement(CgWorkAlt),
        date: "Apr 2024 - present",
        achievements: [
            'Led the rewriting process of the Content Moderation internal tool, processing over 1 million daily items.',
        ]
    },
    {
        title: "Senior Software Engineer at Elsevier",
        location: "Amsterdam, Netherlands (Hybrid)",
        description:
            "Elsevier is a global leader in information and analytics. I led and finalized the React migration of Expert Lookup. I was promoted to the core product SciVal and collaborated with the Principal and Staff Engineers to design and scope the work for the Next.js migration.",
        icon: React.createElement(CgWorkAlt),
        date: "May 2022 - Apr 2024",
        achievements: [
            'Led and finalized the refactoring and sped up the development of new functionalities by 15x utilizing shared components.',
            'Introduced End-to-end Cypress tests and reduced production issues by 30%.',
            'Developed components for a shared library utilized by 10 projects within the company.',
            'Supported an old legacy Java JSP, jQuery codebase utilized by nearly 1 million users.',
        ]
    },
    {
        title: "Founder and CTO at Fish Places",
        location: "Uzhhorod, Ukraine (Remote)",
        description:
            "Fish Places is a startup, social networking app, that was created and developed by me. Its main idea is to allow fisherman to share their best locations with friends.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2020 - Jan 2024",
        achievements: [
            'Designed and led the development and implementation of the technical architecture.',
            'Ensured the security, scalability, and reliability of the technology infrastructure.'
        ]
    },
    {
        title: "Senior Software Engineer at Solargrowth",
        location: "Madrid, Spain (Remote)",
        description:
            "Solargrowth is a solar panels tech startup. I developed and launched a platform for automatic solar panel placement and installation calculations, supporting all countries with lidar building data scans. Led direct communication with a client and other stakeholders.",
        icon: React.createElement(CgWorkAlt),
        date: "Jul 2021 - May 2022",
        achievements: [
            'Designed and developed the Solargrowth project from scratch.',
            'Created a visualization tool based on Google Maps. Users could select their address and see an automated panel placement.',
            'Created a multilanguage and multiregion system that led to an 80% increase in new clients.'
        ]
    },
    {
        title: "Senior Software Engineer at Crunch",
        location: "Lviv, Ukraine (Remote)",
        description:
            "Crunch is an outsourcing company that develops software products for clients across Europe, the US, and Canada. I led the front-end rebuild for AccountFlow, a Norway-based fintech company. I developed 13 mobile applications for CampusConnect, a bespoke social networking solution for leading schools and universities.",
        icon: React.createElement(CgWorkAlt),
        date: "Nov 2019 - May 2022",
        achievements: [
            'Created a customized React Table component, reducing development time by 10x.',
            'Provided mentorship to a junior team member and contributed to his promotion to a middle-level position within 6 months.',
            'Created a Chat functionality that handles one-to-one and group chats with attachments (photos, documents).',
            'Created a Notification system utilizing Apple Push Notifications, Firebase Cloud Messaging, and email service (SendGrid).'
        ]
    },
    {
        title: "Software Engineer at SharpMinds",
        location: "Uzhhorod, Ukraine (On-site)",
        description:
            "SharpMinds is an IT company based in Amersfoort. I designed and developed GalleryViewer for a Netherland-based media company (100k monthly active users, average Google Search position 7) and GoodWeekZZP (50k monthly active users).",
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2018 - Nov 2019",
        achievements: [
            'Developed a shared React components library used across 2 projects, increasing the development speed by 2x.'
        ]
    },
    {
        title: "Software Engineer at AZinec LLC",
        location: "Uzhhorod, Ukraine (On-site)",
        description:
            "AZinec LLC is an outsourcing company that develops software products for clients all over Europe. Some of the biggest clients are Lufthansa Systems, Terracycle, and Statzup.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2017 - Feb 2018",
        achievements: [
            'Introduced React and test-driven development, achieving 85%+ code coverage.',
            'Improved the development pipeline, decreasing build time by 20x (from 30s to 1.5s).',
            'Introduced a new functionality that increased the application\'s monthly active users by 10%.'
        ]
    },
    {
        title: "Junior Software Engineer at THINKMOBILES",
        location: "Uzhhorod, Ukraine (On-site)",
        description:
            "ThinkMobiles is a leading b2b platform for 50,000+ Software products and IT development companies all over Europe.",
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2016 - Jul 2017",
        achievements: [
            'Developed new features for the Race official website (100k monthly visitors)'
        ]
    },
    {
        title: "Studied at Yaroslav Mudryi National Law University",
        location: "Kharkiv, Ukraine",
        description: "Master’s Degree, Law",
        icon: React.createElement(LuGraduationCap),
        date: "2011 - 2016",
        achievements: [],
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
    "Perl",
    "Angular.js",
    "Vue.js",
    "WebSockets",
    "RESTful API",
] as const;
