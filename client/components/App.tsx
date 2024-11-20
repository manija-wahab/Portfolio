import { Outlet } from 'react-router-dom'
import { MusicProvider } from '../hooks/MusicContext'
import { useState, useEffect } from 'react'
import '../styles/main.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <MusicProvider>
      <div className="app">
        {isLoading ? (
          <div className="loadingAnimation">
            <img
              src="/images/ps.gif"
              alt="play station logos"
              rel="preload"
              className="loadingAnimation"
            />
            {/* <video
              className="loadingAnimation"
              autoPlay
              loop
              muted
              style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
            >
              <source src="/images/playstation.mp4" type="video/mp4" />
            </video> */}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </MusicProvider>
  )
}

export default App
