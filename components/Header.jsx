import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => (
    <section className={ styles.headerSection } id="#inicio">
        <div className={ styles.headerBox }>
          <div className={ styles.headerContent } >
          <h1>
              Agora somos <br/> sorteio.com
          </h1>
          <article>
              <p> A novidade da mudança também chegou por aqui.<br/> O sorteio.com está novinho em folha, mas com a mesma confiança de sempre. </p>
          </article>
          <button onClick={ () => window.open('https://sorteio.com/instagram') }>
               <span className={ styles.headerContentBtnCtt }> 
                   <Image src="/Star.svg" alt="star icon" width="22" height="22" />
                   <p> Quero sortear </p>
                </span>
          </button>
        <a href="https://sorteio.com/"><div className={ styles.toOldVersion }>
            <Image src="/arrow-left.svg" width="8px" height="12px" alt="arrow right svg" />
            <p> Usar a versão antiga </p>
        </div></a>
        </div>
          </div>
    </section>
);

export default Header;