import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'

import * as db from '../db/inventory.ts'

const router = Router()

// ╔════════════════╗
// ║   Get Routes   ║
// ╚════════════════╝

router.get('/', async (req, res) => {
  try {
    const skill = await db.getAllSkills()
    res.json(skill)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10)
  try {
    const skill = await db.getSkillDetailsById(id) // Pass the numeric id
    if (skill) {
      res.json(skill) // Send the skill details
    } else {
      res.status(404).json({ message: 'Skill not found' }) // Handle if no skill found
    }
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
