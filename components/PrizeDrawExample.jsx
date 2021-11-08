import style from '../styles/LoadingDescription.module.css';
import Image from 'next/image';

export default function PrizeDrawExample({ vip }) {
    return (
        <section className={ style.PrizeDrawExample }>
            <div className={ style.PrizeDrawExampleBody }>
                <div  className={ style.PrizeDrawExampleLeft }>
                    <Image src={ vip ? '/instaPost2.png' : '/instaPost1.png' } alt="instagram post example" width="158px" height="158px" />
                </div>
                <div className={ style.PrizeDrawExampleRight } >
                    <div className={ style.PrizeDrawExampleRightLogo }>
                        <Image src="/logo.png" alt="sorteios logo" width="21px" height="21px" />
                            <p> @sorteio </p>
                    </div>
                    <div className={ style.PrizeDrawExampleRightInfo }>
                        <div className={ style.PrizeDrawExampleRightTopics} >   
                            <figure>
                                <Image src="/messagePopUp.svg" alt="messagePopUp icon" width="42px" height="42px" />
                            </figure>
                            <div>
                                <p> Número de comentários </p>
                                <h3> { vip ? '22.754' : '492' } </h3>
                            </div>
                        </div>
                    </div>
                    <div className={ style.PrizeDrawExampleRightTopics }>
                            <figure >
                                <Image src="/time.svg" alt="hourglass icon" width="42px" height="42px" />
                            </figure>
                            <div>
                                <p> Número de comentários </p>
                                <h3> { vip ? '42 minutos' : '9 minutos' } </h3>
                            </div>
                        </div>
                    </div>
            </div>
            <footer className={ style.PrizeDrawExampleFooter } >
                <div className={ style.PrizeDrawExampleFooterCard }>
                    <div className={ style.PrizeDrawExampleFooterLeft }>
                        <Image src="/checkedIcon.svg" alt="checked icon" width="22px" height="22px" />
                    </div>
                    <div className={ style.PrizeDrawExampleFooterRight }>
                        <h3> { vip ? 'Carregamento VIP habilitado!' : 'Seu sorteio será gratuito!' } </h3>
                        <p> { vip ?  
                        'Você já adquiriu o carregamento VIP para esse post. Poderá sorteá-lo quantas vezes quiser por até 7 dias após a data da compra.' 
                          : 'Nossos sorteios são gratuítos até 20 mil comentários.' } 
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}