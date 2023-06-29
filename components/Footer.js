import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light border-medium text-lg">
      <div className="w-full h-full flex justify-center  py-8 z-0  bg-light dark:bg-dark dark:text-white p-32">
        <span>{new Date().getFullYear()} &copy; Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
