import React from "react";
import useFirestore from "../../hooks/useFirestore";
import "./imageGrid.scss";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <>
      <h2 className="head-text">
        Photo <span> Gallery </span> <br />
      </h2>
      <div
        className="img-grid"
        style={{
          color: "white",
        }}
      >
        {docs &&
          docs.map((doc) => (
            <motion.div
              layout
              whileHover={{
                opacity: 1,
              }}
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="uploaded img"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                }}
              />
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default ImageGrid;
