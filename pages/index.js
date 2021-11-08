import Head from 'next/head';
import HeaderMenu from '../components/HeaderMenu';
import Header from '../components/Header';
import WhatsNew from '../components/WhatsNew';

export default function Home() {
  return (
  <>
    <Head>
      <title> sorteio.com </title>
    </Head>
    <HeaderMenu />
    <Header />
    <WhatsNew />
  </>
  )
}
