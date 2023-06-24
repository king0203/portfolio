"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition : {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition : {
      duration: 1,
    },
  },
};
//now   we  are using two comp of framer motion , in which we have two thing initial and animate
// stagger children works on the children one by one , so it is working on one one word
const AnimatedText = ({ text, classname = "" }) => {
  return (
    <div className="flex mx-auto py-2 w-full items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`${classname} w-full inline-block text-dark font-bold capitalize text-8xl `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            
          >
            {/* for unique key */}
            {word}&nbsp;
            {/* for space after word  */}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;

//  The text prop is split into individual words using the JavaScript split() method.
//  Then, the component maps over each word and renders it as a <span> element with a unique
//  key (generated by concatenating the word with its index). Each word is followed by a
//  non-breaking space (&nbsp;) to ensure proper spacing between words.
