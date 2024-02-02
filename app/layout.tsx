import './globals.css';
import type { Metadata } from 'next';
import { Navbar, Hero, About, Skills, Portfolio, Testimonial, Contact, Footer } from '@/components';
import BackToTop from '@/components/BackToTop';
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Krishna's Portfolio",
  description: "Created by Krishna Shah",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
      </head>
      <body className='relative'>
        <Toaster position="top-right"/>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        <BackToTop/>
      </body>
    </html>
  )
}
