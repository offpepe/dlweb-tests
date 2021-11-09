import Image from 'next/image';
import brazilFlag from '../public/brazil.png';
import EUAFlag from '../public/EUA.svg.png';
import FRFlag from '../public/FR.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HeaderMenu.module.css';

const LanguagesDropdown = () => (
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
)

export default LanguagesDropdown;