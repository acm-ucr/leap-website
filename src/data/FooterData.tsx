import { Newspaper, Instagram, Mail, Linkedin } from "lucide-react";

interface social {
  link: string;
  icon: React.ReactNode;
}

export const socials: social[] = [
  {
    link: "https://docs.google.com/document/d/1quEtJKF8hjcZ77S2JVNCk2Ctr3K6JmeBMNkSkquYBsI/edit?tab=t.0",
    icon: (
      <Newspaper
        size={40}
        className="text-leap-light-green hover:text-leap-dark-green"
      />
    ),
  },
  {
    link: "https://www.instagram.com/ucrleap/",
    icon: (
      <Instagram
        size={40}
        className="text-leap-light-green hover:text-leap-dark-green"
      />
    ),
  },
  {
    link: "https://www.google.com/",
    icon: (
      <Mail
        size={40}
        className="text-leap-light-green hover:text-leap-dark-green"
      />
    ),
  },
  {
    link: "https://www.linkedin.com/",
    icon: (
      <Linkedin
        size={40}
        className="text-leap-light-green hover:text-leap-dark-green"
      />
    ),
  },
];
