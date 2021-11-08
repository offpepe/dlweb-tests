import style from '../styles/LoadingDescription.module.css';
import PrizeDrawExample from './PrizeDrawExample';

export default function LoadingDescription() {
    return (
        <section className={ style.LoadingDescription }>
          <div>
            <h2> Aqui tem sorteio VIP e gratuito. <br/> Venha conhecer! </h2>
          </div>
          <section className={ style.FreeRow }>
            <div style={ { border: '1px 1px solid black', width: '100%' } }>
             <PrizeDrawExample />
            </div>
          </section>
        </section> 
    )
}