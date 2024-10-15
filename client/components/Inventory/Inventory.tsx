import Skills from './Skills'
import '../../styles/Inventory.scss'

const Inventory = () => {
  return (
    <div className="inventory-container">
      <Skills />
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/cyberpunk-blade-runner.1920x1080.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Inventory
