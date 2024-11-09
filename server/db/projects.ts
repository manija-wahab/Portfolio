import db from './connection.ts'
import { Project } from '../../models/Projects.ts'

export async function getAllProjects() {
  const project = await db('projects').select()
  return project as Project[]
}
