import { FaAirbnb } from 'react-icons/fa';
import styles from './AirBnbExperiencesHero.module.css';
import { FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';

export default function AirBnbExperiencesHero() {

    return (
        <>
            <div className={styles.hero}>
                <img src="https://picsum.photos/100/200" width="100" height="100" />
                <img src={profilePicture} width="100" height="100" />
                <img src="https://picsum.photos/100/200" width="100" height="100" />
                <img src={profilePicture} width="100" height="100" />
                <img src="https://picsum.photos/100/200" width="100" height="100" />
            </div>
            <h1>Online Experiences</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus odit officia dignissimos quod, explicabo sed voluptatibus quisquam nobis rerum dicta doloremque cum numquam excepturi ut reiciendis aperiam dolores voluptates est!</p>
        </>
    )
}