import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { MusicProvider } from '../hooks/MusicContext'
import '../styles/main.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadAssets = () => {
      const assetsToPreload = [
        '/sounds/2/two.mp3',
        '/images/levels/one.png',
        '/images/levels/twotwo.png',
        '/images/levels/enter.png',
        '/images/levels/four.png',
        '/images/ezgif.com-speed(2).gif',
        '/images/Japan/japanese-town-cloudy-day-moewalls-com.mp4',
        '/images/cyberpunk-blade-runner.1920x1080.mp4',
      ]

      const preloadPromises = assetsToPreload.map((asset) => {
        return new Promise<void>((resolve, reject) => {
          const element = asset.endsWith('.mp4')
            ? document.createElement('video')
            : new Image()

          element.src = asset

          if (asset.endsWith('.mp4')) {
            const videoElement = element as HTMLVideoElement
            videoElement.oncanplaythrough = () => resolve()
            videoElement.onerror = () =>
              reject(new Error(`Failed to load video: ${asset}`))
          } else {
            const imageElement = element as HTMLImageElement
            imageElement.onload = () => resolve()
            imageElement.onerror = () =>
              reject(new Error(`Failed to load image: ${asset}`))
          }
        })
      })

      Promise.all(preloadPromises)
        .then(() => setIsLoading(false))
        .catch((error) => {
          console.error('Error loading assets:', error)
          setIsLoading(false)
        })
    }

    preloadAssets()

    const timer = setTimeout(() => {
      setIsLoading(false)
      console.log('Fallback: Assets did not load in time.')
    }, 5000)

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
