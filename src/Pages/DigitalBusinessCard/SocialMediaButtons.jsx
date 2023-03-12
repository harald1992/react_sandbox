import profilePicture from '../../Assets/LinkedinProfilePicture.jpg';
import styles from './SocialMediaButtons.module.css';

import { FaLinkedin, FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function SocialMediaButtons() {
    return (
        <>
            <h1>social media buttons</h1>
            <div className={`flex-row space-between ${styles.iconContainer}`}>

                <a href="https://www.twitter.com"> <FaTwitter /></a>
                <a href="https://www.facebook.com"> <FaFacebook /></a>
                <a href="https://www.instagram.com"> <FaInstagram /></a>
                <a href="https://www.github.com"> <FaGithub /></a>

            </div>
        </>

    )
}