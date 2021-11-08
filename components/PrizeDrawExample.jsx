import style from '../styles/LoadingDescription.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle   } from '@fortawesome/free-solid-svg-icons';

export default function PrizeDrawExample() {
    return (
        <div className={ style.PrizeDrawExample }>
            <div className={ style.PrizeDrawExampleBody }>
                <div  className={ style.PrizeDrawExampleLeft }>
                    <Image src="/instaPost1.png" alt="instagram post example" width="158px" height="158px" />
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
                                <h3> 492 </h3>
                            </div>
                        </div>
                    </div>
                    <div className={ style.PrizeDrawExampleRightTopics }>
                            <figure >
                                <Image src="/time.svg" alt="hourglass icon" width="42px" height="42px" />
                            </figure>
                            <div>
                                <p> Número de comentários </p>
                                <h3> 9 minutos </h3>
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
                        <h3> Seu sorteio será gratuito! </h3>
                        <p> Nossos sorteios são gratuítos até 20 mil comentários. </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}