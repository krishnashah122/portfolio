import React from 'react';
import { TitleProps } from '@/types';

const Title = ({ title, backTitle }: TitleProps) => {
  return (
    <div className='relative mt-[10vh]'>
        <div className='font-bold text-center'>
          
            {/* BACK TITLE */}
            <span className='absolute text-center dark:text-light-text font-extrabold font-abril top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl lg:text-8xl tracking-widest opacity-10 dark:opacity-20 uppercase'>
                {backTitle}
            </span>

            {/* TITLE */}
            <h1 className="relative text-4xl lg:text-6xl text-primary-color font-extrabold uppercase">
                {title}
            </h1>
        </div>
    </div>
  )
}

export default Title