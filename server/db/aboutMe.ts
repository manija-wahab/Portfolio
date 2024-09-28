import db from './connection.ts'
import { AboutMe } from '../../models/AboutMe.ts'

export async function getAllAboutMeInfo() {
  const info = await db('aboutMe').select()
  return info as AboutMe[]
}
