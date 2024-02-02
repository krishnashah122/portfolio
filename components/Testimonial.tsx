"use client";

import React, { useEffect, useState } from 'react';
import Title from './Title';
import Image from 'next/image';
import { titles, testimonials } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        const updateSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateSize();

        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
        
    }, []);

    const { ref, inView } = useInView({
        threshold: 0.75,
    });

    const { active, setActive } = useMenuStore();

    useEffect(() => {
        if (inView) {
        setActive('testimonial');
        }
    }, [inView]);

  return (
    <div ref={ref} id='testimonial' className='relative'>
        {/* TITLE */}
        <div>
            <Title title={titles[3].title} backTitle={titles[3].backTitle}/>
        </div>
        
        {/* TESTIMONIAL CONTAINER */}
        <div className='flex flex-col justify-center mx-auto my-[5vh] w-[95vw] 2xl:w-[75vw]'>
            <div className='flex-1 p-6 md:p-8'>
                <h2 className='subtitle'>
                    What clients say
                </h2>

                {/* TESTIMONIAL */}
                <Swiper
                    slidesPerView={windowSize.width < 1024 ? 1 : 2}
                    spaceBetween={5}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[ Autoplay, Pagination ]}
                    className='flex justify-evenly items-center flex-wrap w-full min-h-[40vh] my-8'>
                    {
                        testimonials.map((client) => (

                            // TESTIMONIAL CARD
                            <SwiperSlide className='relative w-[100%] lg:w-[48%] justify-center items-center p-2 rounded-2xl'>
                                
                                <div className='relative p-6 flex flex-col md:flex-row justify-between items-center gap-x-4 rounded-2xl border-opacity-40 bg-light-color dark:bg-dark-secondary shadow-lg shadow-dark-color/[0.03] backdrop-blur-[0.5rem]'>

                                    <div className='flex flex-col justify-center items-center gap-4 w-[50%] md:w-[15%]'>
                                        <Image
                                            src='/client profile.png'
                                            alt='client profile'
                                            width={80}
                                            height={80}
                                            className='object-contain rounded-full border-4 border-secondary-color bg-gradient-to-b from-violet-400 to-indigo-600'
                                        />

                                        <div className='text-center dark:text-light-color'>
                                            <h3 className='font-semibold'>
                                                {client.name}
                                            </h3>
                                            <p className='text-sm text-center'>
                                                {client.profession}
                                            </p>
                                        </div>
                                        
                                    </div>

                                    <p className='relative w-full p-8 text-center text-light-text dark:text-dark-text md:text-left'>

                                        <i className="fa-solid fa-quote-left absolute top-0 left-0 text-3xl text-secondary-color dark:text-primary-color"></i>

                                        {client.testimonial}

                                        <i className="fa-solid fa-quote-right absolute bottom-0 right-0 text-3xl text-secondary-color dark:text-primary-color"></i>

                                    </p>

                                </div>

                            </SwiperSlide>

                        ))
                    }
                </Swiper>
                
            </div>
            
        </div>
    </div>
  )
}

export default Testimonial