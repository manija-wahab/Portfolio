import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'

import * as db from '../db/projects.ts'
const router = Router()
// ╔════════════════╗
// ║   Get Routes   ║
// ╚════════════════╝
router.get('/', async (req, res) => {
  try {
    const project = await db.getAllProjects()
    res.json(project)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
// ╔═════════════════╗
// ║   Post Routes   ║
// ╚═════════════════╝
// ╔══════════════════╗
// ║   Patch Routes   ║
// ╚══════════════════╝
// ╔═══════════════════╗
// ║   Delete Routes   ║
// ╚═══════════════════╝
export default router
