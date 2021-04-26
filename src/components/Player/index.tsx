import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { usePlayer } from '../../contexts/PlayerContext'
import styles from "./styles.module.scss"

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export function Player() {
  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    tooglePlay,
    setPlayingState,
    playNext,
    playPrevius,
    hasNext,
    hasPrevius
  } = usePlayer()

  const episode = episodeList[currentEpisodeIndex]
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) {
      console.log('empty')
      return
    }
    if (audioRef.current) {
      console.log('playing')
      audioRef.current.play()
    } else {
      console.log('paused')
      audioRef.current.pause()
    }
  }, [isPlaying])

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
          <span>00:00</span>

          <div className={styles.slider}>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#84d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#84d361', borderWidth: 4 }}
              />
            ) : (<div className={styles.emptySlider} />
            )}
          </div>

          <span>00:00</span>
        </div>

        {
          episode && (
            <audio
              src={episode.url}
              ref={audioRef}
              autoPlay
              onPlay={() => { setPlayingState(true) }}
              onPause={() => { setPlayingState(false) }}
            />
          )}

        <div className={styles.buttons}>
          <button type="button" disabled={!episode}>
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

          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </button>

        </div>
      </footer>
    </div>
  )
}