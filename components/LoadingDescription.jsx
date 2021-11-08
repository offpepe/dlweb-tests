import style from '../styles/LoadingDescription.module.css';
import PrizeDrawDetails from './PrizeDrawDetails';
import PrizeDrawExample from './PrizeDrawExample';

export default function LoadingDescription() {
    return (
        <section className={ style.LoadingDescription }>
          <div>
            <h2> Aqui tem sorteio VIP e gratuito. <br/> Venha conhecer! </h2>
          </div>
          <section className={ style.FreeRow }>
             <PrizeDrawExample />
             <PrizeDrawDetails />
          </section>
          <section className={ style.FreeRow }>
            <PrizeDrawDetails vip />
            <PrizeDrawExample vip />
          </section>
        </section> 
    )
}