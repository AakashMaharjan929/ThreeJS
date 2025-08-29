import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);


const ExperienceSection = () => {
    useGSAP(() => {


        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) return; 


        gsap.utils.toArray('.timeline-card').forEach((card, index) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger:card,
                    start: 'top 80%',
                },
            });
        });

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1-self.progress(),
                    });
                }
            }
        });
    }, []);
  return (
    <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
            <TitleHeader title="Experience" sub="💼 My Project Overview"/>

            <div className='mt-32 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {expCards.map((card, index) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCard card={card} index={index}> 
                                    <div>
                                        <img src={card.imgPath} alt={card.title} />
                                    </div>
                                </GlowCard>
                            </div>

                            <div className='xl:w-4/6'>
                            <div className='flex items-start'>
                                <div className='timeline-wrapper'>
                                   <div className='timeline bg-white w-1 h-full scale-y-0 origin-bottom' />

                                    <div className='gradient-line w-1 h-full' />
                                </div>

                                <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-40'>
                                    <div className='timeline-logo'>
                                            <img src={card.logoPath} alt="logo" />
                                    </div>
                                    <div>
                                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                        <p className='my-5 text-white-50'>📅{card.date}</p>
                                        <p className='text-[#839cb5] italic'>
                                            Details
                                        </p>
                                        <ul className='list-disc ms-5 mt-5 flex flex-col text-white-50'>
                                            {card.responsibilities.map((resp, idx) => (
                                                <li key={resp + idx} className='text-lg'>
                                                    {resp}
                                                </li>
                                            ))}

                                            <div className="flex gap-4 mt-4">
  {card.githubLink && (
    <a
      href={card.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
    >
      <FaGithub size={18} /> GitHub
    </a>
  )}

  {card.liveLink && (
    <a
      href={card.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
    >
      <FiExternalLink size={18} /> Live Demo
    </a>
  )}
</div>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ExperienceSection