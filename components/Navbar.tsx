"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ResponsiveMenu } from '.';
import { motion } from 'framer-motion';

const Navbar = () => {

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  const [theme, setTheme] = useState('');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <header className='z-[1000] fixed top-2 left-0 right-0 flex justify-center items-center leading-[5vh] px-8'>

      <div className='flex justify-between items-center w-[95vw] 2xl:w-[75vw] rounded-full bg-light-color dark:bg-dark-secondary bg-opacity-80 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] lg:bg-transparent lg:dark:bg-transparent lg:shadow-none'>

        {/* LOGO */}
        <div className='order-2 lg:order-1'>
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/Logo.png'
              alt='logo'
              width={60}
              height={60}
              className='object-contain rounded-lg bg-opacity-80 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] backdrop-blur-[0.5rem] w-[55px] lg:w-[60px]'
            />
          </Link>
        </div>
        
        {/* MENU */}
        <Menu/>
        <ResponsiveMenu/>

        {/* DARK MODE BUTTON */}
        <div className='flex order-3'>
          <div className={`w-[70px] md:w-[80px] h-10 p-1 bg-secondary-color dark:bg-primary-color flex justify-start dark:justify-end items-center rounded-full cursor-pointer bg-opacity-80 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] backdrop-blur-[0.5rem]`} onClick={toggleDarkMode}>
            <motion.div layout transition={spring} className='w-[50%] flex justify-center items-center rounded-full text-center'>

              {
                theme === 'light' ?
                  <i className="fa-regular fa-sun w-full p-2 bg-light-color text-lg text-dark-color rounded-full"></i>
                :
                  <i className="fa-solid fa-moon w-full p-2 bg-dark-secondary text-lg text-light-color rounded-full"></i>
              }
              
            </motion.div>
          </div>
        </div>

      </div>
      
    </header>
  )
}

export default Navbar