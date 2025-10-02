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
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
  },
  {
    name: "Kassem Issa",
    role: "Vice President",
    img: Kassem,
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
  },
  {
    name: "Katie Lee",
    role: "Secretary",
    img: Katie,
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
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
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
  },
  {
    name: "Vanna Tat",
    role: "Events Coordinator",
    img: Vanna,
    majorInfo: "",
    careerGoal: "",
    whyLeap: "",
  },
];
