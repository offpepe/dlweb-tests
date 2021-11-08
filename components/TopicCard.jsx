import style from '../styles/WhatsNew.module.css';
import Image from 'next/image';

export default function TopicCard({ topic }) {
    const {  icon, title, description } = topic;
    return (
        <div className={ style.topicCard } >
            <div className={ style.topicCardHeader } >
                <figure className={ style.topicCardIMG } style={ { width: 60, height: 60 } } >
                    <Image src={ icon } alt={`${title} icon`} width="36" height="40"  />
                </figure>
                    <h3>{ title }</h3>
            </div>
            <div className={ style.topicCardBody }>
                <p>{ description }</p>
            </div>

        </div>
    )
}