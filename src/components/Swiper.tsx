import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../image-data";


type Props = {}

const Swiper = (props: Props) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);
  
    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };
  
    return (
      <>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            className="min-h-[500px] object-contain"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity:0, x:150},
              visible: {opacity:1,x:0}
            }}
           
          />
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
      </>
    );
}

export default Swiper