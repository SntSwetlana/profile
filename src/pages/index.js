import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/avatar-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>SntSwetlana Portfolio</title>
        <meta name="description" content="amazing life of coding" />

      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="SntSwetlana" className='w-full h-auto'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="By immersing yourself in the world of code development" className='!text-6xl !text-left'/>
              {/* , you open the door to the incredible potential of enhancing people's daily lives and experiences */}
              <p className='my-4 text-base font-medium'>
                As a web developer, my commitment is to transform concepts into inventive web applications. You can check out my recent projects and articles that demonstrate my skills in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/dummy.pdf' target={'_blank'}
                className='flex tems-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link>
                <Link href="mailto: snt.swetlana@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'                
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
