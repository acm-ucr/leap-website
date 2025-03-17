import { Newspaper, Instagram, Mail } from "lucide-react";
import { SiLinktree } from "react-icons/si";

interface social {
  link: string;
  icon: React.ReactNode;
}

export const socials: social[] = [
  {
    link: "https://www.instagram.com/ucrleap/",
    icon: (
      <Instagram className="h-8 w-8 text-leap-light-green hover:text-leap-dark-green sm:h-10 sm:w-10" />
    ),
  },
  {
    link: "mailto:lovingouremotions@gmail.com",
    icon: (
      <Mail className="h-8 w-8 text-leap-light-green hover:text-leap-dark-green sm:h-10 sm:w-10" />
    ),
  },
  {
    link: "https://linktr.ee/ucrleap",
    icon: (
      <SiLinktree className="h-8 w-8 text-leap-light-green hover:text-leap-dark-green sm:h-10 sm:w-10" />
    ),
  },
  {
    link: "https://docs.google.com/document/d/1quEtJKF8hjcZ77S2JVNCk2Ctr3K6JmeBMNkSkquYBsI/edit?tab=t.0",
    icon: (
      <Newspaper className="h-8 w-8 text-leap-light-green hover:text-leap-dark-green sm:h-10 sm:w-10" />
    ),
  },
];
