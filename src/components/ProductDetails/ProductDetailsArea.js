import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productData from '../../data/productData';
import { addToProduct } from '../../redux/features/productSlice';

const ProductDetailsArea = () => {
   // all products
   const product = useSelector(state => state.products.specificProduct);
   // dispatch
   const dispatch = useDispatch();
   // handleCartProduct
   const handleCartProduct = () => {
      dispatch(addToProduct(product))
   }
   return (

      <section className="product__area pb-115">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="product__wrapper">
                     <div className="product__details-thumb w-img mb-30">
                        <img src={product?.img_big} alt="product-details" />
                     </div>
                     <div className="product__details-content">
                        <div className="product__tab mb-40">
                           <ul className="nav nav-tabs" id="proTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Information</button>
                              </li>
                           </ul>
                        </div>
                        <div className="product__tab-content">
                           <div className="tab-content" id="proTabContent">
                              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                 <div className="product__overview">
                                    <h3 className="product__overview-title">{product?.title}</h3>
                                    <p>{product?.description}</p>
                                    <p>{``}</p>
                                    <div className="product__features mt-40">
                                       <h3 className="product__overview-title">Technic Information:</h3>
                                       <ol>
                                          <div>
                                             <ul>
                                             {product.informacionTecnica && product.informacionTecnica.map(info => <li>{info}</li>)}
                                             </ul>
                                          </div>                                     
                                       </ol>
                                    </div>   
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
                                 <div className="product__support">
                                    <div className="latest-comments mb-55">
                                       <ul>
                                          <li>
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Producto con Garantia</h5>
                                                      <span className="post-meta">{product?.guarantee}</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Retira gratis por nuestro Local</h5>
                                                      <span className="post-meta">Office Quattro</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>

                                       </ul>
                                    </div>
                                    <div className="post-comment-form wow fadeInUp" data-wow-delay=".2s">
                                       <h4 className="post-comment-title mb-25">Add a comment</h4>
                                       <form action="#">
                                          <div className="post-comment-inner">
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <div className="post-input d-sm-flex align-items-center mb-10">
                                                      <textarea placeholder="Comment for the author..."></textarea>
                                                      <button type="submit" className="m-btn m-btn-4"> <span></span> Post Comment</button>
                                                   </div>
                                                </div>
                                                <div className="col-xl-12">
                                                   <div className="post-agree d-flex align-items-center">
                                                      <input className="m-check-input" type="checkbox" id="m-agree" />
                                                      <label className="m-check-label" htmlFor='m-agree'>Email me when this comment receives a reply</label>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="envios" role="tabpanel" aria-labelledby="envios-tab">
                                 <div className="product__support">
                                    <div className="latest-comments mb-55">
                                       <ul>
                                          <li>
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Retira por nuestro local</h5>
                                                      <span className="post-meta">{product?.guarantee}</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>
                                          <li>
                                             <div className="comments-box grey-bg-2">
                                                <div className="comments-info d-flex">
                                                   <div className="comments-avatar mr-15">
                                                      <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                                   </div>
                                                   <div className="avatar-name">
                                                      <h5>Envios por Andreani GRATIS</h5>
                                                      <span className="post-meta">Office Quattro</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </li>

                                       </ul>
                                    </div>
                                    <div className="post-comment-form wow fadeInUp" data-wow-delay=".2s">
                                       <h4 className="post-comment-title mb-25">Add a comment</h4>
                                       <form action="#">
                                          <div className="post-comment-inner">
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <div className="post-input d-sm-flex align-items-center mb-10">
                                                      <textarea placeholder="Comment for the author..."></textarea>
                                                      <button type="submit" className="m-btn m-btn-4"> <span></span> Post Comment</button>
                                                   </div>
                                                </div>
                                                <div className="col-xl-12">
                                                   <div className="post-agree d-flex align-items-center">
                                                      <input className="m-check-input" type="checkbox" id="m-agree" />
                                                      <label className="m-check-label" htmlFor='m-agree'>Email me when this comment receives a reply</label>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default ProductDetailsArea;