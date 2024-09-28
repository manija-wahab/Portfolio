import Info from './Info'
import Avatar from './Avatar'

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <Avatar />
      <Info />
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/retrowave-city-purple-neon-moewalls-com.mp3"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default AboutMe
