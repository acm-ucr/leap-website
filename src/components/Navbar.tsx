import ucr_leap_logo from "@/public/assets/ucr_leap_logo.webp";
import { navigations } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-transparent p-8">
      <div className="pl-8">
        <Image src={ucr_leap_logo} alt="leap navbar logo" className="w-16" />
      </div>
      <div className="flex flex-row gap-20 pr-12">
        {navigations.map((navigation, index) => (
          <Link href={navigation.link} key={index} className="font-leap">
            {navigation.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
