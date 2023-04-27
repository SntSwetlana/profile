import { motion, useScroll } from 'framer-motion'
import React from 'react'
import { useRef } from "react";
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref=useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink}
            target="_blank"
            className='text-primary capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className=' font-medium w-full '>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                  position="Software Engineer"
                  company="Voronezh Research Institute of Communications"
                  time="Summer 1999-2012"
                  address="Voronezh, Russian Federation"
                  work="Worked in a team responsible for the development of new commercial satellite band hardware and software systems, including the development of a new user interface and commercial band data analysis."
                />

                <Details 
                  position="Software Developer"
                  company="Moscow Research and production company"
                  time="Summer 2007-2020"
                  address="Moscow, Russian Federation"
                  work="Participated in the development of the architecture and interface of software complexes for the accounting and fixing of changes in the loading of commercial frequency bands across different ranges, as well as for fixing changes in the topology of registered networks."
                />
                <Details 
                  position="Software Developer"
                  company="Moscow Astronomical Science Center"
                  time="2012-Present"
                  address="Moscow, Russian Federation"
                  work="As an interface programmer, I was responsible for developing interfaces for software complexes that take into account and record changes in the loading of commercial frequency bands and network topology. I created various user interface options, selected appropriate design choices, and developed corresponding functional capabilities based on user role models. Intuitively understandable and easy-to-use interfaces allowed for significant time savings in performing tasks. I utilized various data visualization tools such as diagrams, waterfalls, graphics, and tabular representations to help users quickly assess the state of the system.
                  I participated in integrating notification functions into the interface so that users could quickly receive notifications about system changes and respond to them promptly.
                  As an interface programmer, it was always important for me to provide a clear and effective way for users to interact with software complexes for tracking and fixing changes in the loading of commercial frequency bands and network topology."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience