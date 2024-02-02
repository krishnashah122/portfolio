import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='px-[5vw] py-4 border-2 border-secondary-color dark:border-dark-secondary'>
        <p className='font-semibold text-center dark:text-light-color'>
            Copyright @2023 | Created by <Link href='https://krishnashah122.com.np' className='hover:text-primary-color hover:dark:text-secondary-color'>Krishna Shah</Link>
        </p>
    </div>
  )
}

export default Footer