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

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Particles id="tsparticles" options={particleOptions}/>
      <ParticlesContainer />

      <Navbar />

      <div className="w-full h-full inline-block z-0  bg-light p-32 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src="/Images/bg1.png" alt="bg" width={500} height={500} />
          </div>
          <div className="w-1/2">
            <AnimatedText
              text="Darshan Arkhade"
              classname="!text-left !text-5xl"
            />
            <h3 className="text-2xl font-medium text-blue-800">
              Software Developer
            </h3>
            <p className="text-base my-4 font-medium">
              Welcome to my portfolio, where I specialize in crafting beautiful
              websites with a purpose. I believe in the power of design and
              functionality working together to create meaningful online
              experiences.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
              hover:bg-light hover:text-dark border-2 border-solid  border-transparent hover:border-dark   "
              >
                Resume <LinkArrow className={"w-6  ml-1"} />
              </Link>
              <Link
                href="mailto: arkhadedarshan@gmail.com"
                target="_blank"
                className="text-dark text-lg ml-4 font-medium capitalize underline"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="absolute right-8 bottom-8 inline-block">
            <Image src="Images/bulb.svg" alt="DA" height={96} width={96} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
