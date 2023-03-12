import { FaAirbnb } from 'react-icons/fa';
import styles from './AirBnbExperiencesHeader.module.css';

export default function AirBnbExperiencesHeader() {

    return (
        <>
            <div className={styles.header}>
                <FaAirbnb /> AirBnbExperiences
            </div>

        </>
    )
}