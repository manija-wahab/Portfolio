import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import type { Item } from '../../../models/Inventory'
import request from 'superagent'
import '../../styles/Inventory.scss'

const Item = () => {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await request.get(`/api/v1/skills/${id}`)
      return response.body
    },
  })

  return (
    <div className="item-container">
      <div className="item-box">
        <div className="item-section-one">
          <img src={data.icon} alt="item icon" />

          <h1>{data.name}</h1>
        </div>
        <div className="item-section-two">
          <h1>Experience</h1>
          <div className="item-text-box">
            <h3 className="item-text">{data.experience}</h3>
          </div>
        </div>
      </div>

      <video autoPlay muted loop id="bgVideo" className="backgroundVideo">
        <source
          src="/images/cyberpunk-blade-runner.1920x1080.mp4"
          type="video/mp4"
        ></source>
        Your browser does not support HTML5 video.
      </video>
    </div>
  )
}

export default Item
