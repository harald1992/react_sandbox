import { FaStar } from 'react-icons/fa';
import styles from './AirBnbExperiencesCard.module.css';
import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';

function AirBnbExperiencesCard(props) {
    let card = props.card;
    // imgSrc
    // badge
    // star
    // price
    // text
    return (
        <>
            <div className={styles.card}>
                <div className={styles.badge}>{card.badge}</div>
                <img src={card.imgSrc} />

                <p className={styles.starrow}><FaStar /> {card.star} (6) &#x2022; USA</p>
                <p>{card.text}</p>
                <p><b>From {card.price}</b> / person</p>
            </div>
        </>
    )
}

export default function AirBnbExperiencesCards() {
    // imgSrc
    // badge
    // star
    // price
    //text
    const cardList = [
        { imgSrc: profilePicture, badge: 'Sold Out', star: 5, price: 169, text: 'Life Lessons With Andy' },
        { imgSrc: profilePicture, badge: 'Available', star: 4, price: 155, text: 'Swimming Course' }
    ]

    return (
        <>
            <div className={styles.container}>
                {cardList.map((card, i) => (
                    <AirBnbExperiencesCard card={card} key={i} />
                ))
                }

            </div>
        </>
    )
}