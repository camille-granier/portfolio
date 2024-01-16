import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Camille Granier</title>
        <meta name="description" content="Camille Granier - front end developer portfolio" />
        <meta keywords="description" content="web development" />
        <link 
        rel="icon" 
        href="/img/circle c.svg"
        width="300"
        height="300" />
      </Head>
     <Header/>
     <Hero />
     <Work />
     <Contact />
     </div>
  )
}
