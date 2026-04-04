import PixelBlastCode from './PixelBlastCode';
import '../../IntroAnimation/intro.css';

export default function PixelBlastBG({ children }) {
  return (
    <>
      <div className='introBG' style={{ position: 'relative', width: '100%', height: '100%', opacity: 0 }}>
        <PixelBlastCode
          variant="square"
          pixelSize={3}
          color="#5675f0"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.3}
          transparent
        />
        <div className='introText'>
          {children}
        </div>
      </div>
    </>
  )
}
