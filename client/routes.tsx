import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home' // Make sure this path is correct
import AboutMe from './components/About_Me/AboutMe.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
    </Route>
  </>,
)
