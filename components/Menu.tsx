"use client";

import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { menuLinks } from '@/lib/data';
import { useNavStore, useMenuStore } from '../states/store';

const Menu = () => {
    
    const { toggleNav, setToggleNav } = useNavStore();
    
    const { active, setActive } = useMenuStore();
    
  return (
    <div className='lg:w-[60%] max-w-[900px] lg:px-5 leading-[60px] rounded-full border border-light-color dark:border-dark-secondary border-opacity-40 bg-light-color dark:bg-dark-secondary bg-opacity-80 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] backdrop-blur-[0.5rem] order-1 lg:order-2 z-[200]'>

        {/* NAVIGATION BUTTON */}
            <div className='relative text-3xl text-primary-color text-center lg:absolute lg:hidden rounded-full'>

                {
                    !toggleNav?
                    <div className='p-3'>
                        <i className="fa-solid fa-ellipsis-vertical mr-[1px]"></i>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    :
                    <i className="fa-solid fa-circle-xmark text-6xl p-0 text-secondary-color dark:text-dark-secondary bg-light-color dark:bg-primary-color rounded-full"></i>
                }

                {/* NAVIGATION TOGGLE BUTTON */}
                <input className='absolute top-0 left-0 w-full h-full opacity-0' type="checkbox" name="menuCheckbox" id="menuCheckBox"
                onChange={setToggleNav}/>
            </div>

        <ul className='flex justify-between items-center font-semibold'>

            {
                menuLinks.map(link => (
                <li key={link.hash}>
                    <Link to={link.hash} smooth={true} className={`${active === link.hash ? 'bg-secondary-color dark:bg-dark-primary' : ''} my-2 px-3 py-2 text-light-text dark:text-dark-text rounded-full border-opacity-0 transition-all duration-500 ease-in-out hover:bg-secondary-color hover:dark:bg-dark-primary hidden lg:block leading-6`} onClick={() => {setActive(link.hash)}}>
                    {link.name}
                    </Link>
                </li>
                ))
            }

        </ul>
    </div>
  )
}

export default Menu