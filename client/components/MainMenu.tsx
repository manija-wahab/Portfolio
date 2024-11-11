import useSound from 'use-sound'
import '../styles/menu.scss'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const MainMenu = () => {
  const soundUrl = '/sounds/90s-game-ui-2-185095.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [play] = useSound(soundUrl, { interrupt: true })
  const [playEnter] = useSound(soundEnter, { interrupt: true, preload: true })
  const [Display, setDisplay] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'x' || event.key === 'X') {
        playEnter()
        handleClick('/Levels')
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
  }, [playEnter])

  const handleMouseEnter = () => {
    play()
    console.log('played')
  }

  const detailsClick = (action: boolean) => {
    playEnter()
    setDisplay(action)
  }

  const handleClick = (path: string) => {
    playEnter()
    console.log('played enter sound')

    gsap.to('.overlay1', {
      opacity: 1,
      duration: 0.1,
      repeat: 2,
      yoyo: true,
      onComplete: () => {
        if (path.startsWith('http')) {
          window.open(path, '_blank')
        } else {
          navigate(path)
        }
        gsap.to('.overlay1', { opacity: 0, duration: 0.1 })
      },
    })
  }

  const downloadFiles = (files: { url: string; fileName: string }[]) => {
    files.forEach(({ url, fileName }) => {
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }

  return (
    <div className="menu-container">
      <div className="overlay1"></div>
      <div className="start">Press X to start game</div>
      {Display && (
        <div className="details-box">
          <button
            onMouseEnter={handleMouseEnter}
            className="close"
            onClick={() => detailsClick(false)}
          >
            ✖
          </button>
          <h3>
            Email: <br /> nooryawahab@gmail.com
          </h3>
          <h3>
            Phone: <br /> 02108899287
          </h3>
          <h3>
            Location: <br /> Auckland NZ
          </h3>
        </div>
      )}

      <div className="menu-header">
        <h1>Portfolio</h1>
      </div>
      <div className="menu-box-container">
        <div className="menu-box">
          <button
            className="option"
            onMouseEnter={handleMouseEnter}
            onClick={() => handleClick('/Levels')}
          >
            Start Game!
          </button>
          <button
            className="option"
            onMouseEnter={handleMouseEnter}
            onClick={() => handleClick('https://github.com/manija-wahab')}
          >
            Github
          </button>
          <button
            className="option"
            onMouseEnter={handleMouseEnter}
            onClick={() =>
              handleClick('https://www.linkedin.com/in/noorya-wahab/')
            }
          >
            Linkedin
          </button>
          <button
            className="option"
            onMouseEnter={handleMouseEnter}
            onClick={() =>
              downloadFiles([
                { url: '/files/CV.pdf', fileName: 'My_CV.pdf' },
                {
                  url: '/files/Certificate.pdf',
                  fileName: 'My_Certificate.pdf',
                },
              ])
            }
          >
            Cv & Cert
          </button>
          <button
            className="option"
            onMouseEnter={handleMouseEnter}
            onClick={() => detailsClick(true)}
          >
            Details
          </button>
        </div>
      </div>
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/Japan/tokyo-street-sakura-moewalls-com.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default MainMenu
