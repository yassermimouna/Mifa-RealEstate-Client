import React from 'react';

const Footer = () => {
    return ( 
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <p className="footerText">Mifa Real Estate is a full-service, luxury real estate brokerage and lifestyle company representing clients worldwide in a broad spectrum of classes, including residential, new development, resort real estate, residential leasing and luxury vacation rentals.</p>
                        <p className="footerText mt-5">© 2022.  Mifa Real Estate. All Right Reserved. Privacy Policy</p>
                    </div>
                    <div className="col-sm-5">
                        <div className="d-flex flex-row">
                            <div className="p-2 footerText"><i className="fas fa-map-marker-alt footerIcon"></i></div>
                            <div className="p-2 footerText">5031 , avenue platon ,Mahdia Tunisia</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2 footerText"><i className="fas fa-phone-alt footerIcon"></i></div>
                            <div className="p-2 footerText">+216 54 558 154</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2 footerText"><i className="fas fa-envelope footerIcon"></i></div>
                            <a href="mailto:info@basavarachai.com"><div className="p-2 footerText mail">info@basavarachai.com</div></a>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="p-2 footerText"><a href="http://facebook.com" target="_blank"><i className="fab fa-facebook-square footerSocialIcon"></i></a></div>
                            <div className="p-2 footerText"><a href="http://instagram.com" target="_blank"><i className="fab fa-instagram footerSocialIcon"></i></a></div>
                            <div className="p-2 footerText"><a href="http://twitter.com" target="_blank"><i className="fab fa-twitter footerSocialIcon"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;