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
import movieflix from "../../public/Images/movieflix.png";
import degchain from "../../public/Images/degchain.png";
import portfolio from "../../public/Images/portfolio.png";
import coinwatch from "../../public/Images/coinwatch.png";
import extension from "../../public/Images/extension.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({  title,tech, summary, img, link, github }) => {
  return (
    <article
      className="w-full p-12 flex items-center relative justify-between rounded-3xl rounded-br-2xl
     border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 bg-black w-[101%] h-[103%] rounded-[2.5rem] 
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border-4 border-gray-300"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
       
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-xl xs:mt-1">{title}</h2>
        </Link>
        <span className="text-primary dark:text-primaryDark font-medium text-xl sm:text-base">
          {tech}
        </span>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg 
            font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({  title,tech, img, link, github }) => {
  return (
    <article
      className="w-full p-6 flex flex-col items-center  justify-between rounded-2xl border
     border-solid border-dark bg-light shadow-2xl relative dark:bg-dark dark:border-light
     xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 bg-black w-[101%] h-[103%] rounded-[2rem] 
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border-4 border-gray-300"
          priority
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
       
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-xl">{title}</h2>
        </Link>
        <span className="text-primary dark:text-primaryDark font-medium text-xl  sm:text-base">
          {tech}
        </span>
        <div className="mt-2 flex w-full justify-between items-center ">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg  text-lg font-semibold underline  sm:text-base"
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
        <div className="w-full h-full inline-block z-0  bg-light dark:bg-dark  p-32 pt-16
        mb:pt-8 md:!pt-12 sm:!pt-8 xl:px-24 lg:px-16  md:px-12 sm:px-8">
          <Particles id="tsparticles" options={particleOptions} />
          <ParticlesContainer />
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            classname="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:!mb-8"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32  xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5">
          <div className="col-span-12">
              <FeaturedProject
                title="Portfolio"
                tech="NextJs, Tailwind, Framer Motion"
                summary="A professional portfolio website. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                link="https://darshan-dev.vercel.app/"
                img={portfolio}
                github="https://github.com/king0203/portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="CoinWatch"
                tech="React, Rapid-API, Redux, Chartjs"
                link="https://coinwatch-six.vercel.app"
                img={coinwatch}
                github="https://github.com/king0203/CoinWatch"
              />
            </div> <div className="col-span-6 sm:col-span-12">
              <Project
                title="VidMark"
                tech="Javascript- Chrome Extension"
                link="https://github.com/king0203/Vidmark-Chrome-Extension"
                img={extension}
                github="https://github.com/king0203/Vidmark-Chrome-Extension"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MovieFlix"
                tech="NextJs, Rapid-API, MongoDB"
                link="https://github.com/king0203/movieflix"
                img={movieflix}
                github="https://github.com/king0203/movieflix"
              />
            </div>
        
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SecurX"
                tech="React, Express, MongoDB, NodeJS"
                // summary="
                // SecurX is a password manager application that ensures strong data protection using MERN.
                //  It incorporates RSA encryption and SHA-256 hashing algorithms to guarantee cryptographic 
                //  security. As a developer, I primarily focused on front-end development.
                // "
                link="https://github.com/king0203/SecurX"
                img={securx}
                github="https://github.com/king0203/SecurX"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Degchain"
                tech="NextJs, Tailwind CSS, Solidity, Hardhat, Ether.js, IPFS "
                summary="
                The Decentralized Gradesheet System, which leverages blockchain technology and 
                decentralized storage, transforms the way grade sheets are managed in education. 
               As a developer, I played a significant role in the project, focusing mainly on front-end technologies 
                "
                link="https://github.com/DegChain/Degchain-Frontend"
                img={degchain}
                github="https://github.com/DegChain/Degchain-Frontend"
              />
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default projects;
