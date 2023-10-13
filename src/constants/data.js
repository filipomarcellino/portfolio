export const BIO_INFO = {
  name: "Filipo Marcellino",
  location: "Vancouver, BC, Canada",
  contact: {
    email: "fmarcellino7@gmail.com",
    github: "github.com / filipomarcellino",
    linkedin: "linkedin.com /in/ filipomarcellino",
    instagram: "www.instagram.com / filipomarcellino"
  },
  hobbies: [
    "soccer/football",
    "powerlifting",
    "volleyball",
    "badminton",
    "table tennis",
    "snowboarding"
  ],
  interests: [
    "highly-rated anime",
    "movies with heavy plot",
    "billie eilish's voice",
    "edgy tv shows",
    "good outfits",
    "exercising in nature",
    "spontaneous late-night activites",
    "oreos",
    "jam sessions",
    "playboy carti"
  ]
};

export const EXPERIENCES = [
  {
    employer: "Aquanow",
    position: "Software Engineer Intern",
    date: "May 2023 - Current",
    accomplishments: [
      "Collaborated with a team to deliver TypeScript-driven back-end features for Aquanow’s trading platform",
      "Deployed efficient REST API endpoints to an AWS Lambda function, facilitating the streamlined creation update, and deletion of records in DynamoDB tables",
      "Pioneered back-end lambda integration testing using Cucumber, adapting Behavior-Driven Development methods that reduced bugs and increased team productivity",
      "Leveraged AJV schema for strict input validation, enhancing data integrity and error handling",
      "Delivered tailored front-end modifications, utilizing React and Material UI"
    ],
    stack: ["AWS", "Typescript", "Node.js", "Cucumber.js"],
    lightLogo: "/aquanowLight.png",
    darkLogo: "/aquanowDark.png"
  },
  {
    employer: "Langara College",
    position: "CS Teaching Assistant",
    date: "May 2022 - May 2023",
    accomplishments: [
      "Offers individualized computer science tutoring for first and second-year courses, resulting in increased understanding and success among students",
      "Collaborates with multiple instructors to provide support for computer science course materials",
      "Marks 80+ programming assignments every week and provides timely, detailed feedback to students"
    ],
    stack: ["Java", "C++", "Python", "C", "OOP", "SOLID"],
    lightLogo: "/langara.png",
    darkLogo: "/langara.png"
  }
];

export const PROJECTS = [
  {
    name: "PERMIKA association website",
    description:
      "Collaborated with a designer and another developer to build a hub for Indonesian students in Vancouver",
    stack: ["Typescript", "React.js", "Tailwind", "Figma"],
    imageURL: "/permika.png",
    links: {
      github: "https://github.com/PERMIKA-Vancouver/PERMIKA_Vancouver",
      link: "https://permikavancouver.com",
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
    name: "SFU Indonesian Association website",
    description:
      "Simon Fraser University Indonesian Association’s website acts as the information hub for Indonesian students at SFU.",
    stack: ["Next.js", "Javascript", "Bootstrap"],
    imageURL: "/sfuia.png",
    links: {
      github: "https://github.com/sfuia/sfuia-website",
      link: "https://sfuia.com"
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
  }
];
