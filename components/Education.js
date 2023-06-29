"use client";
import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-7xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-3/4 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute h-full bg-dark left-9 top-0 w-1 origin-top"
        />
        <ul className="flex flex-col justify-between items-center ml-4">
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
            place="Matoshri Jr college, Nashik, Maharshtra"
          />
          <Details
            type="Class 10th"
            time="2014-2019 "
            place="Jawahar Navodaya Vidyalaya, Nashik "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
