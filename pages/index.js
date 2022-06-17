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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Rosario:wght@300&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Rosario:wght@300&display=swap" rel="stylesheet"/>
      </Head>
     <Header/>
     <Hero />
     <Work />
     <Contact />
     </div>
  )
}
