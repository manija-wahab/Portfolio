import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home' // Make sure this path is correct
import AboutMe from './components/About_Me/AboutMe.tsx'
import Background from './components/Background.tsx'
import Levels from './components/Levels.tsx'
import Inventory from './components/Inventory/Inventory.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Background />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Background" element={<Background />} />
      <Route path="/Levels" element={<Levels />} />
      <Route path="/Inventory" element={<Inventory />} />
    </Route>
  </>,
)
