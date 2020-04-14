import React, { useContext } from 'react';
import { LangContext } from '../context/LangContext';

const Contact = () => {
    
    const { heb } = useContext(LangContext);
    const page = heb ? (
        <div className="contact">
            <div className="details">
                <h2>אם גם אתם מעוניינים להצטרף למגוון הפעילויות - פשוט תשלחו הודעה <br></br><i class="fas fa-smile-wink"></i></h2>
                <h2><i className="fab fa-whatsapp"></i> 052-6968133</h2>
                <h2><i class="fas fa-envelope-square"></i>&nbsp;Email: yaron.palchik@gmail.com</h2>
                <h1><a className="contact-links" target="_blank" href="https://www.facebook.com/kravmagaclasstlv/"><i className="fab fa-facebook"></i>&nbsp;Self Defense TLV</a></h1>
                <h1><a className="contact-links" href="https://www.instagram.com/yaronpalchik/" target="_blank"><i class="fab fa-instagram"></i>&nbsp;yaronpalchik</a></h1>
            </div>
        </div>
    ) : (
        <div className="contact">
            <div className="details">
                <h2>If you're intrested in one of the activities, just contact me<br></br> <i class="fas fa-smile-wink"></i></h2>
                <h2><i className="fab fa-whatsapp"></i> 972-(0)52-6968133</h2>
                <h2><i class="fas fa-envelope-square"></i>&nbsp;Email: yaron.palchik@gmail.com</h2>
                <h1><a className="contact-links" target="_blank" href="https://www.facebook.com/kravmagaclasstlv/"><i className="fab fa-facebook"></i>&nbsp;Self Defense TLV</a></h1>
                <h1><a className="contact-links" href="https://www.instagram.com/yaronpalchik/" target="_blank"><i class="fab fa-instagram"></i>&nbsp;yaronpalchik</a></h1>
            </div>
        </div>
    );
    return (
        <div>
            {page}
        </div>
    )
}


export default Contact;

