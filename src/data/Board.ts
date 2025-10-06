import Abigail from "@/public/assets/board/abigail.webp";
import Kassem from "@/public/assets/board/kassem.webp";
import Katie from "@/public/assets/board/katie.webp";
import Debdeep from "@/public/assets/board/debdeep.webp";
import Kathy from "@/public/assets/board/kathy.webp";
import Vanna from "@/public/assets/board/vanna.webp";
import { StaticImageData } from "next/image";
interface boardMembersTypes {
  name: string;
  role: string;
  img: StaticImageData;
  majorInfo: string;
  careerGoal: string;
  whyLeap: string;
}

export const boardMembers: boardMembersTypes[] = [
  {
    name: "Abigail Hinojales",
    role: "President",
    img: Abigail,
    majorInfo: "4th Year Psychology + Global and Community Health Minor",
    careerGoal: "Clinical/Community Psychologist",
    whyLeap:
      "LEAP provided me my first sense of community when starting off in college. As someone with a love for learning, I want to spend my final year at UCR spreading mental health knowledge and resources to empower every individual who comes through our doors. ",
  },
  {
    name: "Kassem Issa",
    role: "Vice President",
    img: Kassem,
    majorInfo: "4th Year Biology Major",
    careerGoal: "Physician",
    whyLeap:
      "As a student currently navigating through chronic illness through physical and emotional needs, I believe I have grown exponentially when it comes to exploring my own initiative in managing mental health as a student. I believe LEAP offers a wonderful opportunity to share my own insights and contribute amongst other like-minded individuals, as well as learn even more about other people’s journeys.",
  },
  {
    name: "Katie Lee",
    role: "Secretary",
    img: Katie,
    majorInfo: "3rd Year Psychology Major",
    careerGoal: "Clinical Psychologist",
    whyLeap:
      "As someone who was hesitant to be involved in communities in college, LEAP was the first to demonstrate how much support a community could actually provide. As such, I would like to offer others in a similar position a safe and accepting environment. By providing a sense of community to others, I hope to help them share their experiences without any fears of judgment and foster and strengthen their sense of identity.",
  },
  {
    name: "Debdeep Bandyopadhyay",
    role: "Treasurer",
    img: Debdeep,
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
  },
  {
    name: "Kathy Le",
    role: "Publicist",
    img: Kathy,
    majorInfo: "4th Year Psychology + Neuroscience Minor",
    careerGoal: "Forensic Scientist",
    whyLeap:
      "Navigating my own mental health crises made me value spaces offering honest conversations and resources where growth feels attainable & inclusive. With LEAP!'s emphasis on identity, I hope to contribute to a community that helps others navigate their wellbeing intentionally and personally.",
  },
  {
    name: "Vanna Tat",
    role: "Events Coordinator",
    img: Vanna,
    majorInfo:
      "4th Year, Sociology Major & Organizational Behavior/Human Resources Minor",
    careerGoal:
      "Human Resource Management within a hospital, in relation to ethics.",
    whyLeap:
      "I found a little safe space on campus where light and deep conversations about mental health have drawn attention to my own. LEAP! has shown me that we don’t need a lot to take care of our mental health and that it's not a burden. Even as just an ounce of empowerment and confidence in one’s cultural identity or personal well-being, I wish to provide a sense of community as well as help those who may feel lost on their journey.",
  },
];
