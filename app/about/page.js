"use client";
import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import profile from "../../public/Images/profile.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Particles from "react-tsparticles";
const particleOptions = require("../../utils/particles.json");
import ParticlesContainer from "@/components/ParticlesContainer";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
    <TransitionEffect/>
      <Navbar />
      <main className="flex w-full flex-col justify-center items-center bg-light dark:bg-dark  dark:text-light p-32  mb:pt-8
         pt-4 md:!pt-12 sm:!pt-8 xl:px-24 lg:px-16  md:px-12 sm:px-8">
        <div className="w-full h-full inline-block z-0  bg-light dark:bg-dark ">
          <Particles id="tsparticles" options={particleOptions} />
          <ParticlesContainer />
          <AnimatedText text="Passion Fuels Purpose!" classname="mb-16 lg:!text-7xl md:!text-6xl sm:!text-4xl sm:!mb-8" />
          <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
            <div className=" col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">
                About Me
              </h2>
              <p className="font-medium">
              Hi,  I am Darshan Arkhade, and I am a passionate web developer with a keen interest in developing dynamic and interactive websites. With a strong foundation in web development technologies, I strive to create engaging user experiences through innovative design and functionality.
              </p>

              <p className="font-medium my-4">
              In addition to web development, I have a genuine fascination for blockchain technology and its potential applications. Exploring decentralized solutions and understanding the intricacies of blockchain has been an exciting journey for me.
              </p>

              <p className="font-medium">
              Furthermore, I have a solid understanding of Data Structures and Algorithms (DSA), which allows me to write efficient and optimized code.
              </p>
            </div>

            <div
              className="col-span-3 md:place-self-center relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6
            dark:border-light dark:bg-dark xl:col-span-4  md:order-1 md:col-span-8 md:w-3/5 sm:w-[90%] "
            >
              <div className="absolute top-0 -right-3 -z-10 bg-dark dark:bg-light w-[102%] h-[103%] rounded-3xl" />
              <Image
                src={profile}
                alt="profile"
                width={96}
                height={96}
                className="w-full h-auto rounded-2xl border-solid border-2 dark:border-black "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-5xl sm:text-4xl xs:text-3xl">10+</span>
                <h2 className="text-xl capitalize font-medium text-dark/75 dark:text-primaryDark  xl:items-center md:text-lg sm:text-base xs:text-sm">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-5xl sm:text-4xl xs:text-3xl">1+</span>
                <h2 className="text-xl capitalize font-medium text-dark/75 dark:text-primaryDark  xl:items-center md:text-lg sm:text-base xs:text-sm">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          {/* <Experience /> */}
          <Education />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default about;
