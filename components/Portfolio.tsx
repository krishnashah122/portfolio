"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from './Title';
import { titles, projects } from '@/lib/data';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {

  const [projectList, setProjectList] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');

  const projectCategory = ['All', ...new Set(projects.map((currProject) => currProject.category))];

  const filterProjects = (projectCate: string) => {
    
    const updatedProjects = projects.filter((currProject) => {
      return currProject.category === projectCate;
    });
    
    if(projectCate.toUpperCase() === 'ALL'){
      setProjectList(projects);
    }
    else{
      setProjectList(updatedProjects);
    }

    setActiveFilter(projectCate);
    
  }

  const { ref, inView } = useInView({
    threshold: 0.75,
  });

  const { active, setActive } = useMenuStore();

  useEffect(() => {
    if (inView) {
      setActive('portfolio');
    }
  }, [inView]);

  return (
    <div ref={ref} id='portfolio' className='relative'>
      {/* TITLE */}
        <div>
            <Title title={titles[2].title} backTitle={titles[2].backTitle}/>
        </div>

        {/* PORTFOLIO CONTAINER */}
        <div className='flex flex-col justify-center mx-auto my-[5vh] w-[95vw] 2xl:w-[75vw]'>
          <div className='flex-1 p-6 md:p-8'>
            <h2 className='subtitle'>
              Latest Projects
            </h2>
            
            {/* PROJECT CATEGORY */}
            <div className='text-right dark:text-light-color mb-5'>
              {
                projectCategory.map(category => (
                  <button className={`${activeFilter === category ? 'text-primary-color border-b-2 border-primary-color' : ''} mx-2 mb-2 px-1 uppercase font-semibold hover:text-primary-color`} onClick={() => {filterProjects(category)}}>
                    {category}
                  </button>
                ))
              }
            </div>

            {/* PROJECT CONTAINER */}
            <div className='flex justify-evenly items-center flex-wrap gap-y-10'>
              {
                projectList.map(project => (

                  // PROJECT CARD
                  <div className='group relative rounded-2xl w-[100%] md:w-[45%] xl:w-[30%] border-opacity-40 bg-light-color dark:bg-dark-secondary dark:text-light-color shadow-lg shadow-dark-color/[0.03] backdrop-blur-[0.5rem] hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden'>

                    <div className='absolute top-0 bottom-0 left-0 right-0 bg-dark-primary rounded-2xl opacity-0 group-hover:opacity-80 transition-all duration-300 ease-in-out'></div>

                    {/* PROJECT IMAGE */}
                    <Image
                      src={project.image}
                      alt=''
                      height={340}
                      width={340}
                      className='object-contain rounded-2xl w-full'
                    />

                    {/* PROJECT LINKS */}
                    <div className='absolute top-6 right-[-100%] group-hover:right-6 flex gap-2 transition-all duration-300 ease-in-out'>

                      <Link href={project.githubLink} target='_blank'>
                        <i className="fa-brands fa-github p-3 rounded-full text-2xl text-primary-color dark:text-secondary-color bg-secondary-color dark:bg-primary-color hover:bg-primary-color hover:dark:bg-secondary-color hover:text-secondary-color hover:dark:text-primary-color transition-all duration-300 ease-in-out"></i>
                      </Link>
                      <Link href={project.demoLink} target='_blank'>
                        <i className="fa-solid fa-arrow-up-right-from-square p-3 rounded-full text-2xl text-primary-color dark:text-secondary-color bg-secondary-color dark:bg-primary-color hover:bg-primary-color hover:dark:bg-secondary-color hover:text-secondary-color hover:dark:text-primary-color transition-all duration-300 ease-in-out"></i>
                      </Link>

                    </div>
                    
                    {/* PROJECT INFORMATION */}
                    <div className='absolute left-6 right-6 bottom-[-100%] group-hover:bottom-6 text-light-color transition-all duration-300 ease-in-out'>
                      <h3 className='text-xl font-semibold mb-2'>
                        {project.name}
                      </h3>

                      <p className='text-sm'>
                        {project.description}
                      </p>
                    </div>

                  </div>

                ))
              }
            </div>
          </div>

        </div>
    </div>
  )
}

export default Portfolio