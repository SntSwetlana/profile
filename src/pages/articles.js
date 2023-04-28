import React from 'react'
import { useRef } from "react";
import Head from "next/head";
import Layout from '@/components/Layout';
import Link from "next/link";
import Image from "next/image";
import AnimatedText from '@/components/AnimatedText';
import article1 from "@/assets/images/What-is-higher-order-component-in-React.jpg"
import article2 from "@/assets/images/pagination-component-in-reactjs.jpg"
import { easeInOut, motion, useMotionValue } from 'framer-motion';
import article3 from "@/assets/images/three_cups_to_name_it.png"
import article4 from "@/assets/images/chat-bot.png"
import article5 from "@/assets/images/flip-the-coin.png"
import article6 from "@/assets/images/line-with-hats.png"
import article7 from "@/assets/images/disguised-as-an-older-man-asking-2-guards-a-question.png"
import article8 from "@/assets/images/The-man-chief.png"

const FrameImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='cpitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FrameImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg'
        priority
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </Link>
  )
}

const Article = ({ img, title, link, date }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
      justify-between bg-light text-dark first:mt-0 border border-solid border-dark 
      border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
      ">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light
                      rounded-br-3xl ' />
      <Link
        href={link}
        target="_blank"
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg '
      >
        <FrameImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
      />

      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
      <p className=' text-sm mb-2 '>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>SntSwetlana | Article Page</title>
        <meta name="description" content='more about me' />
      </Head>
      <main className="w-full mb-16 flex flex-col item-center justify-center overflow-hidden
      dark:text-light
      ">
        <Layout className='pt-16'>
          <AnimatedText text="Make a difference every day!" className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
              title="Build"
              img={article1}
              time="5 min"
              summary="dfgdfgdf"
              link="/"
            />
            <FeaturedArticle
              title="Build"
              img={article2}
              time="5 min"
              summary="dfgdfgdf"
              link="/"
            />
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All articles</h2>
          <ul>
            <Article
              title="Find the Right Shake"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-find-the-right-shake"
              img={article3}
            />
            <Article
              title="Faulty Robot"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-faulty-robot"
              img={article4}
            />
            <Article
              title="Flip the Coin"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-flip-the-coin"
              img={article5}
            />
            <Article
              title="Black and White Hats"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-black-and-white-hats"
              img={article6}
            />
            <Article
              title="Money Heist"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-money-heist"
              img={article7}
            />
            <Article
              title="The Master Chief"
              date="April 9, 2023"
              link="https://vk.com/@-216859181-the-master-chief"
              img={article8}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles