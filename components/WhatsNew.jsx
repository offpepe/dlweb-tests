import styles from '../styles/WhatsNew.module.css'

export default function WhatsNew() {
    const  topics = [
        {  
            icon: '/Cronometro.svg',
            title: 'Rápido',
            description: 'Com nossa extensão oficial e conexão com o Facebook, seu sorteio vai ser carregado com muita velocidade',
        },
        {
            icon: '/escudo.svg',
            title: 'Seguro',
            description: 'Não precisa de cadastro! Nossa conexão é feita utilizando a API oficial do Instagram',
        },
        {
            icon: '/influencer.svg',
            title: 'Usado por influencers',
            description: 'Somos a plataforma de sorteios mais queridinha dos influenciadores do Brasil 😉',
        },
        {
            icon: '/message.svg',
            title: '100% dos comentários',
            description: 'Carregamos 100% dos comentários válidos, deixando seu sorteio mais confiável e autêntico possível!',
        },
    ];
    return (
    <section className={ styles.WN }>
        <artice className={ styles.WNContent }>
          <h2>  Mudamos o nome e evoluímos <br/> ainda mais o processo de sorteio. </h2>
          <p>  o visual é novo, mas a qualidade é a de sempre! Continuamos sendo a melhor plataforma <br/> de sorteios do Brasil.
               Tem dúvidas?! Confira as vantagens de usar sorteio.com.
          </p>
        </artice>
    </section>
    )
}