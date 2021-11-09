import style from '../styles/Footer.module.css';
import Image from 'next/image';
import LanguagesDropdown from './LanguagesDropdown';

export default function Footer() {
    return (
        <footer>
            <section className={ style.FooterTopics }>
                <div className={ style.FooterCopyRights } >
                    <h4> sorteio.com </h4>
                    <p> Copyright © 2021 Sorteio.com.<br/> Todos os direiros reservados. </p>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Sorteios </h5>
                    <p> Começar um sorteio </p>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Produto </h5>
                    <p> Preços </p>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Suporte </h5>
                    <p> Como sortear? </p>
                    <p> Fale conosco </p>
                </div>
                <div className={ style.followUs } >
                    <h3>Não perca as novidades!</h3>
                    <div className={ style.instagramCard }>
                        <div>
                            <Image src="/logo.png" alt="sorteios logo" width="28px" height="28px" />
                        </div>
                        <div>
                            <p> Siga a gente! </p>
                            <h5> @sorteio </h5>
                        </div>
                        <div>
                            <button> Seguir </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={ style.FooterExtention }>
                <div className={ style.FooterExtentionCard }>
                  <div className={ style.FooterExtentionCtt }>
                    <Image src="/like.svg" width="62px" height="62px" alt="like icon "/>
                    <div>
                      <h4> Quer a melhor experiência com sorteios? </h4>
                      <p> 
                          Recomendamos que instale nossa extensão oficial <br/>
                          para navegador ou conecte-se com o Facebook.
                      </p>
                    </div>
                  </div>
                  <div>
                      <button>
                          <div className={ style.FooterExtentionBtnCtt }>
                          <Image src="/chrome.svg" width="27px" height="27px" alt="chrome icon" /> 
                          <h5> Instalar extensão </h5>
                          </div>
                      </button>
                      <button>
                          <div className={ style.FooterExtentionBtnCtt }>
                          <Image src="/facebook.svg" width="27px" height="27px" alt="chrome icon" /> 
                          <h5> Conectar com Facebook </h5>
                          </div>
                      </button>
                  </div>
                  </div>
            </section>
            <section className={ style.FooterTail }>
                <div className={ style.FooterTailCtt }>
                    <div className={ style.FooterTailCttL } >
                        <a href=""> Termos de serviço </a>
                        <a href=""> Política de privacidade </a>
                    </div>
                    <div className={ style.FooterTailCttR }>
                        <p> Versão 2.0 </p>
                        <LanguagesDropdown />
                    </div>
                </div>
            </section>
        </footer>
    )
}