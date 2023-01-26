import { faFacebookSquare, faGithubSquare, faLinkedin, faSlack } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return ( 
        <footer>
            <a href="https://github.com/anonymous-a-rod" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithubSquare}></FontAwesomeIcon></a>
            <a href="https://www.facebook.com/runnerboyaaron" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookSquare}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/aaron-venema-a4797354/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="https://join.slack.com/t/aaronvenema/shared_invite/zt-1o2qx6lms-ZRjxeTMM3EFxCs6kAPI2Fg" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faSlack}></FontAwesomeIcon></a>
        </footer>
     );
}
 
export default Footer;