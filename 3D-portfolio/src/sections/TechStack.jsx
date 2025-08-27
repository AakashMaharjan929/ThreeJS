import React from 'react'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import TitleHeader from '../components/TitleHeader'
const TechStack = () => {
  return (
    <div id="skills" className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader
                title="Tech Stack"
                sub="🛠️ My Technical Skills"
            />

            <div className="tech-grid">
                {/* {techStackIcons.map(icon => (
                    <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" key={icon.name}>
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <TechIcon model={icon} />
                                </div>

                                <div className='padding-x w-full'>
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                ))} */}


               
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* <div className="tech-card-animated-bg" /> */}
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}

                
            </div>

        </div>
    </div>
  )
}

export default TechStack