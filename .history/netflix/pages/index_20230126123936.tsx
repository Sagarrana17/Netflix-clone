import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import { Movie } from '../typings'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { useRecoilValue } from 'recoil'


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
 
}


const Home = ({ netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
  } : Props) => { 

  const { loading } = useAuth()
  const showModal = useRecoilValue(modal)

  console.log(netflixOriginals)
  return (
    <div className="relative h-screen bg-gradient-to-b ] lg:h-[140vh]">
      <Head>
        <title>Home-Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Section */}
             <Header/>
      {/* Header Section End */}
      <main className="relative pl-4 pb-24 lg:sapce-y-24 lg:pl-16">
          <Banner netflixOriginals={netflixOriginals}/> 
        <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* Model */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      
    },
  }
}