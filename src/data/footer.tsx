import { Instagram, Mail, Linkedin } from "lucide-react";

export interface social {
  link: string;
  icon: React.ReactNode;
}

export const socials: social[] = [
  {
    link: "https://www.instagram.com/ucrleap/",
    icon: (
      <Instagram
        size={40}
        className="text-leap-light-green hover:text-leap-mid-green"
      />
    ),
  },
  {
    link: "https://www.google.com/",
    icon: (
      <Mail
        size={40}
        className="text-leap-light-green hover:text-leap-mid-green"
      />
    ),
  },
  {
    link: "https://www.linkedin.com/",
    icon: (
      <Linkedin
        size={40}
        className="text-leap-light-green hover:text-leap-mid-green"
      />
    ),
  },
];
