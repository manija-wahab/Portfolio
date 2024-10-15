import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import type { AboutMe } from '../../../models/AboutMe'
import { infoAnimations } from '../../styles/animations'
import { useEffect } from 'react'

const Info = () => {
  const { data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await request.get('/api/v1/aboutMe')
      return response.body as AboutMe[]
    },
  })

  useEffect(() => {
    if (data) {
      infoAnimations()
    }
  }, [data])

  return (
    <div className="profile-container">
      {/* 'AboutMe' objects */}
      {data?.map((info) => (
        <div key={info.id} className="profile-card">
          {/* Giant name title */}
          <h2 className="profile-name">Noorya</h2>
          <h3 className="profile-title">Character stats and information</h3>
          <div className="profile-content-box">
            <div className="profile-content">
              {/* Each card is wrapped in a checkbox and label */}
              <input
                type="checkbox"
                id={`card-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`card-${info.id}`} className="info-card">
                <h2 className="card-title">Name</h2>
                <ul className="card-details">
                  {JSON.parse(info.name).map((name: string, index: number) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </label>

              {/* Repeat for each info card */}
              <input
                type="checkbox"
                id={`code-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`code-${info.id}`} className="info-card">
                <h2 className="card-title code">Code Name</h2>
                <p className="card-details">{info.code_name}</p>
              </label>

              <input
                type="checkbox"
                id={`quest-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`quest-${info.id}`} className="info-card">
                <h2 className="card-title quest">Current Quest</h2>
                <p className="card-details">{info.current_quest}</p>
              </label>

              <input
                type="checkbox"
                id={`level-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`level-${info.id}`} className="info-card">
                <h2 className="card-title level">Level</h2>
                <p className="card-details">{info.level}</p>
              </label>

              <input
                type="checkbox"
                id={`status-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`status-${info.id}`} className="info-card">
                <h2 className="card-title status">Status</h2>
                <p className="card-details">{info.status}</p>
              </label>

              <input
                type="checkbox"
                id={`species-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`species-${info.id}`} className="info-card">
                <h2 className="card-title species">Species</h2>
                <ul className="card-details">
                  <li> {info.species}</li>
                </ul>
              </label>

              <input
                type="checkbox"
                id={`likes-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`likes-${info.id}`} className="info-card">
                <h2 className="card-title likes">Likes</h2>
                <ul className="card-details">
                  {JSON.parse(info.likes).map((like: string, index: number) => (
                    <li key={index}>{like}</li>
                  ))}
                </ul>
              </label>

              <input
                type="checkbox"
                id={`dislikes-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`dislikes-${info.id}`} className="info-card">
                <h2 className="card-title dislikes">Dislikes</h2>
                <p className="card-details">{info.dislikes}</p>
              </label>

              <input
                type="checkbox"
                id={`combat-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`combat-${info.id}`} className="info-card">
                <h2 className="card-title combat">Combat Moves</h2>
                <ul className="card-details">
                  {JSON.parse(info.combat_moves).map(
                    (move: string, index: number) => (
                      <li key={index}>{move}</li>
                    ),
                  )}
                </ul>
              </label>

              <input
                type="checkbox"
                id={`story-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`story-${info.id}`} className="info-card">
                <h2 className="card-title story">Origin Story</h2>
                <p className="card-details">{info.origin_story}</p>
              </label>

              <input
                type="checkbox"
                id={`achievements-${info.id}`}
                className="card-input"
              />
              <label htmlFor={`achievements-${info.id}`} className="info-card">
                <h2 className="card-title achievements">Achievements</h2>
                <p className="card-details">{info.achievements}</p>
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Info
