import Head from 'next/head';
import HeaderMenu from '../components/HeaderMenu';
import Header from '../components/Header';
import WhatsNew from '../components/WhatsNew';
import LoadingDescription from '../components/LoadingDescription';
import WhoUses from '../components/WhoUses';
import Prices from '../components/Prices';
import Extention from '../components/Extention';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function Home() {
  return (
  <>
    <Head>
      <title> sorteio.com </title>
    </Head>
    <HeaderMenu />
    <Header />
    <WhatsNew />
    <LoadingDescription />
    <WhoUses />
    <Prices />
    <Extention />
    <HowItWorks />
    <Footer />
  </>
  )
}
