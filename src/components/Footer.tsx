import ucr_leap_logo from "@/public/ucr_leap_logo.svg";
import { socials } from "@/data/footer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between bg-leap-dark-green p-8">
      <div className="flex flex-row pl-0 md:pl-8">
        <Image src={ucr_leap_logo} className="w-16" alt="UCR LEAP Logo" />
      </div>
      <div className="flex flex-row space-x-6 pr-0 md:pr-12">
        {socials.map((social, index) => (
          <Link href={social.link} key={index}>
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
