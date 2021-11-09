import style from '../styles/HowItWorks.module.css';
import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section className={ style.HiW }>
            <div className={ style.HiWtitle }>
                <h2> Como funciona? </h2>
            </div>
            <div className={ style.HiWbody }>
              <div className={ style.HiWcontent }>
                  <h3>  Prático, rápido e <br/> muuuuuuito seguro! </h3>
                  <article>
                      <p> Com o sorteio.com não tem segredo, é só digitar o seu @instagram, e-mail, seguir o passo a passo e pronto! Seu sorteio tá no jeito.  </p>
                      <p> 
                          <strong>Ainda tem dúvidas sobre como sortear? </strong><br/>
                          Sem crise, entre em contato com nosso atendimento pelo chat ou e-mail. Nossa equipe está sempre preparada pra te ajudar ;)
                      </p>
                  </article>
                  <button>
                      <div className={ style.HiWbtnContent }>
                      <Image src="/instagramIcon.svg" alt="instagram ico"  width="19px" height="19px" />
                      <p>Sortear no Instagram </p>
                      </div>
                  </button>
              </div>
              <div className={ style.HiWPlayer }>
                  <Image src="/playerBackground.png" alt="video frame" width="550px" height="338px" />
              </div>
            </div>
        </section>
    );
}