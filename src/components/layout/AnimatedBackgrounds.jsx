import Balatro from './animated-backgrounds/Balatro';

export default function BalatroBG() {
  return (
    <Balatro
      isRotate
      spinRotation={0.5}
      mouseInteraction={false}
      pixelFilter={2000}
      contrast={15}
      color1="#2d1292"
      color2="#042a44"
      color3="#162325"
    />
  )
}
