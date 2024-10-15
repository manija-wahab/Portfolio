import Info from './Info'
import Avatar from './Avatar'
import '../../styles/aboutMe.scss'

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <div className="aboutMeBlurBox">
        <div className="aboutMeBlur">
          <Info />
        </div>
      </div>
      <Avatar />

      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/shaman-village-elden-ring-shadow-of-the-erdtree-moewalls-com(1).mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default AboutMe
