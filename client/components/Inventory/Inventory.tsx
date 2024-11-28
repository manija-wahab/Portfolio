import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import '../../styles/Inventory.scss'
import '../../styles/main.scss'

import { Item } from '../../../models/Inventory'
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect } from 'react'

const Inventory = () => {
  const { data = [], isPending } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await request.get('/.netlify/functions/skills')
      return response.body as Item[]
    },
  })

  const soundUrl =
    '/sounds/click-buttons-ui-menu-sounds-effects-button-6-203600.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [play] = useSound(soundUrl, { interrupt: true, volume: 1.5 })
  const [playEnter] = useSound(soundEnter, { interrupt: true })
  const navigate = useNavigate()

  useEffect(() => {
    gsap.to('.overlay', {
      opacity: 0,
      duration: 0.1,
      repeat: 2,
      yoyo: true,
      delay: 0.1,
      onComplete: () => {
        gsap.to('.overlay', { opacity: 0 })
      },
    })
  }, [])

  const handleMouseEnter = () => {
    play()
    console.log('played')
  }

  const handleClick = () => {
    playEnter()
    console.log('played enter sound')
    navigate('/Levels')
  }

  const playSound = () => {
    playEnter()
  }

  const skills = Array.isArray(data) ? data : []
  const emptyItemsCount = Math.ceil((data?.length ?? 0 + 1) / 10) * 50

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
          src="https://res.cloudinary.com/dey3ta01p/image/upload/v1732589899/two_by21fc.png"
          id="bgVideo"
          className="backgroundVideo"
          alt="blur"
        />
      </div>
    )

  return (
    <div className="inventory-container">
      <button
        className="returnBut2"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        Back
      </button>
      <div className="skills-container">
        <div className="skills-header-box">
          <h1 className="skills-header">Inventory</h1>
        </div>
        <div className="skills-grid-container">
          {skills?.map((skill) => (
            <Link
              to={`/Inventory/Skills/${skill.id}`}
              key={skill.id}
              className="skills-grid-item"
              onMouseEnter={handleMouseEnter}
              onClick={playSound}
            >
              <img
                rel="preload"
                src={skill.icon}
                className="skill-image"
                alt={skill.name}
                width="100%"
                height="100%"
              />
            </Link>
          ))}
          {/* Render empty grid items */}
          {Array.from({ length: emptyItemsCount }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="skills-grid-item empty"
            ></div>
          ))}
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        id="bgVideo"
        className="backgroundVideo"
        rel="preload"
      >
        <source
          src="https://res.cloudinary.com/dey3ta01p/video/upload/v1732492918/cyberpunk-blade-runner.1920x1080_cvi9zz.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Inventory
