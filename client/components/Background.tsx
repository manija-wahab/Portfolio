import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const Background = () => {
  const navigate = useNavigate()

  const pressX = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'x':
        gsap.to('.crossX', {
          zIndex: 500000,
          opacity: 1,
          scale: 5,
          duration: 1,
          ease: 'power.1',
          onComplete: () => {
            gsap.to('.fade', {
              zIndex: 5000000,

              opacity: 1,
              duration: 1,
              onComplete: () => navigate('/Home'),
            })
          },
        })

        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', pressX)
    return () => {
      window.removeEventListener('keydown', pressX)
    }
  }, [])

  return (
    <div className="backgroundContainer">
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/snowfall-black-myth-wukong-moewalls-com.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
      <div className="crossSign">
        <img
          style={{
            scale: 0,
            opacity: 0,
            position: 'absolute',
            height: '100%',
            zIndex: '0',
          }}
          src="/images/shapes/PlayStationCircle.svg.png"
          alt="shape cross"
          className="crossX"
        />
      </div>
      <div
        className="fade"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          backgroundColor: 'black',
          zIndex: '0',
        }}
      ></div>
      <div className="backgroundTextBox">
        <h1>
          Nora the internet explorer&apos;s <br /> Portfolio
        </h1>
        <h3>Press x to enter</h3>
      </div>

      <div className="background">
        <div className="top">
          <img
            src="/images/shapes/PlayStationCircle.svg.png"
            alt="shape circle"
            className="shape"
          />
          <img
            src="/images/shapes/PlayStationCross.svg.png"
            alt="shape cross"
            className="shape"
          />
        </div>
        <div className="bottom">
          {' '}
          <img
            src="/images/shapes/PlayStationSquare.svg.png"
            alt="shape square"
            className="shape"
          />
          <img
            src="/images/shapes/PlayStationTriangle.svg.png"
            alt="shape triangle"
            className="shape"
          />
        </div>
      </div>
    </div>
  )
}

export default Background
