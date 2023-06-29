"use client"
import React from "react";
import { Icons } from "./SkillIcon.js";
import { motion } from "framer-motion";

function Skills() {
  const IconItem = (props) => (
    <motion.div className="flex flex-col items-center" draggable={true}
    whileHover={{y:-2, scale: 1.1 }}
    >
      {React.createElement(props.icon, { ...props.options, size: 44 })}
      <h4 className="hidden bg-blue-300 px-1 rounded-lg z-10 opacity-100 group-hover:inline text-md font-medium">
        {props.name}
      </h4>
    </motion.div>
  );

  return (
    <div className="pt-20 ">
      <div className="container m-12 mb-8  w-full">
        <h1 className="text-8xl font-bold mb-12 text-center">Skills</h1>
        <p className="text-xl font-medium">
          I love to learn new technologies, and this has helped me dive deep
          into different fields and master the skills of developing agile and
          scalable applications.
        </p>
      </div>
      <div className="container  w-full mt-8 m-12 flex justify-start flex-wrap" >
        {Icons.map(
          (language, index) =>
            language.icon && (
              <div className="w-20 h-20 group flex flex-col" key={index}
              >
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
