import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import profile from "../../public/Images/profile.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

const about = () => {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col justify-center items-center">
        <div className="w-full h-full inline-block z-0  bg-light p-32 pt-16">
          <AnimatedText text="Passion Fuels Purpose!" classname="mb-16" />
          <div className="grid grid-cols-8 gap-16 w-full">
            <div className=" col-span-3 flex flex-col items-start justify-center">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I am Darshan Arkhade, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 1 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                Whether I am working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 bg-black w-[102%] h-[103%] rounded-[2rem]" />
              <Image
                src={profile}
                alt="profile"
                width={96}
                height={96}
                className="w-full h-auto rounded-2xl "
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-evenly">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  10+
                </span>
                <h2 className="text-xl capitalize font-medium text-dark/75">Projects</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold ">
                  1+
                </span>
                <h2 className="text-xl capitalize font-medium text-dark/75">Years Of Experience</h2>
              </div>
            </div>
          </div>
        </div>
        <Skills />
        <Experience/>
      </main>

      <Footer />
    </>
  );
};

export default about;
