import ucr_leap_logo from "@/public/ucr_leap_logo.svg";
import { socials } from "@/data/FooterData";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between overflow-x-scroll bg-leap-light-yellow p-8">
      <div className="left-0 flex flex-row hover:scale-110">
        <Link href="/">
          <Image src={ucr_leap_logo} className="w-16" alt="UCR LEAP Logo" />
        </Link>
      </div>
      <div className="right-0 flex flex-row space-x-6 pl-3">
        {socials.map(({ link, icon }, index) => (
          <Link href={link} key={index} className="h-full hover:scale-110">
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
