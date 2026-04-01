import "./header.css"

export default function Header({children}) {
  return (
    <>
      <div className="header">
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
