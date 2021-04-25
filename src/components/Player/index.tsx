import Image from 'next/image'
import { useContext } from 'react'
import { PlayerContext } from '../../contexts/PlayerContext'
import styles from "./styles.module.scss"

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export function Player() {
  const { currentEpisodeIndex, episodeList } = useContext(PlayerContext)
  const episode = episodeList[currentEpisodeIndex]

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

        <div className={styles.buttons}>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Embaralhar" />
          </button>

          <button type="button" className={styles.playButton} disabled={!episode}>
            <img src="/play.svg" alt="Embaralhar" />
          </button>

          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Embaralhar" />
          </button>

          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir" />
          </button>

        </div>
      </footer>
    </div>
  )
}