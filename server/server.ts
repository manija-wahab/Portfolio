import express from 'express'
import * as Path from 'node:path'

import menuRoutes from './routes/menu.ts'
import aboutMeRoutes from './routes/aboutMe.ts'
import skillsRoutes from './routes/inventory.ts'
import projectRoutes from './routes/projects.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/menus', menuRoutes)
server.use('/api/v1/aboutMe', aboutMeRoutes)
server.use('/api/v1/skills', skillsRoutes)
server.use('/api/v1/projects', projectRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
