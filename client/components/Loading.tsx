import React, { useEffect, useState, Suspense } from 'react'
import useSound from 'use-sound'
import '../styles/menu.scss'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'

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
          gsap.to('.backgroundVideo2', {
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

      {!isPressed && (
        <div className="start">
          {isReady ? 'Press X to start the game' : 'Loading...'}
        </div>
      )}

      {!hideBackground && (
        <video
          autoPlay
          muted
          loop
          id="bgVideo"
          className="backgroundVideo2"
          preload="auto"
        >
          <source src="/images/loadingg.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}

      <Suspense fallback={null}>{<MainMenu />}</Suspense>
    </div>
  )
}

export default Loading
