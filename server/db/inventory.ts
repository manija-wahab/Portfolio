import db from './connection.ts'
import { Item } from '../../models/Inventory.ts'

export async function getAllSkills() {
  const info = await db('skills').select()
  return info as Item[]
}

export async function getSkillDetailsById(id: number) {
  const skillId = await db('skills').where({ id }).first()
  return skillId
}
