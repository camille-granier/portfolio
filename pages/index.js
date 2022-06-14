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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero />
     <Work />
     <Contact />
     </div>
  )
}
