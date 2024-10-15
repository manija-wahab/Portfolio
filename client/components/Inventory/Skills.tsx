import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import '../../styles/Inventory.scss'
import { Item } from '../../../models/Inventory'
import { Link } from 'react-router-dom'

const Skills = () => {
  const { data: skills = [] } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const response = await request.get('/api/v1/skills')
      return response.body as Item[]
    },
  })

  const emptyItemsCount = Math.ceil((skills.length + 1) / 10) * 50

  return (
    <div className="skills-container">
      <div className="skills-header-box">
        <h1 className="skills-header">Skills Inventory</h1>
        <p className="skills-text">Click to view details (More Incoming :3)</p>
      </div>
      <div className="skills-grid-container">
        {skills.map((skill) => (
          <Link
            to={`/Inventory/Skills/${skill.name}`}
            key={skill.id}
            className="skills-grid-item"
          >
            <img
              src={skill.icon}
              className="skill-image"
              alt={skill.name}
              width="100%"
              height="100%"
            />
          </Link>
        ))}
        {/* Render empty grid items */}
        {Array.from({ length: emptyItemsCount }).map((_, index) => (
          <div key={`empty-${index}`} className="skills-grid-item empty"></div>
        ))}
      </div>
    </div>
  )
}

export default Skills
