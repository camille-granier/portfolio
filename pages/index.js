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
        <meta name="description" content="Camille Granier - front end developer" />
        <meta name="description" content="Camille Granier is a front-end developer with a passion for creative and interactive design" />
        <meta name="image" content="https://https://www.camille-granier.com/"></meta>
        <meta name="author" content="Camille Granier"></meta>
        <meta property="og:title" content="Camille Granier - front end developer"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="https://www.camille-granier.com/"></meta>
        <meta property="og:url" content="https://www.camille-granier.com/"></meta>
        <meta property="og:description" content="Camille Granier is a front-end developer with a passion for creative and interactive design"></meta>
        <link 
        rel="icon" 
        href="/img/logo c.svg"
        width="380"
        height="380" />
      </Head>
     <Header/>
     <Hero />
     <Work />
     <Contact />
     </div>
  )
}
