import React from 'react'
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute '
        whileHover= {{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5 }}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
    <div className=' w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark'
        whileHover= {{scale: 1.05}}
        >
            Web
        </motion.div>
        <Skill name="HTML" x="-22vw" y="0vw"/>
        <Skill name="TypeScript" x="22vw" y="0vw"/>
        <Skill name="Jest" x="12vw" y="11vw"/>
        <Skill name="CSS" x="-5vw" y="-9vw"/>
        <Skill name="WebPack" x="-20vw" y="-19vw"/>
        <Skill name="ReactJS" x="7vw" y="-16vw"/>
        <Skill name="Tailwind CSS" x="-15vw" y="14vw"/>
        <Skill name="Github" x="-30vw" y="8vw"/>
        <Skill name="MongoDB" x="30vw" y="8vw"/>
        <Skill name="Redux" x="-30vw" y="-8vw"/>
        <Skill name="Storybook" x="28vw" y="-10vw"/>
    </div>
    </>
  )
}

export default Skills