import Link from 'next/link';
import Image from 'next/image';
import brazilFlag from '../public/brazil.png';
import EUAFlag from '../public/EUA.svg.png';
import FRFlag from '../public/FR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HeaderMenu.module.css';
import LanguagesDropdown from './LanguagesDropdown';

const HeaderMenu = () => (
    <div>
    <header className={ styles.flexRowAround }>
       <section className={ styles.headerTitle }>
         <h1> sorteio.com </h1>
       </section>
       <section className={ styles.flexRowBetween }>
       <nav className={ styles.headerNav }> 
         <Link href="" > Inicio </Link>
         <Link href="" > Preços </Link>
         <Link href="" > Como sortear? </Link>
       </nav>
       <div>
         <LanguagesDropdown />
       </div>
       </section>
    </header>
    <main>
     
    </main>
  </div> 
)

export default HeaderMenu;