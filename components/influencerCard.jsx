import style from '../styles/WhoUses.module.css'
import Image from "next/image";

export default function InfluencerCard({ influencer: {  sign, followers }, active, index }) {
    return (
        <div className={ style.influencerCard } style={ { border: ( active === index ? '2px solid #FA6615' : '1px solid #00000027'  ) } } >
            <div className={ style.influencerCardHeader }>
                <Image src="/linkIcon.svg" width="30px" height="30px" alt="link icon" />
            </div>
            <div  style={ { background: (active === index ? 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)' : '#82899B') } } className={ style.influencerCardPhoto }>
                <Image src={ `/${sign}.png` } width="150px"  height="154px" alt="link icon" />
            </div>
            <div className={ style.influencerCardBody } >
                <h4 style={ { color: ( active === index ? '#FA6615' : '#82899B') } } >{ sign }</h4>
                <p>{ `${followers} seguidores no` } <br/> Instagram </p>
            </div>
        </div>
    )
}