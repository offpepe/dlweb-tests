import style from '../styles/Footer.module.css';
import Image from 'next/image';
import LanguagesDropdown from './LanguagesDropdown';

export default function Footer() {
const fbPopup = 'https://www.facebook.com/v2.3/dialog/oauth?app_id=2677253322537762&auth_type=&cbt=1636429955403&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8b999f79b7dec%26domain%3Dsorteio.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsorteio.com%252Fff544405baa4a%26relation%3Dopener&client_id=2677253322537762&display=popup&domain=sorteio.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fsorteio.com%2Finstagram&locale=en_US&logger_id=f18e8eccb8dac1&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8c55763a5137c%26domain%3Dsorteio.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsorteio.com%252Fff544405baa4a%26relation%3Dopener%26frame%3Df1cd10ac692ec3c&response_type=token%2Csigned_request%2Cgraph_domain&return_scopes=false&scope=public_profile%2C%20email%2C%20instagram_basic%2C%20pages_show_list&sdk=joey&version=v2.3';
    return (
        <footer>
            <section className={ style.FooterTopics }>
                <div className={ style.FooterCopyRights } >
                    <h4> sorteio.com </h4>
                    <p> Copyright © 2021 Sorteio.com.<br/> Todos os direiros reservados. </p>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Sorteios </h5>
                    <a href="https://sorteio.com/"> Começar um sorteio </a>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Produto </h5>
                    <a href="#preços"> Preços </a>
                </div>
                <div className={ style.FooterTopic }>
                    <h5> Suporte </h5>
                    <a href="#como-sortear"> Como sortear? </a>
                    <a href="mailto:contato@sorteiogram.com"> Fale conosco </a>
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
                            <button onClick={ () => window.open('https://www.instagram.com/sorteiogram/') }> Seguir </button>
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
                      <button onClick={ () => window.open('https://chrome.google.com/webstore/detail/sorteiocom/gjpkngahkcdfjnelojifgmdjfocdllne') }>
                          <div className={ style.FooterExtentionBtnCtt }>
                          <Image src="/chrome.svg" width="27px" height="27px" alt="chrome icon" /> 
                          <h5> Instalar extensão </h5>
                          </div>
                      </button>
                      <button onClick={ () => window.open(fbPopup, 'Entrar com Facebook','width=600, height=700') }>
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
                        <a href="https://old.sorteio.com/termos-de-uso.html"> Termos de serviço </a>
                        <a href="https://old.sorteio.com/termos-de-uso.html"> Política de privacidade </a>
                    </div>
                    <div className={ style.FooterTailCttR }>
                        <p> Feito com o ❤️💚💜 </p>
                        <p> Versão 2.0 </p>
                        <LanguagesDropdown />
                    </div>
                </div>
            </section>
        </footer>
    )
}