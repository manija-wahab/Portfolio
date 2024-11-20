import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { MusicProvider } from '../hooks/MusicContext'
import '../styles/main.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadAssets = () => {
      const assetsToPreload = [
        '/images/Japan/tokyo-street-sakura-moewalls-com.mp4',
        '/images/levels/one.png',
        '/images/levels/twotwo.png',
        '/images/levels/enter.png',
        '/images/levels/four.png',
        '/images/ezgif.com-speed(2).gif',
        '/images/Japan/japanese-town-cloudy-day-moewalls-com.mp4',
        '/images/cyberpunk-blade-runner.1920x1080.mp4',
      ]

      assetsToPreload.forEach((asset) => {
        const img = new Image()
        const video = document.createElement('video')

        img.src = asset
        video.src = asset
        video.load()
      })
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      preloadAssets()
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
              alt="Loading..."
              rel="preload"
              className="loadingAnimation"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </MusicProvider>
  )
}

export default App
