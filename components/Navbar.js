"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  TwitterIcon,
  LinkedInIcon,
  GithubIcon,
  LeetcodeIcon,
} from "@/components/Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "./useThemeSwitcher";
import { SunIcon } from "@/components/Icon";
import { MoonIcon } from "@/components/Icon";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    //we use group to target particular element from parent , means we hover parent then react
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block w-0 left-0 -bottom-0.5 bg-dark dark:bg-light absolute
      group-hover:w-full transition-width ease duration-300`}
      ></span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="text-black dark:text-white flex flex-row justify-between items-center w-full px-32 py-8 font-medium font-mont bg-light dark:bg-dark">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
      </nav>
      <nav className="flex flex-row justify-center items-center flex-wrap">
        <motion.a
          href="https://twitter.com/darshanarkhade"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com/king0203"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/darshan-arkhade-2a021324b/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://leetcode.com/king0203/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 ml-3"
        >
          <LeetcodeIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`p-1 ml-4 rounded-full
          ${mode==="light" ?  'bg-dark text-light': 'bg-light text-dark'}`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill:dark"} />
          ) : (
            <MoonIcon className={"fill:dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
