import { useQuery } from '@tanstack/react-query'
import { useState, useEffect, useRef } from 'react'
import { Project } from '../../models/Projects'
import request from 'superagent'
import '../styles/projects.scss'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import gsap from 'gsap'

const Projects = () => {
  const { data = [], isPending } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const projects = (await request.get('/.netlify/functions/projects'))
        .body as Project[]
      return projects.sort((a, b) => a.id - b.id)
    },
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [color, setColor] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const soundUrl = '/sounds/interface-4-204501.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [play] = useSound(soundUrl, { interrupt: true, volume: 0.5 })
  const [playEnter] = useSound(soundEnter, { interrupt: true })

  useEffect(() => {
    gsap.to('.overlay', {
      opacity: 0,
      duration: 0.1,
      repeat: 2,
      yoyo: true,
      delay: 0.1,
      zIndex: 10000000,
      onComplete: () => {
        gsap.to('.overlay', { opacity: 0 })
      },
    })
  }, [])

  const navigate = useNavigate()

  // const handleMouseEnter = () => {
  //   play()
  //   console.log('played')
  // }

  const handleClick = () => {
    playEnter()
    navigate('/Levels')
  }

  const handleProjectChange = (index: number) => {
    setActiveIndex((index + data.length) % data.length)
    play()
  }

  const playSound = () => {
    playEnter()
  }

  useEffect(() => {
    if (activeIndex === 0) {
      setColor('rgba(92, 164, 235, 0.5)')
    } else if (activeIndex === 1) {
      setColor('rgba(116, 169, 252, 0.5)')
    } else if (activeIndex === 2) {
      setColor('rgba(171, 154, 217, 0.5)')
    } else if (activeIndex === 3) {
      setColor('rgba(1, 206, 165, 0.5)')
    } else if (activeIndex === 4) {
      setColor('rgba(73, 139, 225, 0.5)')
    } else if (activeIndex === 5) {
      setColor('rgba(249, 47, 47, 0.5)')
    } else if (activeIndex === 6) {
      setColor('rgba(225, 133, 183, 0.5)')
    } else if (activeIndex === 7) {
      setColor('rgba(164, 127, 212, 0.5)')
    } else if (activeIndex === 8) {
      setColor('rgba(107, 219, 255, 0.5)')
    } else if (activeIndex === 9) {
      setColor('rgba(188, 225, 58, 0.5)')
    } else {
      setColor('')
    }
  }, [activeIndex])

  useEffect(() => {
    scrollRef.current?.children[activeIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    })
  }, [activeIndex])

  const currentProject = data[activeIndex] || {}
  const developers: string[] = Array.isArray(currentProject.developers)
    ? currentProject.developers
    : JSON.parse(currentProject.developers || '[]')
  const icons: string[] = Array.isArray(currentProject.icons)
    ? currentProject.icons
    : JSON.parse(currentProject.icons || '[]')

  if (isPending)
    return (
      <div className="returnLoading">
        <div className="loading-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40%"
            height="40%"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={'animate-spin'}
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
          <div className="start">Loading...</div>
        </div>
        <img
          src="https://res.cloudinary.com/dory8iywk/image/upload/v1733798355/three_vqabtc.png"
          id="bgVideo"
          className="backgroundVideo"
          alt="blur"
        />
      </div>
    )

  return (
    <div className="project-viewer">
      <button
        style={{
          textShadow: ' 0 0 calc(1vh + 1vw)' + color,
          color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
        }}
        className="returnBut3"
        onClick={handleClick}
        onMouseEnter={playSound}
      >
        Back
      </button>
      {data.length > 0 && (
        <div className="maps-content-box">
          <h1
            className="map-h1"
            style={{
              textShadow: ' 0 0 calc(1vh + 1vw)' + color,
              color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
            }}
          >
            Map {currentProject.name}
          </h1>
          <div className="map-containers">
            <div className="map-details-container">
              <h2 className="map-summary">{currentProject.summary}</h2>
              <div className="map2">
                <h3 className="map-details">
                  <span
                    style={{
                      color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
                    }}
                  >
                    Total Time:
                  </span>{' '}
                  {currentProject.duration}
                </h3>
                <h3 className="map-details devs">
                  <span
                    style={{
                      color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
                    }}
                  >
                    Developers:
                  </span>
                  {developers.map((developer: string, index: number) => (
                    <p key={index}>{developer}</p>
                  ))}
                </h3>
              </div>
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="enter-button"
                onClick={playSound}
                onMouseEnter={playSound}
                style={{
                  color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
                }}
              >
                Enter Map!
              </a>
            </div>
            <div className="map-about-container">
              <h3
                style={{
                  color: `${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
                }}
              >
                About this Map
              </h3>
              <p className="about-p">{currentProject.description}</p>
            </div>
          </div>
        </div>
      )}
      <div className="project-nav">
        <div className="map3">
          {icons.length > 0 ? (
            icons.map((icon: string, index: number) => (
              <img
                rel="preload"
                src={`/images/inventory/${icon}`}
                alt={`icon ${index}`}
                key={index}
                style={{
                  filter: `drop-shadow(0 0 calc(1vh + 1vw) ${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')})`,
                  border: `calc(0.1vh + 0.1vw) solid ${color.replace(/rgba\((\d+), (\d+), (\d+), .+\)/, 'rgb($1, $2, $3)')}`,
                }}
              />
            ))
          ) : (
            <p>No icons available</p>
          )}
        </div>
        <div className="project-nav-contain" ref={scrollRef}>
          {data.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectChange(index)}
              className={index === activeIndex ? 'active' : ''}
              aria-label={`View ${project.name}`}
              style={{
                backgroundImage: `url(${project.image})`,
                transition: 'transform 0.5s ease',
                transform: index === activeIndex ? 'scale(1.1)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      <div className="project-controls">
        <button
          onClick={() => handleProjectChange(activeIndex - 1)}
          aria-label="Previous project"
          className="project"
        ></button>
        <button
          onClick={() => handleProjectChange(activeIndex + 1)}
          aria-label="Next project"
          className="project"
          style={{ rotate: '180deg' }}
          onMouseEnter={playSound}
        >
          〱
        </button>
      </div>
      <div className="project-details">
        {data.map((project, index) => (
          <img
            rel="preload"
            key={project.id}
            src={project.image}
            alt={project.name}
            className={index === activeIndex ? 'fade-in' : ''}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === activeIndex ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
