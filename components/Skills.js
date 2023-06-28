import React from "react";
import { Icons } from "./SkillIcon.js";

function Skills() {
  const IconItem = (props) => (
    <div className="flex flex-col items-center" draggable={true}>
      {React.createElement(props.icon, { ...props.options, size: 40 })}
      <h4 className="hidden bg-blue-300 px-1 rounded-lg z-10 opacity-100 group-hover:inline text-md font-medium">
        {props.name}
      </h4>
    </div>
  );

  return (
    <div className="pt-0 px-32">
      <div className="container mx-auto ">
        <h1 className="text-8xl font-bold mb-4 text-center">Skills</h1>
        <p className="text-xl font-medium">
          I love to learn new technologies, and this has helped me dive deep
          into different fields and master the skills of developing agile and
          scalable applications.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-8 flex justify-start flex-wrap">
        {Icons.map(
          (language, index) =>
            language.icon && (
              <div className="w-20 h-20 group flex flex-col" key={index}>
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
