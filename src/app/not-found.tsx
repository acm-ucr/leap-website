import Link from "next/link";
import BackgroundImage from "@/public/assets/bg-error.webp";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src={BackgroundImage}
        alt="404"
        className="absolute -z-10 min-h-screen w-screen"
      />
      <h1 className="mb-2 text-5xl font-bold text-leap-text md:text-7xl">
        404
      </h1>
      <h3 className="mb-6 text-lg font-semibold text-leap-text md:text-2xl">
        Page Not Found
      </h3>
      <Link href="/" className="bg-leap-mid-green p-4 text-leap-text">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
