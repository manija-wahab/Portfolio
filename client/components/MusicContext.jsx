import { createContext, useContext, useState, useEffect } from 'react'
import useSound from 'use-sound'

const MusicContext = createContext()

export const useMusic = () => useContext(MusicContext)

export const MusicProvider = ({ children }) => {
  const backgroundMusicUrl = '/sounds/2/two.mp3'
  const [volume, setVolume] = useState(1.5)
  const [play, { stop, pause, sound }] = useSound(backgroundMusicUrl, {
    loop: true,
    volume: volume,
  })
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    play()
    setPlaying(true)

    return () => stop()
  }, [play, stop])

  const toggleMusic = () => {
    if (playing) {
      pause()
    } else {
      play()
    }
    setPlaying(!playing)
  }

  const changeVolume = (newVolume) => {
    setVolume(newVolume)
    if (sound) {
      sound.volume(newVolume)
    }
  }

  return (
    <MusicContext.Provider
      value={{ toggleMusic, isPlaying: playing, changeVolume, volume }}
    >
      {children}
    </MusicContext.Provider>
  )
}
