import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import type { AboutMe } from '../../../models/AboutMe'

const Info = () => {
  const { data } = useQuery({
    queryKey: ['info'],
    queryFn: async () => {
      const response = await request.get('/api/v1/aboutMe')
      return response.body as AboutMe[]
    },
  })

  return (
    <div className="infoContainer">
      {data?.map((info) => (
        <div key={info.id}>
          <p>
            <strong>Name:</strong>
          </p>
          <ul>
            {JSON.parse(info.name).map((name: string, index: number) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <p>
            <strong>Street Name:</strong> {info.street_name}
          </p>
          <p>
            <strong>Current Quest:</strong> {info.current_quest}
          </p>
          <p>
            <strong>Level:</strong> {info.level}
          </p>
          <p>
            <strong>Status:</strong> {info.status}
          </p>

          <p>
            <strong>Species:</strong>
          </p>
          <ul>
            {JSON.parse(info.species).map((species: string, index: number) => (
              <li key={index}>{species}</li>
            ))}
          </ul>

          <p>
            <strong>Likes:</strong>
          </p>
          <ul>
            {JSON.parse(info.likes).map((like: string, index: number) => (
              <li key={index}>{like}</li>
            ))}
          </ul>

          <p>
            <strong>Dislikes:</strong> {info.dislikes}
          </p>

          <p>
            <strong>Combat Moves:</strong>
          </p>
          <ul>
            {JSON.parse(info.combat_moves).map(
              (move: string, index: number) => (
                <li key={index}>{move}</li>
              ),
            )}
          </ul>

          <p>
            <strong>Origin Story:</strong> {info.origin_story}
          </p>
          <p>
            <strong>Achievements:</strong> {info.achievements}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Info
