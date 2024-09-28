import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="homeBg">
      {/* <h1>Welcome to...</h1> */}
      <h1>Nora the internet explorer!</h1>
      <br />
      {/* <h1>Portfolio!!</h1> */}
      <p>Press x to bein</p>
      <p>
        <Link to="/aboutMe">About Me</Link>
      </p>
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/aurora-borealis-blue-moewalls-com.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Home
