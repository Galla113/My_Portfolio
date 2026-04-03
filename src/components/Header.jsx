import "./header.css"
import GrainientBG from "./Backgrounds/Grainient/GrainientBG"

export default function Header({ children }) {
  return (
    <>
      <div className="header">
        <GrainientBG />
        <div className="borderBottom" >
          <div className="buttons">
            <button>Home</button>
            <button>About</button>
            <button>Skills</button>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}
