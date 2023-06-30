"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Particles from "react-tsparticles";
const particleOptions = require("../../utils/particles.json");
import ParticlesContainer from "@/components/ParticlesContainer";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icon";
import securx from "../../public/Images/securx.png";
import portfolio from "../../public/Images/portfolio.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full p-12 flex items-center relative justify-between rounded-3xl rounded-br-2xl
     border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 bg-black w-[101%] h-[103%] rounded-[2.5rem] 
      rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full p-6 flex flex-col items-center  justify-between rounded-2xl border
     border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 bg-black w-[101%] h-[103%] rounded-[2rem] 
      rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <div className="mt-2 flex w-full justify-between items-center ">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg  text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
    <TransitionEffect/>
      <Navbar />
      <main className="flex w-full flex-col justify-center items-center dark:text-light">
        <div className="w-full h-full inline-block z-0  bg-light dark:bg-dark  p-32 pt-16">
          <Particles id="tsparticles" options={particleOptions} />
          <ParticlesContainer />
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            classname="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 ">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="SecurX- Password Manager"
                summary="
                Developed a cryptographically secured password manager, SecurX using Node.js, RSA encryption, and SHA-256
hashing for robust data protection.
                "
                link="https://securex-ultimate-password-manager.netlify.app/"
                img={securx}
                github="https://github.com/king0203/SecurX"
              />
            </div>

            <div className="col-span-6">
              <Project
                type="Project"
                title="Banking System"
                link="https://github.com/king0203/Online-Banking-System"
                img={securx}
                github="https://github.com/king0203/Online-Banking-System"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project"
                title="Banking System"
                link="https://github.com/king0203/Online-Banking-System"
                img={securx}
                github="https://github.com/king0203/Online-Banking-System"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Portfolio"
                summary="A professional portfolio website using Next JS, Framer-motion, and Tailwind CSS. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                link="https://darshan-dev.vercel.app/"
                img={portfolio}
                github="https://github.com/king0203/portfolio"
              />
            </div>
            {/* <div className="col-span-6">
              <Project
                type="Project"
                title="Banking System"
                link="https://github.com/king0203/Online-Banking-System"
                img={securx}
                github="https://github.com/king0203/Online-Banking-System"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project"
                title="Banking System"
                link="https://github.com/king0203/Online-Banking-System"
                img={securx}
                github="https://github.com/king0203/Online-Banking-System"
              />
            </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default projects;
