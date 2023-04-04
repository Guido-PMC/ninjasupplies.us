import React from 'react';

const Subscribe = () => {
   return (
      <>
         <section className="subscribe__area p-relative pt-100 pb-110" style={{background:`url(assets/img/bg/subscribe-bg.jpg)`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                        <h3 className="subscribe__title">Recibi nuestras ofertas por Mail. <br /></h3>
                        <p>Enterate de las novedades antes que todos!</p>
                        <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                           <form action="#">
                              <input type="email" placeholder="Email" />
                              <button type="submit" className="m-btn m-btn-black"><span></span> Suscribirme </button>
                           </form>
                           <p>Mas de 20.000 gamers ya se suscribieron</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Subscribe;