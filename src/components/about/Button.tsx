import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <div className="flex items-center justify-center">
      {/* Temporary Link Change */}
      <Link href="https://www.google.com" passHref>
        <div
          className="rounded-lg border-4 bg-leap-mid-green px-4 py-2 text-fontFamily-leap text-white"
          style={{ borderColor: "#3E6F55AB" }}
        >
          <div className="px-8 text-center text-lg md:text-xl">
            View our
            <br />
            constitution
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Button;
