import { useRef } from 'react';

const GlowCard = ({ card, children, index }) => {

    const cardRefs = useRef([]);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
 

    const handleMouseMove = (index) => (event) => { 
         if (isMobile) return;
         
        const card = cardRefs.current[index];
        if(!card) return;


        const rect = card.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - rect.width / 2;
        const mouseY = event.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;


        card.style.setProperty('--start', angle + 60);

    }

  return (
<div 
  ref={(el) => (cardRefs.current[index] = el)} 
  {...(!isMobile ? { onMouseMove: handleMouseMove(index) } : {})}
  className='card card-border timeline-card rounded-xl p-10'
>


        <div className='glow'/>

        <div className='flex items-center gap-1 mb-5'>
            {/* {Array.from({ length: 5 }, (_, index) => (
                <img src="/images/star.png" key={index} alt="star" className='size-5' />
            ))} */}
        </div>
        <div className='mb-5'>
            <p className='text-white-50 text-lg'>{card.review}</p>
        </div>
        {/* {children} */}
    </div>
  )
}

export default GlowCard