"use client";
import React, { useState } from "react";
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
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation'

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    //we use group to target particular element from parent , means we hover parent then react
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-0.5 inline-block w-0 left-0 -bottom-0.5 bg-dark dark:bg-light absolute
      group-hover:w-full transition-width ease duration-300 ${
        pathname === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  const router= useRouter();

  const handleClick=()=>{
    router.push(href)
  }
  return (
    //we use group to target particular element from parent , means we hover parent then react

    <button href={href} className={`${className} relative group text-light dark:text-dark my-2` } onClick={handleClick}>
      {title}
      <span
        className={`h-0.5 inline-block w-0 left-0 -bottom-0.5 bg-light dark:bg-dark absolute
      group-hover:w-full transition-width ease duration-300 ${
        pathname === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-black relative dark:text-white flex flex-row justify-between items-center 
    w-full px-32 py-8 font-medium font-mont bg-light dark:bg-dark
    z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" hidden lg:flex flex-col  justify-center gap-0.5  items-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6  rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-0.5"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6  rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6  rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5 " : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
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
            className={`ml-4 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill:dark"} />
            ) : (
              <MoonIcon className={"fill:dark"} />
            )}
          </button>
        </nav>
      </div>

      {
        isOpen ?
        <motion.div 
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className="bg-dark/90 dark:bg-light/75 backdrop-blur-md py-36 rounded-2xl
      min-w-[70vw] sm:min-w-[90vw] z-20 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 
      -translate-y-1/2 ">
        <nav className="flex flex-col justify-center items-center">
          <CustomMobileLink href="/" title="Home" className=""  />
          <CustomMobileLink href="/about" title="About" className=""  />
          <CustomMobileLink href="/projects" title="Projects" className="" />
          {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
        </nav>

        <nav className="flex flex-row justify-center items-center flex-wrap mt-2">
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
            className="w-7 mx-3 bg-light dark:bg-dark rounded-full"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/darshan-arkhade-2a021324b/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mx-3 "
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
            className={`ml-4 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill:dark"} />
            ) : (
              <MoonIcon className={"fill:dark"} />
            )}
          </button>
        </nav>
      </motion.div> : null
      }

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
