// import { Link } from 'react-router-dom'
import '../styles/levels.scss'
import useSound from 'use-sound'
import '../styles/menu.scss'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect } from 'react'

const Levels = () => {
  const soundUrl =
    '/sounds/2/click-buttons-ui-menu-sounds-effects-button-7-203601.mp3'

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
      zIndex: 10000000,
      onComplete: () => {
        gsap.to('.overlay', { opacity: 0 })
      },
    })
  }, [])

  const handleMouseEnter = () => {
    play()
    console.log('played')
  }

  const handleClick = (path: string) => {
    playEnter()
    console.log('played enter sound')

    gsap.to('.overlay', {
      opacity: 1,
      duration: 0.1,
      repeat: 2,
      yoyo: true,
      onComplete: () => {
        navigate(path)
      },
    })
  }

  return (
    <div className="levels-container">
      <div className="overlay"></div>
      <h1 className="select">Select A Level</h1>
      <div className="padding-container">
        <div className="levels-layout">
          <button
            className="level level-one"
            onClick={() => handleClick('/AboutMe')}
            onMouseEnter={handleMouseEnter}
          >
            <div className="level-content"></div>
          </button>
          <button
            className="level level-two"
            onClick={() => handleClick('/Inventory')}
            onMouseEnter={handleMouseEnter}
          >
            <div className="level-content"></div>
          </button>
          <button
            className="level level-three"
            onClick={() => handleClick('/Maps')}
            onMouseEnter={handleMouseEnter}
          >
            <div className="level-content"></div>
          </button>
          <button
            className="level level-four"
            onClick={() => handleClick('/MainMenu')}
            onMouseEnter={handleMouseEnter}
          >
            <div className="level-content"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Levels
