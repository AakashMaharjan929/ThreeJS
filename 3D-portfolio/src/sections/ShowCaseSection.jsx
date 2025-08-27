import React from 'react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'


gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    
    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        
        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y:50, opacity:0
            },
            {
                y:0, opacity:1, duration:1, delay: 0.3 * (index+1),
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom"
                }
            }
        )
    });

        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, []);

  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/p1.png" alt="project1" />
                    </div>
                    <div className='text-content'>
                        <h2><a 
                              href="https://github.com/AakashMaharjan929/MERN-Stack/tree/main/Movie-Trend-App/TrendFlix" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                                TrendFlix: A movie app which shows trending movies
                            </a></h2>
                        <p className='text-white-50 md:text-xl'>This app provides a seamless experience for users to discover and watch trending movies made with React and AppWrite.</p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/p2.png" alt="project2" />
                        </div>
                        <h2> <a 
                              href="https://github.com/AakashMaharjan929/MERN-Stack/tree/main/Perfume%20Ecommerce" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                                Perfume Ecommerce App (MERN + Stripe)
                            </a></h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/p3.png" alt="project3" />
                        </div>
                        <h2> <a 
                              href="https://github.com/AakashMaharjan929/MERN-Stack/tree/main/Room%20Rental%20System" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                                Room Rental System (PHP with CSS)
                            </a></h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCaseSection