"use client";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Particles from "react-tsparticles";
const particleOptions = require("../utils/particles.json");
import ParticlesContainer from "@/components/ParticlesContainer";
import { useEffect } from "react";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <TransitionEffect/>
      <Particles id="tsparticles" options={particleOptions} />
      <ParticlesContainer />

      <Navbar />

      <div className="w-full h-full inline-block z-0 text-dark dark:text-light bg-light dark:bg-dark 
      p-32 !pt-4 lg:!pt-28 md:!pt-12 sm:!pt-4 xl:px-24 lg:px-16  md:px-12 sm:px-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-3/4">
            <Image
              src="/Images/bg1.png"
              className="lg:hidden md:inline-block md:w-full md:mb-4"
              alt="bg"
              width={450}
              height={450}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-1/2 lg:text-center flex flex-col items-center self-center lg:w-full ">
            <AnimatedText
              text="Darshan Arkhade"
              classname="!text-left !text-5xl
               md:!text-5xl sm:!text-4xl lg:!text-6xl lg:!text-center"
            />
            <h3 className="text-2xl font-bold self-start lg:self-center text-primary dark:text-primaryDark">
              Software Developer
            </h3>
            <p className="text-base my-4 font-medium md:text-sm sm:text-xs">
              Welcome to my portfolio, where I specialize in crafting beautiful
              websites with a purpose. I believe in the power of design and
              functionality working together to create meaningful online
              experiences.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
              hover:bg-light hover:text-dark border-2 border-solid  border-transparent hover:border-dark   
              
              dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
              md:p-2 md:px-4 md:text-base "
              >
                Resume <LinkArrow className={"w-6  ml-1 "} />
              </Link>
              <Link
                href="mailto: arkhadedarshan@gmail.com"
                target="_blank"
                className="text-dark  text-lg ml-4 font-medium capitalize underline
                dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 inline-block md:hidden lg:w-20 ">
            <Image src="Images/bulb.svg" alt="DA" height={90} width={90} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
