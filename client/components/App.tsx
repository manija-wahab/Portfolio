import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { MusicProvider } from '../hooks/MusicContext'
import '../styles/main.scss'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasHovered, setHasHovered] = useState(false) // Track if the user has hovered
  const [isVideoReady, setIsVideoReady] = useState(false) // Track video load status

  useEffect(() => {
    // Preload the specific video first
    const preloadVideo = () => {
      const video = document.createElement('video')
      video.src = '/images/Japan/tokyo-street-sakura-moewalls-com.mp4'
      video.preload = 'auto' // Ensure the video loads as soon as possible
      video.oncanplaythrough = () => {
        setIsVideoReady(true) // Video is ready to play
        preloadAssets() // Start preloading other assets once the video is ready
      }
      video.load()
    }

    const preloadAssets = async () => {
      const assetsToPreload = [
        '/images/levels/one.png',
        '/images/levels/twotwo.png',
        '/images/levels/enter.png',
        '/images/levels/four.png',
        '/images/ezgif.com-speed(2).gif',
        '/images/Japan/japanese-town-cloudy-day-moewalls-com.mp4',
        '/images/cyberpunk-blade-runner.1920x1080.mp4',
      ]

      try {
        const loadPromises = assetsToPreload.map((asset) => {
          if (asset.endsWith('.mp4')) {
            // Preload video
            const video = document.createElement('video')
            video.src = asset

            return new Promise<void>((resolve, reject) => {
              video.onloadeddata = () => resolve() // Use a video-specific event
              video.onerror = () =>
                reject(new Error(`Failed to load video: ${asset}`))
            })
          } else {
            // Preload image
            const img = new Image()
            img.src = asset

            return new Promise<void>((resolve, reject) => {
              img.onload = () => resolve()
              img.onerror = () =>
                reject(new Error(`Failed to load image: ${asset}`))
            })
          }
        })

        await Promise.all(loadPromises)
        console.log('All assets preloaded!')
      } catch (error) {
        console.error('Error preloading assets:', error)
      }
    }

    preloadVideo() // Start by preloading the video

    // Simulate a loading time for other resources
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Adjust the loading time as needed

    return () => clearTimeout(timer)
  }, [])

  // Trigger music once the user moves the mouse
  const handleMouseMove = () => {
    if (!hasHovered) {
      setHasHovered(true)
      // Trigger music start here if it's not already playing
    }
  }

  return (
    <MusicProvider>
      <div className="app" onMouseMove={handleMouseMove}>
        {isLoading || !isVideoReady ? (
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
