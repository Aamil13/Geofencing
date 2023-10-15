import React from 'react'
import {BiLogoFacebook} from "react-icons/bi"
import {FaXTwitter} from "react-icons/fa6"
import shoe from "../assets/shoe.png"
import { motion } from 'framer-motion'
import Swiper from './Swiper'


type Props = {}

const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, scale: 0.1,y:90 },
    visible: { opacity: 1, scale: 1,y:0 },
  };

const Hero = (props: Props) => {
  return (
    <div className='dontbebas overflow-hidden min-h-[90vh] w-full flex max-md:flex-col justify-between px-20'>

        <div className='relative min-h-[90vh] w-1/2 max-md:w-full flex items-center'>
            <motion.div className='absolute bottom-0 -left-20 flex flex-col items-center gap-3'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={{
              hidden: {opacity:0, x:-10},
              visible: {opacity:1,x:0}
            }}>
                <BiLogoFacebook size={20}/>
                <FaXTwitter/>
                <div className='dontbebas -rotate-90 '>Share</div>
                <div className="  flex-grow h-px bg-gray-400"></div> 
                <div className='lineee'></div>
            </motion.div>

            <motion.div className='relative flex justify-start items-center h-full  text-7xl'
            initial="hidden"

            whileInView="visible"
            viewport={{once:true,amount:0.5}}
            variants={container}
            >
                <motion.p variants={childVariant} className='dontbebas  -rotate-90'>
                    Nike
                </motion.p>
                <div className='max-w-sm'>
                <motion.p variants={childVariant} className='dontbebas  '>The Quality You Need</motion.p>
                <motion.p variants={childVariant} className='dontbebas text-gray-300 '>The Quality You Deserve</motion.p>
                </div>
               
            </motion.div>
        </div>


        {/* /////Rignt side   */}
            <div className='relative flex justify-center items-center '>
                <motion.p className='dontbebas absolute right-0 text-[400px] max-sm:text-9xl -z-10 text-gray-400'
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{duration:1}}
                variants={{
                  hidden: {opacity:0, y:50},
                  visible: {opacity:1,y:0}
                }}>NIKE</motion.p>

                <Swiper/>
              
                
            </div>

        </div>
  )
}

export default Hero