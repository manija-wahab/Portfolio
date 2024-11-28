import { useQuery } from '@tanstack/react-query'
import type { AboutMe } from '../../models/AboutMe'
import request from 'superagent'
import '../styles/aboutMe.scss'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'

const AboutMe = () => {
  const { data, isPending } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await request.get('/.netlify/functions/aboutMe')
      return response.body as AboutMe[]
    },
  })

  const soundUrl = '/sounds/interface-9-204779.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [playEnter] = useSound(soundEnter, { interrupt: true })
  const [play] = useSound(soundUrl, { interrupt: true, volume: 0.8 })
  const navigate = useNavigate()

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
          src="https://res.cloudinary.com/dey3ta01p/image/upload/v1732589872/one_gwoimj.png"
          id="bgVideo"
          className="backgroundVideo"
          alt="blur"
        />
      </div>
    )

  const handleMouseEnter = () => {
    play()
    console.log('played')
  }

  const handleClick = () => {
    playEnter()
    console.log('played enter sound')
    navigate('/Levels')
  }

  return (
    <div className="aboutMeContainer">
      <button
        className="returnBut1"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      >
        Back
      </button>
      <div className="container">
        <h1 className="AboutNameBox">Noorya</h1>
        {data?.map((info) => (
          <div key={info.id} className="info-set-1 info-container">
            <div className="item1" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Character</p>
              <p className="itemDet">{info.code_name}</p>
            </div>
            <div className="item1" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Level</p>
              <p className="itemDet">{info.level}</p>
            </div>
            <div className="item1" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Side Quests</p>
              <p className="itemDet">{info.current_quest}</p>
            </div>

            <div className="item1" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Species</p>
              <p className="itemDet">{info.species}</p>
            </div>
            <div className="item1" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Achievements</p>
              <p className="itemDet">{info.achievements}</p>
            </div>
          </div>
        ))}
        <div className="avatarContainer">
          <video
            className="avatar"
            src="https://res.cloudinary.com/dey3ta01p/video/upload/v1732512147/ezgif.com-gif-to-webm-converter_d1qjzi.webm"
            autoPlay
            muted
            loop
            rel="preload"
          >
            <source
              src="https://res.cloudinary.com/dey3ta01p/video/upload/v1732512147/ezgif.com-gif-to-webm-converter_d1qjzi.webm"
              type="video/mp4"
            ></source>
          </video>
        </div>
        {data?.map((info) => (
          <div key={info.id} className="info-set-2 info-container">
            <div className="item2" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Status</p>
              <p className="itemDet">{info.status}</p>
            </div>
            <div className="item2" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Likes</p>
              {JSON.parse(info.likes).map((likes: string, index: number) => (
                <p className="itemDet" key={index}>
                  • {likes}
                </p>
              ))}
              <p className="itemDet"></p>
            </div>
            <div className="item2" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Dislikes</p>
              <p className="itemDet">{info.dislikes}</p>
            </div>
            <div className="item2" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Combat Moves</p>
              {JSON.parse(info.combat_moves).map(
                (combat: string, index: number) => (
                  <p className="itemDet" key={index}>
                    • {combat}
                  </p>
                ),
              )}
            </div>
            <div className="item2" onMouseEnter={handleMouseEnter}>
              <p className="itemTitle">Origin Story</p>
              <p className="itemDet">{info.origin_story}</p>
            </div>
          </div>
        ))}
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
          src="https://res.cloudinary.com/dey3ta01p/video/upload/v1732498932/japanese-town-cloudy-day-moewalls-com_ik9sjt.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default AboutMe
