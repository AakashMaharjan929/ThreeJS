import Button from '../components/Button'
import {words} from '../constants'
import HeroExpierience from '../components/HeroModels/HeroExpierience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { use } from 'react'
import AnimatedCounter from '../components/AnimatedCounter'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const displayedWords = isMobile ? words.slice(0, 3) : words; // show fewer on mobile


    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y:50,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut'
            },
        )
    })

  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
            {/* LEFT HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className="hero-text">
                        <h1>Shaping 
                            <span className="slide">
                                <span className="wrapper">
                                    {displayedWords.map((word) => (
                                        <span key={word.id} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} 
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>

                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                            <p className='text-white-50 md:text-lg relative z-10'>
  Hi, I'm <span className="font-semibold">Aakash Maharjan</span>, an aspiring 
  Full Stack Developer and AI/ML enthusiast.  <br />

  I have strong knowledge in <span className="text-white">React, Node.js, PHP, and the MERN Stack</span>, <br />
  along with basic experience in <span className="text-white">Python, Java, C#, and C</span>.  
  <div className="flex flex-wrap items-center gap-2 mt-3">
  <a href="mailto:aakashmaharjan2222@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
    <MdEmail size={22} /> aakashmaharjan2222@gmail.com
  </a>
  <a href="https://github.com/AakashMaharjan929" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
    <FaGithub size={22} /> GitHub
  </a>
  <a href="https://www.linkedin.com/in/aakash-maharjan-b28812380/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
    <FaLinkedin size={22} /> LinkedIn
  </a>
</div>
</p>

 <Button     
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="button" 
                                text="See My Work"
                            />

                </div>

            </header>


            {/* RIGHT: 3D MODEL */}

            <figure>
  <div className="hero-3d-layout">
    {!isMobile ? (
      <HeroExpierience />
    ) : (
      <img
        src="/images/hero.png"
        alt="Hero"
        className="w-full h-full object-cover rounded-3xl"
      />
    )}
  </div>
</figure>

        </div>

        <AnimatedCounter />
    </section>
  )
}

export default Hero