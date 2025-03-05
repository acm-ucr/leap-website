import ucr_leap_logo from "@/public/leapIcon.svg";
import { socials } from "@/data/FooterData";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between bg-leap-light-yellow p-8">
      <div className="flex flex-row pl-0 hover:scale-110 md:pl-8">
        <Link href="/">
          <Image src={ucr_leap_logo} className="w-16" alt="UCR LEAP Logo" />
        </Link>
      </div>
      <div className="flex flex-row space-x-6 pr-0 md:pr-12">
        {socials.map(({ link, icon }, index) => (
          <Link
            href={link}
            key={index}
            target="blank"
            className="hover:scale-110"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
