import { FaAirbnb } from 'react-icons/fa';
import styles from './AirBnbExperiences.module.css';
import AirBnbExperiencesCards from './AirBnbExperiencesCard';
import AirBnbExperiencesHeader from './AirBnbExperiencesHeader';
import AirBnbExperiencesHero from './AirBnbExperiencesHero';

export default function AirBnbExperiences() {

    return (
        <>
            <div className={styles.page}>
                <AirBnbExperiencesHeader />
                <AirBnbExperiencesHero />
                <AirBnbExperiencesCards />
                <br /><br /><br /><br />
            </div>
        </>
    )
}