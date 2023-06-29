"use client";
import React, { useRef } from "react";
import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} className="text-primary capitalize">
            @{company}
          </a>
        </h3>

        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-7xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-3/4 mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute h-full bg-dark left-9 top-0 w-1 origin-top"
        />
        <ul className="flex flex-col justify-between items-center ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2022-Present "
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern "
            company="Facebook"
            time="Summer 2021 "
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
