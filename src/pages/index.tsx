// import { Header } from '../components/Header'
import { GetStaticProps } from 'next'

type Episode = {
  id: string,
  title: string,
  members: string,
  published_at: string,
  thumbnail: string,
  description: string
}

type HomeProps = {
  episodes: Episode[]
}

export default function Home(props: HomeProps) {
  return (
    <>
      <h1> oi </h1>
      <p> {JSON.stringify(props.episodes)}</p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:4333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8
  }
}