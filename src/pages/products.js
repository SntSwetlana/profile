import React from 'react'
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { GitHubIcon } from '@/components/Icons';
import project1 from "@/assets/images/ProjectTS.png";
import project2 from "@/assets/images/E-commerce.png";
import project3 from "@/assets/images/FrontDashboard.png";
import project4 from "@/assets/images/AdminSide.png";
import { motion } from 'framer-motion';

const FrameImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return(
        <article 
           className="w-full flex items-center justify-between relative rounded-br-2xl
                      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
                      dark:bg-dark dark:border-light"
        >
           <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light
                           rounded-br-3xl'/>
            <Link href={link} target = "_blank"
                  className='w-1/2 cursor-pointer overflow-hidden rounded-lg '
            >
                <FrameImage 
                 src={img} 
                 alt={title} 
                 className='w-full h-auto'
                 whileHover={{scale:1.05}}
                 transition={{duration:0.2}}
                 priority
                 sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
             />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GitHubIcon /></Link>
                    <Link 
                      href={link} 
                      target='_blank'
                      className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                      dark:bg-light dark:text-dark"
                    >Visit the project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
           <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
           rounded-br-3xl dark:bg-light" />
            <Link href={link} target = "_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg '
            >
                <FrameImage 
                    src={img} 
                    alt={title} 
                    className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link 
                    href={link} 
                    target='_blank' 
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-4 flex items-center justify-between'>
                    <Link 
                       href={link} 
                       target='_blank'
                       className='text-lg font-semibold underline'
                    >Visit</Link>
                    <Link 
                       href={github} 
                       target='_blank' 
                       className='w-10'><GitHubIcon />{" "}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const products = () => {
    
  return (
    <>
        <Head>
        <title>SntSwetlana | Projects Page</title>
        <meta name="description" content='more about projects'/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText 
                text="Practice makes perfect" 
                className='mb-16'
                />
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                    <FeaturedProject
                    title='React Portfolio Website'
                    img={project1}
                    summary='Front side for the news projectusing React JS + Redux + TypeScript + i18n + ThemeProvider, Customized widjets. It has infinite scrolls, intersection API, using  Filter and Searching engines. All features covered with unit tests.'
                    link='/'
                    github='/'
                    type="Featured project"
                     />
                    </div>
                    <div className='col-span-6'>
                    <Project
                    title='MERN Fullstack E-commerce Website'
                    img={project2}
                    link='/'
                    github='/'
                    type="Featured project"
                     />
                    </div>
                    <div className='col-span-6'>
                    <Project
                    title='MERN FrontDashboard Website'
                    img={project3}
                    link='/'
                    github='/'
                    type="Featured project"
                     />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject
                    title='MERN Admin-side Dashboard Website'
                    img={project4}
                    summary='Front side for the Dashboard React JS + TypeScript + MUI + Momgo.'
                    link='/'
                    github='/'
                    type="Featured project"
                     />
                    </div>
                </div>
            </Layout>            
        </main>
    </>

  )
}

export default products