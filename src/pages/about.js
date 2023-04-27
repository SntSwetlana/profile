import React, { useEffect, useRef } from 'react'
import Head from "next/head";
import Image from "next/image";
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import profileImage from "@/assets/images/IMG-3407.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(()=> {
        spring.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [spring, value])


    return (
        <span ref={ref}>
        </span>
    )
}

const about = () => {
  return (
    <>
    <Head>
        <title>SntSwetlana | About Page</title>
        <meta name="description" content='more about me'/>
    </Head>
    <main className='flex w-full flex-col items-center justify-center '>
        <Layout className='pt-16'>
        <AnimatedText text="Endless craft love!" className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium'>
                Hi, I'm SntSwetlana, and I'm not just a web developer who loves building functional and user-friendly digital apps. With years of experience across different areas of the digital industry, I'm always on the lookout for new and innovative ways to bring interesting ideas to life.
                </p>
                <p className='my-4 font-medium'>
                I believe that modern technology is the best tool we could have received to bring to life ideas that have been brewing for years. Today, it is more than just a beautiful design, it is a fast solution to many problems and the creation of an intuitive, pleasant interface that allows us to solve tasks of any importance.
                </p>
                <p className='font-medium'>
                Whether I'm working on a website, a mobile application, or any other digital product, I bring my dedication to quality development and user-centered thinking to every project I work on.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 
                           border-solid border-dark bg-light p-8'>
                            <div className=' absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                <Image src={profileImage} alt="SntSwetlana" className='w-full h-auto rounded-2xl'/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center '>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={5}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center '>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={10}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center '>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={15}/>+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>experience</h2>
                </div>
            </div>
        </div>
        <Skills />
        <Experience />
        <Education />
        </Layout>
    </main>
    </>
  )
}

export default about