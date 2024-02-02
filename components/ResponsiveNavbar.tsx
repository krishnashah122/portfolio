"use client";

import React from 'react';
import { Link } from 'react-scroll';
import { menuLinks, socialLinks } from '@/lib/data';
import { useNavStore, useMenuStore } from '../states/store';

const ResponsiveMenu = () => {

  const { toggleNav, setToggleNav } = useNavStore();

  const { active, setActive } = useMenuStore();

  return (
    <div className={`fixed left-0 top-0 z-[100] h-[100vh] w-[70%] max-w-[300px] bg-light-color dark:bg-dark-secondary bg-opacity-90 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] backdrop-blur-[0.5rem] lg:hidden transition-all duration-500 ease-in-out ${!toggleNav? 'translate-x-[-100%]' : ''}`}>

      {/* MENU LINKS */}
      <div className='w-full h-full mt-16 p-10'>
        <ul>

          {
            menuLinks.map(link => (
            <li key={link.hash}>
                <Link to={link.hash} smooth={true} className={`${active === link.hash ? 'text-primary-color dark:text-primary-color font-extrabold' : 'text-dark-color'} w-full my-1 px-3 py-4 inline-block text-2xl text-light-text dark:text-dark-text tracking-wider border-opacity-0 transition-all duration-500 ease-in-out hover:text-primary-color hover:dark:text-primary-color leading-6`} onClick={() => {setActive(link.hash); setToggleNav()}}>
                  {link.name}
                </Link>
            </li>
            ))
          }
          
        </ul>

        {/* SOCIAL LINKS */}
        <div className='w-full mx-auto mt-10 flex justify-between items-center gap-2 text-primary-color dark:text-secondary-color'>
          {
            socialLinks.map((social) => (
              <a href={social.link} target='_blank' className='w-[2.6rem] h-[2.6rem] rounded-full flex justify-center items-center text-xl bg-secondary-color dark:bg-primary-color hover:bg-primary-color 
              hover:dark:bg-secondary-color hover:text-secondary-color hover:dark:text-primary-color transition-all duration-300 ease-in-out'>
                <i className={`fa-brands fa-${social.platform}`}></i>
              </a>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default ResponsiveMenu