import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return (
        <>
            <ul className={styles.social_list}>
                <li>
                <footer><FaFacebook /></footer>
                </li>
                <li>
                <footer><FaInstagram /></footer>
                </li>
                <li>
                <footer><FaLinkedin /></footer>
                </li>
            </ul>
        </>
    )
}
export default Footer