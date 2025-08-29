import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room.jsx'
import Hero from '../../sections/Hero.jsx'
import HeroLights from './HeroLights.jsx'
import Particles from './Particles.jsx'


const HeroExpierience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas
  camera={{ position: [0, 0, 15], fov: 45 }}
  dpr={isMobile ? 1 : window.devicePixelRatio}
>

     

        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet} 
        enableRotate={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5 }
        maxPolarAngle={Math.PI / 2 }
        />

        <HeroLights />

        <Particles count={isMobile ? 0 : isTablet ? 0 : 100} />


       <group
  scale={isMobile ? 0.7 : isTablet ? 0.9 : 1}
  position={isMobile ? [0, -3, 0] : [0, -3.5, 0]}
  rotation={[0, -Math.PI / 4, 0]}
>
  <Room castShadow={!isMobile} receiveShadow={!isMobile} />

</group>


    </Canvas>
  )
}

export default HeroExpierience