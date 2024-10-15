import { Link } from 'react-router-dom'
import '../styles/levels.scss'

const Levels = () => {
  return (
    <div className="levels-container">
      <div className="levels-text">
        <div className="levels-text-container">
          <h1 className="levels-title">Levels</h1>
          <p className="levels-sentence">
            Select a level, you must find the key to <br /> unlock the next
            level
          </p>
        </div>
      </div>
      <div className="levels-layout">
        <div className="levels-box">
          <Link to="/AboutMe" className="level-one level">
            level one
          </Link>
          <Link to="/Inventory" className="level-two level">
            sjfbalbdjfsaef
          </Link>
          <Link to="/Projects" className="level-three level">
            sjfbalbdjfsaef
          </Link>
          <Link to="/Links" className="level-four level">
            sjfbalbdjfsaef
          </Link>
        </div>
      </div>
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/samurai-revenge-moewalls-com.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Levels
