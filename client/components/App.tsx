import { Outlet } from 'react-router-dom'
import { MusicProvider } from '../hooks/MusicContext'

function App() {
  return (
    <MusicProvider>
      <div className="app">
        <Outlet />
      </div>
    </MusicProvider>
  )
}

export default App
