import db from './connection.ts'
import { Menu } from '../../models/Menu.ts'

export async function getAllMenus() {
  const menu = await db('menu').select()
  return menu as Menu[]
}
