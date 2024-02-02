"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { resume, socialLinks } from '@/lib/data';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { active, setActive } = useMenuStore();

  useEffect(() => {
    if (inView) {
      setActive('/');
    }
  }, [inView]);

  return (
    <div ref={ref} id='/' className='relative mt-[5vh]'>
        <div className='w-full h-[95vh] pt-[4vh] flex flex-col justify-center items-center gap-2'>

            {/* NAME AND WORK */}
            <h1 className='font-bold text-4xl mb-2 dark:text-light-color'>
                Hi, I'm <span className='text-primary-color'>Krishna Shah</span>
            </h1>
            <p className='text-lg text-light-text dark:text-dark-text'>MERN Stack Developer</p>

            {/* BUTTONS */}
            <div className='mt-5 py-5 flex justify-center gap-5 items-center'>
              
                <Link to={'contact'} smooth={true} className="relative rounded-xl px-6 py-3 overflow-hidden group bg-primary-color hover:bg-gradient-to-r hover:primary-color text-background-color hover:ring-2 hover:ring-offset-2 hover:ring-primary-color transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background-color opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-semibold">Hire Me</span>
                </Link>

                <a href={resume} target='_blank' className="relative rounded-xl px-6 py-3 overflow-hidden group bg-primary-color hover:bg-gradient-to-r hover:primary-color text-background-color hover:ring-2 hover:ring-offset-2 hover:ring-primary-color transition-all ease-out duration-300">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-background-color opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-semibold">Download CV</span>
                </a>

            </div>

            {/* PROFILE */}
            <div className='relative rounded-full bg-secondary-color mt-10 mb-5 p-4'>
              <Image
                src='/shape-waves.svg'
                alt='waves'
                width={80}
                height={80}
                className='object-contain absolute top-[30%] right-[92%] opacity-10 w-[60px] md:w-[80px] dark:invert'
              />
              <Image
                src='/profile.png'
                alt='profile'
                width={300}
                height={300}
                className='object-contain relative z-10 rounded-full pt-4 bg-gradient-to-b from-violet-400 dark:from-violet-600 to-indigo-600 dark:to-indigo-400 w-[250px] md:w-[300px] h-[330px] md:h-[400px]'
              />
              <Image
                src='/shape-circle.svg'
                alt='circle'
                width={200}
                height={200}
                className='object-contain absolute top-[55%] left-[55%] opacity-10 w-[150px] md:w-[200px] dark:invert'
              />
            </div>

            {/* SOCIAL MEDIA ICONS */}
            <div className='mx-auto flex justify-center items-center gap-4 text-[1.5rem] text-primary-color dark:text-secondary-color'>
              {
                socialLinks.map((social) => (
                  <a href={social.link} target='_blank' className='mx-1 w-[3rem] h-[3rem] rounded-full flex justify-center items-center text-2xl bg-secondary-color dark:bg-primary-color hover:bg-primary-color hover:dark:bg-secondary-color hover:text-secondary-color hover:dark:text-primary-color transition-all duration-300 ease-in-out'>
                    <i className={`fa-brands fa-${social.platform}`}></i>
                  </a>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Hero