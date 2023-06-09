import React from 'react';

const Footer = () => {
   return (

      <footer>
         <div className="footer__area footer-bg">
            <div className="footer__top pt-90 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                           <div className="footer__widget-content">
                              <div className="footer__lang">
                                 <span><a href="#">EN</a> English</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp footer__pl" data-wow-delay=".7s">                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".9s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Contact US</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><a href="#">1166717712</a></li>
                                    <li><a href="#">WhatsApp</a></li>
                                    <li><a href="#">info@ninjasupplies.us</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                  <div className="footer__bottom-inner">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__copyright wow fadeInUp" data-wow-delay=".5s">
                              <p>Copyright © 2022 All Rights Reserved, Design by <a href="#">MotionLab</a></p>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__bottom-link wow fadeInUp text-md-end" data-wow-delay=".8s">
                              <ul>
                                 <li><a href="#">Licence</a></li>
                                 <li><a href="#">Privacy Policy </a></li>
                                 <li><a href="#">Affiliate Notice</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

   );
};

export default Footer;