import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { usePlayer } from '../../contexts/PlayerContext'
import styles from "./styles.module.scss"

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'

export function Player() {
  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    tooglePlay,
    toogleLooping,
    toogleShuffle,
    setPlayingState,
    playNext,
    playPrevius,
    hasNext,
    hasPrevius,
    isLooping,
    isShuffling,
    clearPlayerState
  } = usePlayer()

  const episode = episodeList[currentEpisodeIndex]
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  function setupProgressListener() {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong> Tocando agora {episode?.title} </strong>
      </header>

      {episode
        ? (
          <div className={styles.currentPlayer}>
            <Image
              width={592}
              height={592}
              src={episode.thumbnail}
              alt={episode.title}
              objectFit="cover"
            />
            <strong> {episode.title} </strong>
            <span> {episode.members} </span>

          </div>)
        : (
          <div className={styles.emptyPlayer}>
            <strong> Selecione um podcast para ouvir </strong>
          </div>
        )}

      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>{convertDurationToTimeString(progress)}</span>

          <div className={styles.slider}>
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#84d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#84d361', borderWidth: 4 }}
              />
            ) : (<div className={styles.emptySlider} />
            )}
          </div>

          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        {
          episode && (
            <audio
              src={episode.url}
              ref={audioRef}
              autoPlay
              loop={isLooping}
              onEnded={handleEpisodeEnded}
              onPlay={() => { setPlayingState(true) }}
              onPause={() => { setPlayingState(false) }}
              onLoadedMetadata={setupProgressListener}
            />
          )}

        <div className={styles.buttons}>
          <button
            type="button"
            disabled={!episode || episodeList.length === 1}
            onClick={toogleShuffle}
            className={isShuffling ? styles.isActive : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button" onClick={playPrevius} disabled={!episode || !hasPrevius}>
            <img src="/play-previous.svg" alt="Voltar" />
          </button>

          <button
            type="button"
            className={styles.playButton}
            disabled={!episode}
            onClick={tooglePlay}>
            {isPlaying
              ? (<img src="/pause.svg" alt="Pausar" />)
              : (<img src="/play.svg" alt="Tocar" />)
            }
          </button>

          <button type="button" onClick={playNext} disabled={!episode || !hasNext} >
            <img src="/play-next.svg" alt="Seguir" />
          </button>

          <button
            type="button"
            disabled={!episode}
            onClick={toogleLooping}
            className={isLooping ? styles.isActive : ''}
          >
            <img src="/repeat.svg" alt="Repetir" />
          </button>

        </div>
      </footer>
    </div>
  )
}