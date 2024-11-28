import React, { useEffect, useState, Suspense } from 'react'
import useSound from 'use-sound'
import '../styles/menu.scss'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'
import '../styles/main.scss'

const MainMenu = React.lazy(() => import('./MainMenu'))

const Loading = () => {
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [playEnter] = useSound(soundEnter, { interrupt: true, preload: true })
  const [isReady, setIsReady] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [hideBackground, setHideBackground] = useState(false)
  const navigate = useNavigate()

  const triggerStart = () => {
    if (isReady) {
      playEnter()
      gsap.to('.overlay1', {
        opacity: 1,
        duration: 0.1,
        repeat: 2,
        yoyo: true,
        onComplete: () => {
          navigate('/MainMenu')
          gsap.to('.animate-spin', {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
              setHideBackground(true)
              setIsPressed(true)
            },
          })
          gsap.to('.overlay1', { opacity: 0, duration: 0.1 })
        },
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'x' || event.key === 'X') && isReady) {
        triggerStart()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isReady])

  useEffect(() => {
    const handleScreenClick = () => {
      triggerStart()
    }

    window.addEventListener('click', handleScreenClick)

    return () => {
      window.removeEventListener('click', handleScreenClick)
    }
  }, [isReady])

  useEffect(() => {
    const preloadMainMenu = setTimeout(() => {
      setIsReady(true)
    }, 5000)

    return () => clearTimeout(preloadMainMenu)
  }, [])

  return (
    <div>
      <div className="overlay1"></div>

      {!hideBackground && (
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
          {!isPressed && (
            <div className="start">
              {isReady ? 'Press X to start' : 'Loading...'}
            </div>
          )}
        </div>
      )}

      <Suspense fallback={null}>{<MainMenu />}</Suspense>
    </div>
  )
}

export default Loading
