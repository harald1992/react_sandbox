import { FaStar } from 'react-icons/fa';
import styles from './AirBnbExperiencesCard.module.css';
import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';
import { cardList } from './AirBnbDb.js';

function AirBnbExperiencesCard(props) {
    // let card = props.card;
    const { img, badge, rating, reviewCount, country, price, text } = props;

    const lala = [<h1 key={0}>lala1</h1>, <h1 key={1}>lalala2</h1>];
    return (
        <>
            <div style={{ fontSize: '2px' }}>{lala}</div>

            <div className={styles.card}>
                {badge !== 'Available' && <div className={styles.badge}>{badge}</div>}
                <img src={img} />

                <p className={styles.starrow}><FaStar /> {rating} ({reviewCount}) &#x2022; {country}</p>
                <p>{text}</p>
                <p><b>From {price}</b> / person</p>
            </div>
        </>
    )
}

export default function AirBnbExperiencesCards() {
    // imgSrc
    // badge
    // rating
    // price
    //text

    // let cardList = cardList;
    const cardList2 = cardList.map((card, i) => <AirBnbExperiencesCard {...card} key={i} />);

    return (
        <>
            <div className={styles.container}>{cardList2}</div>

            {/* <div className={styles.container}>
                {cardList.map((card, i) => (
                    <AirBnbExperiencesCard card={card} key={i} />
                ))}
            </div> */}
        </>
    )
}