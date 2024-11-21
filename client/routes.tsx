import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import AboutMe from './components/AboutMe.tsx'
import Levels from './components/Levels.tsx'
import Inventory from './components/Inventory/Inventory.tsx'
import Item from './components/Inventory/Item.tsx'
import MainMenu from './components/MainMenu.tsx'
import Projects from './components/Projects.tsx'
import Loading from './components/Loading.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Loading />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Levels" element={<Levels />} />
      <Route path="/Inventory" element={<Inventory />} />
      <Route path="/Inventory/Skills/:id" element={<Item />} />
      <Route path="/MainMenu" element={<MainMenu />} />
      <Route path="/Maps" element={<Projects />} />
    </Route>
  </>,
)
