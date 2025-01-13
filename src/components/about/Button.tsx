import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="flex justify-center items-center">
                {/* Temporary Link Change */}
      <Link href="https://www.google.com" passHref>
        <div className="bg-leap-mid-green text-white py-2 px-4 rounded-lg border-4 text-fontFamily-leap" style={{ borderColor: "#3E6F55AB" }}>
          <div className="text-center text-lg md:text-xl px-8">
            View Our
            <br />
            Constitution
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Button;