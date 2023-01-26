import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header(){

    return ( 
        <header className="header">
            <img src="/aaron.jpg" alt="" className='avatar'/>
            <h1>Aaron Venema</h1>
            <h4>Frontend Developer</h4>
            <a href='https://aaronvenema.com/'  target="_blank" rel="noreferrer"><p className='email'>aaronvenema.com</p></a>
            <a href='mailto:aaron1venema@gmail.com'  target="_blank" rel="noreferrer"><button><FontAwesomeIcon icon={faEnvelope}/>   Email</button></a>
            <a href="https://www.linkedin.com/in/aaron-venema-a4797354/" target="_blank" rel="noreferrer"><button className='linkedin-btn'><FontAwesomeIcon icon={faLinkedin}/>   LinkedIn</button></a>        
        </header>
     )
  }
 
export default Header;