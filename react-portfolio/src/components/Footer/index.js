import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,
        faGithub,
        faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (
        <div className="social">
         <a href="#" className="facebook">
             <FontAwesomeIcon icon={faFacebook} size="4x"  />
         </a>
         <a href="#" className="github">
             <FontAwesomeIcon icon={faGithub} size="4x"  />
         </a>
         <a href="#" className="linkedin">
             <FontAwesomeIcon icon={faLinkedin} size="4x"  />
         </a>
        </div>
    );
}

export default Footer;