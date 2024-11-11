import { useQuery } from '@tanstack/react-query'
import type { AboutMe } from '../../models/AboutMe'
import request from 'superagent'
import '../styles/aboutMe.scss'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'

const AboutMe = () => {
  const { data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await request.get('/api/v1/aboutMe')
      return response.body as AboutMe[]
    },
  })

  const soundUrl = '/sounds/interface-9-204779.mp3'
  const soundEnter = '/sounds/arcade-ui-14-229514.mp3'
  const [playEnter] = useSound(soundEnter, { interrupt: true })
  const [play] = useSound(soundUrl, { interrupt: true, volume: 0.8 })
  const navigate = useNavigate()

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
          <img
            className="avatar"
            src="/images/ezgif.com-speed(2).gif"
            alt="avatar"
          />
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
      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/Japan/japanese-town-cloudy-day-moewalls-com.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default AboutMe
