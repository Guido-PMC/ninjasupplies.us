import React, { useState } from 'react';
import Order from './Order';
import Swal from 'sweetalert2';

const CheckoutArea = () => {
   const [createAccount,setCreateAccount] = useState(false);
   const [shipBox,setShipBox] = useState(false);

   const handleOrderSubmit = (e) => {
      e.preventDefault()
      // handle order
      Swal.fire({
         position: 'top-center',
         icon: 'success',
         title: 'Order place successfully',
         showConfirmButton: false,
         timer: 1500
       })
   }
   return (
      <>
         <section className="checkout-area pb-100">
            <div className="container">
               <form onSubmit={handleOrderSubmit}>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="checkbox-form">
                           <h3>Datos de Facturacion</h3>
                           <div className="row">
                              <div className="col-md-12">
                                 <div className="country-select">
                                    <label>Pais <span className="required">*</span></label>
                                    <select required>
                                       <option value="Argentina">Argentina</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Primer Nombre <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Segundo Nombre <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>DNI</label>
                                    <input type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Direccion <span className="required">*</span></label>
                                    <input required type="text" placeholder="Calle y numero" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <input type="text" placeholder="Numero de departamento" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list">
                                    <label>Provincia <span className="required">*</span></label>
                                    <input required type="text" placeholder="Provincia" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Localidad <span className="required">*</span></label>
                                    <input required type="text" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Codigo Postal <span className="required">*</span></label>
                                    <input required type="text" placeholder="Codigo Postal" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Email <span className="required">*</span></label>
                                    <input required type="email" placeholder="" />
                                 </div>
                              </div>
                              <div className="col-md-6">
                                 <div className="checkout-form-list">
                                    <label>Telefono <span className="required">*</span></label>
                                    <input required type="text" placeholder="Telefono" />
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <div className="checkout-form-list create-acc">
                                    <input onClick={()=> setCreateAccount(!createAccount)} id="cbox" type="checkbox" />
                                    <label >Create an account?</label>
                                 </div>
                                 {createAccount && <div id="cbox_info" className="checkout-form-list">
                                    <p>Create an account by entering the information below. If you are a returning
                                       customer please login at the top of the page.</p>
                                    <label>Account password <span className="required">*</span></label>
                                    <input required type="password" placeholder="password" />
                                 </div>}
                              </div>
                           </div>
                           <div className="different-address">
                              <div className="ship-different-title">
                                 <h3>
                                    <label>Enviar a una direccion distinta?</label>
                                    <input onClick={()=> setShipBox(!shipBox)} id="ship-box" type="checkbox" />
                                 </h3>
                              </div>

                              {shipBox && <div >
                                 <div className="row">
                                    <div className="col-md-12">
                                       <div className="country-select">
                                          <label>Country <span className="required">*</span></label>
                                          <select required>
                                             <option value="volvo">Argentina</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Primer Nombre <span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Segundo Nombre <span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>DNI</label>
                                          <input type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Direccion <span className="required">*</span></label>
                                          <input required type="text" placeholder="Calle y numero" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <input type="text" placeholder="Numero de departamento" />
                                       </div>
                                    </div>
                                    <div className="col-md-12">
                                       <div className="checkout-form-list">
                                          <label>Provincia <span className="required">*</span></label>
                                          <input required type="text" placeholder="Provincia" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Localidad<span className="required">*</span></label>
                                          <input required type="text" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Codigo postal <span className="required">*</span></label>
                                          <input required type="text" placeholder="Codigo postal" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Email <span className="required">*</span></label>
                                          <input type="email" placeholder="" />
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="checkout-form-list">
                                          <label>Telefono <span className="required">*</span></label>
                                          <input required type="text" placeholder="Telefono" />
                                       </div>
                                    </div>
                                 </div>
                              </div>}
                              <div className="order-notes">
                                 <div className="checkout-form-list">
                                    <label>Notas adicionales</label>
                                    <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notas adicionales para el envio"></textarea>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* order area start */}
                     <Order />
                     {/* order area end */}
                  </div>
               </form>
            </div>
         </section>
      </>
   );
};

export default CheckoutArea;