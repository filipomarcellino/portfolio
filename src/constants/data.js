import { LocaleRouteMatcher } from "next/dist/server/future/route-matchers/locale-route-matcher";

export const BIO_INFO = {
  name: "Filipo Marcellino",
  about: "software systems @ SFU || CS TA @ Langara",
  location: "Vancouver, BC, Canada",
  contact: {
    email: "fmarcellino7@gmail.com",
    github: "github.com/filipomarcellino",
    linkedin: "linkedin.com/in/filipomarcellino",
    instagram: "www.instagram.com/filipomarcellino"
  },
  hobbies: [
    "soccer || futsal",
    "gym",
    "volleyball",
    "badminton",
    "table tennis"
  ],
  interests: ["anime", "movies"]
};

export const PROJECTS = [
  {
    name: "SFU reddit clone",
    subHeader: "web application",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    stack: ["Typescript", "Next.js", "Firebase", "Recoil", "Chakra UI"],
    imageURL: "/sfure.png",
    links: {
      github: "https://github.com/filipomarcellino/sfure",
      link: "https://sfure.vercel.app"
    }
  },
  {
    name: "Pikko",
    subHeader: "web application",
    description: "",
    stack: [
      "Firestore",
      "Vision API",
      "Firebase Functions",
      "flutter",
      "dart",
      "Voiceflow"
    ],
    links: {
      github: "https://github.com/dchen150/recipe-suggester",
      linkify: "https://devpost.com/software/wish-a-dish-m9eshg",
      youtube: "https://www.youtube.com/watch?v=Eo_uqGk7HHk"
    }
  }
];
