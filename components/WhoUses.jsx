import style from '../styles/WhoUses.module.css'
import InfluencerCard from './influencerCard';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function WhoUses () {
    const [active, setActive] = useState(0);
    const [influencers] = useState([
        {
            sign: '@alecacaushow',
            followers: '1,3Mi'
        },
        {
            sign: '@toguro',
            followers: '4,4Mi',
        },
        {
            sign: '@bunitotrader',
            followers: '275K',
        },
        {
            sign: '@deiveleonardo',
            followers: '9,7Mi',
        },
        {
            sign: '@thiago.nigro',
            followers: '5,5Mi',
        }
    ]);

    const handleActive = (direction) => {
        if (direction === '>' && active < influencers.length - 1) {
            setActive(active + 1);
        }
        if (direction === '<' && active > 0) {
            setActive(active - 1);
        }
    }

    return (
        <section className={ style.WhoUses }>
            <div className={ style.WhoUsesTitle }>
            <h2> 💞 </h2>
            <h2> Quem usou, amou! </h2>
            <p> Veja só quantos influenciadores com mais de 300 mil <br/> seguidores já passaram pela gente! </p>
            </div>
            <div className={ style.arrowBox }>
                <div className={ style.arrow } onClick={ () => handleActive('<') }>
                    <Image src="/carouselArrow.svg" width="16px" height="32px" alt="carousel arrow" />
                </div>
                <div style={ { transform: 'scale(-1,1)' } } className={ style.arrow } onClick={ () => handleActive('>') }>
                    <Image src="/carouselArrow.svg" width="16px" height="32px" alt="carousel arrow" />
                </div>
            </div>
            <div className={ style.WhoUsesCarousel }>   
                { influencers.map((influencer, index) => <InfluencerCard influencer={ influencer } key={ index } index={ index } active={ active } />) }
            </div>
        </section>
    )
}