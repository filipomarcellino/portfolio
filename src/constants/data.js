import { LocaleRouteMatcher } from "next/dist/server/future/route-matchers/locale-route-matcher";

export const BIO_INFO = {
  name: "Filipo Marcellino",
  about: "software systems @ SFU || CS TA @ Langara",
  location: "Vancouver, BC, Canada",
  contact: {
    email: "fmarcellino7@gmail.com",
    github: "github.com / filipomarcellino",
    linkedin: "linkedin.com /in/ filipomarcellino",
    instagram: "www.instagram.com / filipomarcellino"
  },
  hobbies: ["soccer", "gym", "volleyball", "badminton", "table tennis"],
  interests: ["anime", "movies"]
};

export const EXPERIENCES = [
  {
    employer: "Langara College",
    position: "CS Teaching Assistant",
    date: "May 2022 - Current",
    accomplishments: [
      "Offers individualized computer science tutoring for first and second-year courses, resulting in increased understanding and success among students",
      "Collaborates with multiple instructors to provide support for computer science course materials",
      "Marks 80+ programming assignments every week and provides timely, detailed feedback to students"
    ],
    stack: ["Java", "C++", "Python", "C", "OOP", "SOLID"],
    logo: "/langara.png"
  }
];

export const PROJECTS = [
  {
    name: "SFU reddit clone",
    description:
      "A reddit clone (recreation of the webpage reddit.com) for SFU students",
    stack: ["Typescript", "Next.js", "Firebase", "Recoil", "Chakra UI"],
    imageURL: "/sfure.png",
    links: {
      github: "https://github.com/filipomarcellino/sfure",
      link: "https://sfure.vercel.app"
    }
  },
  {
    name: "Pikko",
    description:
      "Pikko is an E-commerce web application (fullstack) that enables customers to easily purchase salad bowls using paypal or cash on delivery.",
    stack: ["Next.js", "Javascript", "MongoDB", "ReactRedux", "Tailwind"],
    imageURL: "/pikko.png",
    links: {
      github: "https://github.com/filipomarcellino/pikko",
      link: "https://pikko.vercel.app"
    }
  },
  {
    name: "Splittr",
    description:
      "Splittr is a web application that allows users to track bills and other shared expenses, paying with stripe",
    stack: ["React.js", "Node.js", "PostgreSQL", "Javascript"],
    links: {
      github: "https://github.com/filipomarcellino/splittr"
    }
  },
  {
    name: "Package Deliveries Tracker",
    description:
      "A package deliveries tracker to store packages information and show the packages based on its status (All, Overdue, Upcoming). The packages information is stored in the server and uses Spring to fetches/ updates the data. The component is separated with MVC (Model-View-Controller) architecture to ensure code is readable and understandable. Received full grade in the last iteration.",
    stack: ["Java", "Java Swing", "Spring", "GSON"],
    links: {
      github: "https://github.com/filipomarcellino/splittr"
    }
  },
  {
    name: "SFU Indonesian Association website",
    description:
      "Simon Fraser University Indonesian Association’s website acts as the information hub for Indonesian students at SFU.",
    stack: ["Next.js", "Javascript", "Bootstrap"],
    imageURL: "/sfuia.png",
    links: {
      github: "https://github.com/sfuia/sfuia-website",
      link: "https://sfuia.com"
    }
  }
];
