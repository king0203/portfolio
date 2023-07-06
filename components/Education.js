"use client";
import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-start justify-between  md:w-4/5"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>

        <span className="capitalize font-medium text-primary dark:text-primaryDark xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full xs:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-7xl mb-20 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">Education</h2>

      <div ref={ref1} className="w-3/4 mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute h-full bg-dark dark:bg-primaryDark dark:shadow-3xl left-9 top-0 w-1 
          origin-top  md:w-0.5 md:left-7.5 xs:left-5"
        />
        <ul className="flex flex-col justify-between items-center ml-4 xs:ml-3">
          <Details
            type="Bachler's of Technology, Computer Science and Engineering"
            time="2021-Present "
            place="IIIT Gwalior, India"
            info="Relevant courses included Data Structures and Algorithms, 
          Computer Systems Engineering, and Artificial Intelligence."
          />
          <Details
            type="Class 12th"
            time="2019-2021 "
            place="Matoshri Jr college "
            info="Nashik, Maharshtra, India"
          />
          <Details
            type="Class 10th"
            time="2014-2019 "
            place="Jawahar Navodaya Vidyalaya (JNV) "
            info="Nashik, Maharshtra, India"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
