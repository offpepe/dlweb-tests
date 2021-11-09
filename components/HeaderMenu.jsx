import styles from '../styles/HeaderMenu.module.css';
import LanguagesDropdown from './LanguagesDropdown';

const HeaderMenu = () => (
    <header className={ styles.flexRowAround }>
       <section className={ styles.headerTitle }>
         <h1> sorteio.com </h1>
       </section>
       <section className={ styles.flexRowBetween }>
       <nav className={ styles.headerNav }> 
         <a href="#inicio" > Inicio </a>
         <a href="#preços" > Preços </a>
         <a href="#como-sortear" > Como sortear? </a>
       </nav>
       <div>
         <LanguagesDropdown />
       </div>
       </section>
    </header>
)

export default HeaderMenu;