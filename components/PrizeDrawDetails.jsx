import style from '../styles/LoadingDescription.module.css';
import Image from 'next/image';

export default function PrizeDrawDetails({ vip }) {

    const freeDescription = () => (
    <p>
    Escolha uma publicação com até 20 mil comentários e <br/> sorteie ela gratuitamente! Para fazer isso é muito fácil:<br/> basta conectar seu Instagram com o Facebook ou baixar <br/> nossa extensão oficial para Google Chrome.
    </p>
    );
    const VIPdescription = () => (
        <p>
           Com o carregamento VIP você pode sortear posts com <br/> quantos comentários quiser e ainda deixar o carregamento <br/> acontecer em nuvem, podendo desligar o computador e ir <br/> fazer qualquer outra coisa…  
        </p>
    );

    const topics = () => (vip ? (<ul>
        <li>
            <h4 style={ { margin: '3px 0' } }>Execução do sorteio totalmente em nuvem</h4>
            <p style={ { margin: '0' } }>(Não perde o carregamento se desligar o computador);</p>
        </li>
        <li>
            <h4>Até 7 dias após a compra para sortear o mesmo post <br/> quantas vezes quiser;</h4>
        </li>
        <li>
            <h4>Acesso instantâneo aos sorteios em carregamento;</h4>
        </li>
        <li>
            <h4> Carregamento de mais de 20 mil comentários. </h4>
        </li>
    </ul>) : (
        <ul>
        <li>
            <h4>100% dos comentários válidos carregados;</h4>
        </li>
        <li>
            <h4>Suporte dedicado;</h4>
        </li>
        <li>
            <h4>Conexão segura usando API oficial do Instagram;</h4>
        </li>
    </ul>
    )) 

    return (
        <section className={ style.FreeDrawDetails }>
            <h2>{ vip ? '💫' : '🎉' }</h2>
            <div className={ style.FreeDrawDetailsContent }>
                <h3> { `Carregamento ${ vip ? 'VIP' : 'gratuito'}` } </h3>
                { vip ? VIPdescription() : freeDescription()  }
            </div>
            { topics() } 
            <a href="#como-sortear"  > 
                Veja em Como Funciona
                <Image
                  className={ style.FreeDrawDetailsContentImg }
                  src="/arrow.svg"
                  width="8px"
                  height="10px"
                  alt="arrow vector"
                />
            </a>
        </section>
    )
}