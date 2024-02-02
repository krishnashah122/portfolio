"use client";

import React, { useEffect } from 'react';
import Title from './Title';
import Image from 'next/image';
import { titles, skills } from '@/lib/data';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

const Skills = () => {

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { active, setActive } = useMenuStore();

  useEffect(() => {
    if (inView) {
      setActive('skills');
    }
  }, [inView]);

  return (
    <div ref={ref} id='skills' className='relative'>
      {/* TITLE */}
        <div>
            <Title title={titles[1].title} backTitle={titles[1].backTitle}/>
        </div>
        
        {/* SKILLS CONTAINER */}
        <div className='flex flex-col justify-center mx-auto my-[5vh] w-[95vw] 2xl:w-[75vw] xl:flex-row'>

          {
            skills.map(skillTitle => (
              <div className='flex-1 p-6 md:p-8'>
                <h2 className='subtitle'>
                  {skillTitle.skillType}
                </h2>
                <div className='flex flex-wrap justify-between items-center py-6'>
                  {
                    skillTitle.skillTech.map(skill => (
                      
                      // SKILL TECH STACK
                      <div className='relative flex justify-center items-center w-[100%] md:w-[48%] h-[60px] mx-auto md:mx-0 mb-[3rem] py-4 bg-light-color dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-2xl border-opacity-40 bg-opacity-80 shadow-lg shadow-dark-color/[0.03]'>

                        {/* TECH STACK ICON */}
                        <Image
                          src={skill.techStack}
                          alt='icon'
                          width={85}
                          height={85}
                          className='object-contain absolute left-4 rounded-full shadow-lg shadow-dark-color/[0.03] p-4 bg-light-color dark:bg-dark-secondary z-[100]'
                        />

                        {/* TECH STACK NAME */}
                        <div className='absolute right-5 text-base md:text-lg'>
                          {skill.techName}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default Skills