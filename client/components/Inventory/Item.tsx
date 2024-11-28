import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import type { Item } from '../../../models/Inventory'
import request from 'superagent'
import '../../styles/Inventory.scss'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'

const Item = () => {
  const { id } = useParams()

  const { data, isPending } = useQuery({
    queryKey: ['skills', id],
    queryFn: async () => {
      const response = await request.get(`/.netlify/functions/item/${id}`)
      return response.body as Item
    },
  })

  const soundUrl =
    '/sounds/click-buttons-ui-menu-sounds-effects-button-6-203600.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [play] = useSound(soundUrl, { interrupt: true })
  const [playEnter] = useSound(soundEnter, { interrupt: true })
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    play()
    console.log('played')
  }

  const handleClick = () => {
    playEnter()
    console.log('played enter sound')
    navigate('/Inventory')
  }

  // if (isPending)
  //   return (
  //     <video
  //       autoPlay
  //       muted
  //       loop
  //       id="bgVideo"
  //       className="backgroundVideo2"
  //       preload="auto"
  //     >
  //       <source src="/images/loadingg.mp4" type="video/mp4" />
  //       Your browser does not support the video tag.
  //     </video>
  //   )

  return (
    <div className="item-container">
      <button
        className="returnBut2 itemB"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        ◄
      </button>
      <div className="item-box">
        <div className="item-section-one">
          <div className="item-icon-box">
            {isPending || !data ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80%"
                height="80%"
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
            ) : (
              <img src={data.icon} alt="item icon" className="item-icon" />
            )}
          </div>

          <h1 className="item-name">{data?.name}</h1>
          <div className="confidence-bar-box">
            <p className="confidence-text">Confidence Level</p>
            <div className="confidence-bar">
              <div
                className="confidence-position"
                style={{ width: `${data?.confidence_level}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="item-section-two">
          <h1 className="item-experience-title">Experience</h1>
          {isPending || !data ? (
            <div className="svgBox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50%"
                height="50%"
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
            </div>
          ) : (
            <div className="item-text-box">
              <h3 className="item-text">{data?.experience}</h3>
            </div>
          )}
        </div>
      </div>

      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="https://res.cloudinary.com/dey3ta01p/video/upload/v1732492918/cyberpunk-blade-runner.1920x1080_cvi9zz.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Item
