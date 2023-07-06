import Link from "next/link";
import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light border-medium text-lg">
      <div className="w-full h-full   py-4  z-0  bg-light dark:bg-dark dark:text-white
       flex items-center justify-between px-32 sm:px-4 lg:flex-col  sm:text-base ">
        <span>{new Date().getFullYear()} &copy; Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Made with&nbsp;{" "}
          <span className="mt-1">{<AiFillHeart color="red" />}</span>&nbsp;by
          &nbsp;
          <Link
            href={"https://github.com/king0203"}
            className={"underline"}
            target="_blank"
          >
            {" "}
            king
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
