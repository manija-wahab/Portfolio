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

  useEffect(() => {
    const preloadMainMenu = setTimeout(() => {
      setIsReady(true)
    }, 5000)

    return () => clearTimeout(preloadMainMenu)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'x' || event.key === 'X') && isReady) {
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

    window.addEventListener(
      'keydown',
      handleKeyDown as unknown as EventListener,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown as unknown as EventListener,
      )
    }
  }, [playEnter, isReady])

  return (
    <div>
      <div className="overlay1"></div>

      {!isPressed && (
        <div className="start">
          {isReady ? 'Press X to start game' : 'Loading...'}
        </div>
      )}

      {!hideBackground && (
        <img
          id="bgVideo"
          className="backgroundVideo2"
          rel="preload"
          src="/images/psa.gif"
          alt="playstation icons"
        />
      )}

      <Suspense fallback={null}>{<MainMenu />}</Suspense>
    </div>
  )
}

export default Loading
