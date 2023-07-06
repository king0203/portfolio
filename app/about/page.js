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
      <main className="flex w-full flex-col justify-center items-center  dark:text-light">
        <div className="w-full h-full inline-block z-0  bg-light dark:bg-dark p-32 pt-16">
          <Particles id="tsparticles" options={particleOptions} />
          <ParticlesContainer />
          <AnimatedText text="Passion Fuels Purpose!" classname="mb-16" />
          <div className="grid grid-cols-8 gap-16 w-full">
            <div className=" col-span-3 flex flex-col items-start justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-primary">
                About Me
              </h2>
              <p className="font-medium">
              Hi,  I am Darshan Arkhade, and I am a passionate web developer with a keen interest in developing dynamic and interactive websites. With a strong foundation in web development technologies, I strive to create engaging user experiences through innovative design and functionality.
              </p>

              <p className="font-medium my-4">
              In addition to web development, I have a genuine fascination for blockchain technology and its potential applications. Exploring decentralized solutions and understanding the intricacies of blockchain has been an exciting journey for me. I am always eager to expand my knowledge in this evolving field.
              </p>

              <p className="font-medium">
              Furthermore, I have a solid understanding of Data Structures and Algorithms (DSA), which allows me to write efficient and optimized code. I enjoy solving complex problems and finding elegant solutions by applying DSA principles
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6
            dark:border-light dark:bg-dark"
            >
              <div className="absolute top-0 -right-3 -z-10 bg-dark dark:bg-light w-[102%] h-[103%] rounded-[2rem]" />
              <Image
                src={profile}
                alt="profile"
                width={96}
                height={96}
                className="w-full h-auto rounded-2xl border-solid border-2 dark:border-black  "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-evenly">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">10+</span>
                <h2 className="text-xl capitalize font-medium text-dark/75 dark:text-primaryDark">
                  Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">1+</span>
                <h2 className="text-xl capitalize font-medium text-dark/75 dark:text-primaryDark">
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
