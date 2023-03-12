import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';
import styles from './DigitalBusinessCard.module.css';

import { FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import SocialMediaButtons from './SocialMediaButtons';




export default function DigitalBusinessCard() {
    return (
        <>
            <div className={styles.container}>
                <img src={profilePicture} alt="" />
                <h1>Harald Hiemstra</h1>
                <p>Scrum Master & Developer</p>

                <div className={styles.spreadbuttons}>
                    <a href="mailto:harald_1992@hotmail.com"><FaEnvelope /> Email</a>
                    <a href="https://www.linkedin.com/in/harald-hiemstra/"> <FaLinkedin /> Linkedin</a>
                </div>


                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae provident asperiores! Animi expedita porro excepturi cumque, repellendus enim ea velit adipisci fugit accusantium quis possimus ad voluptatem, veniam nemo.</p>


                <h2>Interests</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae provident asperiores! Animi expedita porro excepturi cumque, repellendus enim ea velit adipisci fugit accusantium quis possimus ad voluptatem, veniam nemo.</p>

                <SocialMediaButtons />
            </div>

        </>

    )
}