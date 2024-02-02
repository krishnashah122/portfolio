"use client";

import React, { useEffect } from 'react';
import Title from './Title';
import { titles, aboutMeDescription, aboutMeLabels, personalInfo, qualification } from '@/lib/data';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { active, setActive } = useMenuStore();

  useEffect(() => {
    if (inView) {
      setActive('about');
    }
  }, [inView]);

  return (
    <div ref={ref} id='about' className='relative'>
      {/* TITLE */}
        <div>
            <Title title={titles[0].title} backTitle={titles[0].backTitle}/>
        </div>
        
        {/* PERSONAL INFORMATION */}
        <div className='flex flex-col justify-center mx-auto my-[5vh] w-[95vw] 2xl:w-[75vw] xl:flex-row dark:text-light-color'>
          <div className='flex-1 p-6 md:p-8'>
            <h2 className='subtitle'>
              Personal Infos
            </h2>

            {/* BIO */}
            <p className='mb-5 py-2 text-lg text-justify'>
              {aboutMeDescription}
            </p>

            {/* INFORMATION */}
            <div className='flex flex-wrap items-center mb-6 bg-primary-color p-4 md:p-6 rounded-3xl bg-opacity-80 shadow-lg shadow-dark-color/[0.03] dark:shadow-light-color/[0.03] backdrop-blur-[0.5rem]'>
              {
                personalInfo.map(info => (
                  <div className='w-[50%] py-2 text-light-color'>
                    <span className='text-sm md:text-base'>{info.key}: </span>
                    <span className='font-semibold block xl:inline-block text-xs md:text-sm'>{info.value}</span>
                  </div>
                ))
              }
            </div>

            {/* LABELS */}
            <div className='flex justify-between items-center flex-wrap'>

              {
                aboutMeLabels.map(labels => (
                  <div className='relative flex justify-between items-center w-[100%] md:w-[48%] mx-auto md:mx-0 mb-6 p-4 bg-light-color dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-2xl border-opacity-40 bg-opacity-80 shadow-lg shadow-dark-color/[0.03]'>

                    {/* LABEL NUMBERS */}
                    <div className='text-primary-color text-3xl md:text-4xl font-bold w-20 h-20 flex justify-center items-center rounded-full shadow-lg shadow-dark-color/[0.03] bg-light-color dark:bg-dark-secondary'>
                      {labels.number}
                    </div>

                    {/* LABEL NAME */}
                    <div className='text-base font-semibold'>
                      {labels.label}
                    </div>

                  </div>
                ))
              }

            </div>
          </div>

          {/* QUALIFICATION */}
          <div className='flex-1 p-8'>
            <h2 className='subtitle'>Qualification</h2>
            
            {
              qualification.map(details => (
                <div className='relative border-l-[3px] border-secondary-color dark:border-primary-color my-10 ml-5 pl-8 pr-4'>
                  <span className='absolute left-[-23px] top-[-5px] px-3 py-3 lg:py-2.5 bg-primary-color text-background-color rounded-full'>
                    <i className="fa-solid fa-graduation-cap"></i>
                  </span>
                  <span className='text-[0.72rem] font-semibold px-3 py-1 bg-secondary-color text-primary-color rounded-full uppercase'>
                    {details.timeline}
                  </span>
                  <div className='mt-4 mb-2 font-semibold text-lg uppercase'>
                    {details.course}
                  </div>
                  <div className='text-light-text dark:text-dark-text'>
                    {details.institute}
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        
    </div>
  )
}

export default About