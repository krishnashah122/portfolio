"use client";

import React from 'react';
import { useState, useEffect } from 'react';

const BackToTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        globalThis.window.addEventListener('scroll', () => {
            if(globalThis.window.scrollY > 200) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, []);

    const scrollToTop = () => {
        globalThis.window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div>
        { backToTopButton
        &&
        <i className="fa-solid fa-circle-chevron-up fixed bottom-4 right-4 text-5xl md:text-6xl text-secondary-color dark:text-primary-color bg-light-color dark:bg-dark-color rounded-full z-10" onClick={scrollToTop}></i> }
    </div>
  )
}

export default BackToTop