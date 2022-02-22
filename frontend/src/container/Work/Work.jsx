import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrapp } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const [animaeCard, setAnimaeCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        whileHover={{ opacity: [0, 1] }}
        transition={{ duration: 0.25, ease: "easeInOut", delayChildren: 0.5 }}
        className="app__work-portfolio"
      ></motion.div>
    </>
  );
};

export default Work;
