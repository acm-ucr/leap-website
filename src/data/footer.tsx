import { Instagram, Mail, Linkedin } from "lucide-react";

interface social {
  link: string;
  icon: React.ReactNode;
}

export const socials: social[] = [
  {
    link: "https://www.instagram.com/ucrleap/",
    icon: <Instagram size={40} className="text-white hover:text-leap-yellow" />,
  },
  {
    link: "https://www.google.com/",
    icon: <Mail size={40} className="text-white hover:text-leap-yellow" />,
  },
  {
    link: "https://www.linkedin.com/",
    icon: <Linkedin size={40} className="text-white hover:text-leap-yellow" />,
  },
];
