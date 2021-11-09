import styles from '../styles/Prices.module.css';

export default function Prices() {
    return (
        <section className={ styles.Prices } id="preços">
            <span className={ styles.PricesTop } />
            <div style={ { padding: '128px', height: '542px' } }>
            <div  className={ styles.PricesContent }>
                <h2>
                  Conheça os nossos preços
                </h2>
                <p>
                  Adquira o carregamento VIP e faça sorteios de forma rápida e segura!<br/>
                  E se você tem mais de 300 mil seguidores, aproveite as vantagens<br/>
                  exclusivas sorteio.com para influenciadores digitais. 
                </p>
            </div>
            <button onClick={ () => window.open('https://sorteio.com/instagram') } > Quero conhecer </button>
            </div>
            <span className={ styles.PricesBottom } />
        </section>
    )
}