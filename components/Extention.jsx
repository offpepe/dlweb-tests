import style from '../styles/Extention.module.css';
import Image from 'next/image'

export default function Extention () {
    return (
        <section className={ style.Extention }>
          <div className={ style.ExtentionContent } >
              <div>
              <h2> Nossa extensão é oficial! </h2>
              <p> 
                  Existem duas maneiras de fazer o sorteio gratuito: ou você conecta <br/>
                  com o Facebook ou baixa nossa extensão oficial no Chrome.<br/>
                  Não tem segredo nenhum, e o melhor, no próximo sorteio não é<br/>
                  necessário fazer nada disso novamente. É só chegar, e sortear!
              </p>
              </div>
              <button>
                  <div className={ style.btnContent }>
                    <Image src="/chrome.svg" alt="chrome icon" width="27" height="27"  />
                  <h3>
                      Instalar extensão oficial
                    </h3>
                  </div>
              </button>
          </div>
          <span className={ style.ExtentionBottom } />
        </section>
    )
}