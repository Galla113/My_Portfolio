import GrainientCode from './GrainientCode';

export default function GrainientBG() {
  return (
    <>
      <div className='grainient'>
        <GrainientCode
          color1="#2d2d2d"
          color2="#361c9b"
          color3="#2d2d2d"
          timeSpeed={3}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5.5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.1}
          rotationAmount={500}
          noiseScale={1.3}
          grainAmount={0}
          grainScale={1.5}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
    </>
  )
}