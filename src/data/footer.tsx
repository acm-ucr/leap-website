import { AiFillInstagram } from "react-icons/ai";
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";

export interface social {
  link: string;
  icon: React.ReactNode;
}

export const socials: social[] = [
  {
    link: "https://www.instagram.com/ucrleap/",
    icon: (
      <AiFillInstagram className="text-5xl text-leap-light-green hover:text-leap-mid-green" />
    ),
  },
  {
    link: "https://www.google.com/",
    icon: (
      <IoMdMail className="text-5xl text-leap-light-green hover:text-leap-mid-green" />
    ),
  },
  {
    link: "https://www.linkedin.com/",
    icon: (
      <IoLogoLinkedin className="text-5xl text-leap-light-green hover:text-leap-mid-green" />
    ),
  },
];
