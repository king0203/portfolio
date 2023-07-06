"use client";
import React from "react";
import { Icons } from "./SkillIcon.js";
import { motion } from "framer-motion";

function Skills() {
  const IconItem = (props) => (
    <motion.div
      className="flex flex-col items-center"
      draggable={true}
      whileHover={{ y: -2, scale: 1.1 }}
    >
      {React.createElement(props.icon, { ...props.options, size: 44 })}
      <h4 className="hidden bg-blue-300 px-1 rounded-lg z-10 opacity-100 group-hover:inline text-md font-medium">
        {props.name}
      </h4>
    </motion.div>
  );

  return (
    <div className="pt-20 flex flex-col ">
      <div className="  mb-8 flex flex-col w-full">
        <h1 className="text-7xl font-bold mb-12 text-center md:text-6xl md:mb-16 xs:text-4xl">Skills</h1>
        <p className="text-xl font-medium sm:text-[16px]">
          I love to learn new technologies, and this has helped me dive deep
          into different fields and master the skills of developing agile and
          scalable applications.
        </p>
      </div>
      <div className="  w-full mt-8  flex justify-start sm:justify-between flex-wrap">
        {Icons.map(
          (language, index) =>
            language.icon && (
              <div className="w-20 h-20 sm:w-16 sm:h-16 group flex flex-col" key={index}>
                <IconItem
                  icon={language.icon}
                  options={language.options}
                  name={language.name}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Skills;
