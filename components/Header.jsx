import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => (
    <section className={ styles.headerSection }>
        <div className={ styles.headerBox }>
          <div className={ styles.headerContent } >
          <h1>
              Agora somos <br/> sorteio.com
          </h1>
          <article>
              <p> A novidade da mudança também chegou por aqui.<br/> O sorteio.com está novinho em folha, mas com a mesma confiança de sempre. </p>
          </article>
          <button>
               <span className={ styles.headerContentBtnCtt }> 
                   <Image src="/Star.svg" alt="star icon" width="30" height="30" />
                   <p> Quero sortear </p>
                </span>
          </button>
          </div>
        </div>
    </section>
);

export default Header;