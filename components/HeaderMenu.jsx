import Link from 'next/link';
import Image from 'next/image';
import brazilFlag from '../public/brazil.png';
import EUAFlag from '../public/EUA.svg.png';
import FRFlag from '../public/FR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HeaderMenu.module.css';

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
         <div style={ { border: '1px 1px solid black' } } className={ styles.languagesDD } >
           <span
             className={ styles.flexRowAround }
             style={ { width: '80px' } }
           >
             <Image src={ brazilFlag } width='30px' height='30px' alt="brazil flag" />
             PT
             <FontAwesomeIcon icon={ faChevronDown } />
           </span>
         <div className={ styles.languagesDDcontent }>
           <div className={ styles.flexRowAround } style={ { margin: '15px 0' } } > <Image src={ EUAFlag } width='30px' height='30px' alt="brazil flag" /> ES </div>
           <div className={ styles.flexRowAround } > <Image src={ FRFlag } width='30px' height='30px' alt="brazil flag" /> FR </div>
         </div>
         </div>
       </div>
       </section>
    </header>
    <main>
     
    </main>
  </div> 
)

export default HeaderMenu;