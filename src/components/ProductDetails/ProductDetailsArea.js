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
                                 <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Informacion</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Garantia</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="envios-tab" data-bs-toggle="tab" data-bs-target="#envios" type="button" role="tab" aria-controls="envios" aria-selected="false">Envios</button>
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
                                       <h3 className="product__overview-title">Informacion Tecnica:</h3>
                                       <ol>
                                          <div>
                                             <ul>
                                             {product.informacionTecnica && product.informacionTecnica.map(info => <li>{info}</li>)}
                                             </ul>
                                          </div>                                     
                                       </ol>
                                    </div>   
                                    <div className="product__social m-social grey-bg-2">
                                       <h4 className="product__social-title">Follow us</h4>
                                       <ul>
                                          <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                          <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                          <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                          <li><a href="#" className="link"><i className="fab fa-linkedin-in"></i></a></li>
                                       </ul>
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
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="product__details-sidebar ml-30">
                     <div className="product__proprietor white-bg mb-30">
                        <div className="product__proprietor-head mb-25">
                           <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                              <div className="product__proprietor-avater d-flex align-items-center">
                                 <div className="product__proprietor-thumb">
                                    <img src="assets/img/product/proprietor/proprietor-1.jpg" alt="" />
                                 </div>
                                 <div className="product__proprietor-name">
                                    <h5><a href="#">Justin Case</a></h5>
                                    <a href="#">View Profile</a>
                                 </div>
                              </div>
                              <div className="product__proprietor-price">
                                 <span className="d-flex align-items-start"><span>$</span>{product?.price}</span>
                              </div>
                           </div>
                           <div className="product__proprietor-text">
                              <p>Jeffrey arse over tit give us a bell old posh morish wellies cheeky.</p>
                           </div>
                        </div>
                        <div className="product__proprietor-body fix">
                           <ul className="mb-10 fix">
                              <li>
                                 <h6>Downloads:</h6>
                                 <span>44</span>
                              </li>
                              <li>
                                 <h6>Released On:</h6>
                                 <span>16 February 2021</span>
                              </li>
                              <li>
                                 <h6>Version:</h6>
                                 <span>1.0</span>
                              </li>
                              <li>
                                 <h6>Compatibility:</h6>
                                 <span>Elementor</span>
                              </li>
                              <li>
                                 <h6>Framework:</h6>
                                 <span>Redux:</span>
                              </li>
                           </ul>
                           <span >
                              <a style={{cursor:'pointer'}} onClick={handleCartProduct} className="m-btn m-btn-2 w-100 mb-20"> <span></span> Add To Cart</a>

                           </span>
                           <a href="https://themeforest.net/item/zibber-business-consulting-wordpress-theme/30120392" rel="noreferrer" target="_blank" className="m-btn m-btn-border w-100"> <span></span> Preview Project</a>
                        </div>
                     </div>
                     <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <h4 className="sidebar__banner-title">Check Out <br />Our free Templates</h4>
                        <Link href="/product">
                           <a className="m-btn m-btn-white"> <span></span> free template</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default ProductDetailsArea;