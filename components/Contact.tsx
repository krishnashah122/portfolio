"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Title from './Title';
import { titles, contactDescription, contactDetails, socialLinks } from '@/lib/data';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { useMenuStore } from '@/states/store';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

    const { ref, inView } = useInView({
        threshold: 0.75,
    });

    const { active, setActive } = useMenuStore();

    useEffect(() => {
        if (inView) {
            setActive('contact');
        }
    }, [inView]);

    const triggerEmail = async (data) => {
        await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, data, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then((success) => {
            toast.success('Message Sent Successfully!');
        }).catch((err) => {
            toast.error('Something went Wrong!');

        })
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        const data = {
            userName: e.target[0].value,
            userEmail: e.target[1].value,
            subject: e.target[2].value,
            message: e.target[3].value
        }
        triggerEmail(data);
        e.target.reset();
    }

  return (
    <div ref={ref} id='contact' className='relative'>
        {/* TITLE */}
        <div>
            <Title title={titles[4].title} backTitle={titles[4].backTitle}/>
        </div>

        {/* CONTACT CONTAINER */}
        <div className='flex flex-col justify-center mx-auto my-[5vh] w-[95vw] 2xl:w-[75vw]'>
            <div className='flex-1 p-6 md:p-8'>
                <h2 className='subtitle'>
                    Get in Touch
                </h2>

                <div className='flex flex-col lg:flex-row justify-center gap-10'>
                    <div className='w-[100%] lg:w-[50%] dark:text-light-color'>
                        <p className='mb-5 py-2 text-lg text-justify'>
                            {contactDescription}
                        </p>

                        <div className='w-full xl:max-w-[80%] flex flex-col justify-center gap-6 bg-light-color dark:bg-dark-secondary px-6 py-8 rounded-3xl border-opacity-40 bg-opacity-80 shadow-lg shadow-dark-color/[0.03] backdrop-blur-[0.5rem]'>
                        {
                            contactDetails.map((details) => (
                                <div className='flex items-center gap-6 text-light-text dark:text-dark-text'>
                                    <div className='w-20 h-20 rounded-full flex justify-center items-center bg-light-color border dark:bg-dark-secondary border-dark-color dark:border-light-color'>
                                        <i className={`fa-solid fa-${details.icon} text-center text-2xl`}></i>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-lg font-bold'>{details.key}:</p>
                                        <p className='text-light-text dark:text-dark-text'>{details.value}</p>
                                    </div>
                                </div>
                            ))
                        }                      
                        </div>

                        {/* SOCIAL MEDIA ICONS */}
                        <div className='flex items-center my-8 gap-2 text-[1.5rem] text-primary-color dark:text-secondary-color'>
                            <p className='text-lg text-light-text dark:text-dark-text'>Follow Me: </p>
                            {
                                socialLinks.map((social) => (
                                    <Link href={social.link} target='_blank' className='mx-1 w-10 h-10 rounded-full flex justify-center items-center text-xl bg-secondary-color dark:bg-primary-color hover:bg-primary-color hover:dark:bg-secondary-color hover:text-secondary-color hover:dark:text-primary-color transition-all duration-300 ease-in-out'>
                                        <i className={`fa-brands fa-${social.platform}`}></i>
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                    

                    {/* CONTACT FORM */}
                    <div className='w-[100%] lg:w-[50%] flex-1 py-8 xl:py-0'>
                        <form onSubmit={sendEmail} className='flex flex-col justify-center gap-4'>

                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className='input-field'>
                                    <i className="fa-solid fa-user px-4"></i>
                                    <input type="text" name="userName" placeholder='Your Name*' required/>
                                </div>
                                <div className='input-field'>
                                    <i className="fa-solid fa-envelope"></i>
                                    <input type="email" name="userEmail" placeholder='Your Email*' required/>
                                </div>
                            </div>

                            <div className='input-field'>
                                <i className="fa-solid fa-book"></i>
                                <input type="text" name="subject" placeholder='Enter Subject*' required/>
                            </div>

                            <div className='flex items-center rounded-2xl bg-secondary-color dark:bg-primary-color'>
                                <i className="fa-solid fa-message"></i>
                                <textarea className='w-full px-3 py-5 rounded-tr-2xl rounded-br-2xl outline-none dark:bg-dark-secondary dark:text-dark-text' name="message" cols="10" rows="10" placeholder='Message Here*...' required/>
                            </div>

                            <button type='submit' className='w-[70%] md:w-[50%] mx-auto mt-2 px-3 py-2 leading-10 rounded-full bg-primary-color text-light-color font-semibold hover:ring-2 hover:ring-offset-2 hover:ring-primary-color transition-all duration-300 ease-in-out'>
                                Send Message
                                <i className="fa-solid fa-paper-plane text-light-color"></i>
                            </button>
                            
                        </form>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Contact