import Link from 'next/link';
import React from 'react';

const BannerArea = () => {
   return (
      <>
         <section className="banner__area pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-md-6">
                     <div className="banner__item mb-30 wow fadeInUp" data-wow-delay=".3s" style={{background:`url(assets/img/banner/banner-1.jpg)`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        <h3 className="banner__title">Apple official Reseller</h3>
                        <p>Obtaining alliances is committing ourselves with the best prices.</p>
                        <Link href="https://www.apple.com"><a  className="m-btn m-btn-white banner__more" target="_blank"> <span></span> View More</a></Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-md-6">
                     <div className="banner__item mb-30 wow fadeInUp" data-wow-delay=".7s" style={{background:`url(assets/img/banner/banner-2.jpg)`,backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
                        <h3 className="banner__title">Intel official Reseller</h3>
                        <p>Obtaining alliances is committing ourselves with the best prices.</p>
                        <Link href="https://www.intel.com/"><a  className="m-btn m-btn-white banner__more" target="_blank"> <span></span> View More</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BannerArea;