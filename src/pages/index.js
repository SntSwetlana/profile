import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import profilePic from "@/assets/images/avatar-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "@/assets/images/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>SntSwetlana Portfolio</title>
        <meta name="description" content="amazing life of coding" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className="w-1/2 md:w-full">
              <Image 
                src={profilePic} 
                alt="SntSwetlana" 
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText 
                text="By immersing yourself in the world of code development" 
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl
                md:!text-5xl sm:!text-3xl"/>
              {/* , you open the door to the incredible potential of enhancing people's daily lives and experiences */}
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a web developer, my commitment is to transform concepts into inventive web applications. You can check out my recent projects and articles that demonstrate my skills in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href='/dummy.pdf' target={'_blank'}
                className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-2 md:text-base"
                download={true}
                > Resume <LinkArrow className="ml-1"/>
                </Link>
                <Link href="mailto: snt.swetlana@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium
                capitalize text-dark underline dark:text-light 
                md:text-base "
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="SntSwetlana" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
