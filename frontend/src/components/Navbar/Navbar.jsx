import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const items = ["home", "about", "work", "skills", "contact"];
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.crest} alt="logo" />
        <ul className=" app__navbar-links">
          {/* //loop through all elements */}
          {items.map((item) => (
            <li className="app_flex p-text " key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        {/* //hamburger  */}
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              style={{
                height: 500,
                width: 240,
                borderRadius: 22,
              }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
