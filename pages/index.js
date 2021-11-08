import Head from 'next/head';
import HeaderMenu from '../components/HeaderMenu';
import Header from '../components/Header';

export default function Home() {
  return (
  <>
   <Head>
     <title> sorteio.com </title>
   </Head>
   <HeaderMenu />
     <Header />
  </>
  )
}
