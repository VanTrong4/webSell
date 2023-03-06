
import MenuLeft from "./MenuLeft";
import Product_home from "./Product_home";

function Home(){
    return(
        <div>
            <section id="slider">{/*slider*/}
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                        <li data-target="#slider-carousel" data-slide-to={1} />
                        <li data-target="#slider-carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                        <div className="col-sm-6">
                            <h1><span>E</span>-SHOPPER</h1>
                            <h2>Free E-Commerce Template</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
                            <img src="images/home/pricing.png" className="pricing" alt="" />
                        </div>
                        </div>
                        <div className="item">
                        <div className="col-sm-6">
                            <h1><span>E</span>-SHOPPER</h1>
                            <h2>100% Responsive Design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                            <img src="images/home/pricing.png" className="pricing" alt="" />
                        </div>
                        </div>
                        <div className="item">
                        <div className="col-sm-6">
                            <h1><span>E</span>-SHOPPER</h1>
                            <h2>Free Ecommerce Template</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button type="button" className="btn btn-default get">Get it now</button>
                        </div>
                        <div className="col-sm-6">
                            <img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
                            <img src="images/home/pricing.png" className="pricing" alt="" />
                        </div>
                        </div>
                    </div>
                    <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                        <i className="fa fa-angle-left" />
                    </a>
                    <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                        <i className="fa fa-angle-right" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </section>{/*/slider*/}
            <section>
            <div className="container">
                <div className="row">
                <MenuLeft/>
                <div className="col-sm-9 padding-right">
                    <div className="features_items">{/*features_items*/}
                    <h2 className="title text-center">Features Items</h2>
                    <Product_home/>
                    </div>{/*features_items*/}
                    <div className="category-tab">{/*category-tab*/}
                    <div className="col-sm-12">
                        <ul className="nav nav-tabs">
                        <li className="active"><a href="#tshirt" data-toggle="tab">T-Shirt</a></li>
                        <li><a href="#blazers" data-toggle="tab">Blazers</a></li>
                        <li><a href="#sunglass" data-toggle="tab">Sunglass</a></li>
                        <li><a href="#kids" data-toggle="tab">Kids</a></li>
                        <li><a href="#poloshirt" data-toggle="tab">Polo shirt</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade active in" id="tshirt">
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://img.hollisterco.com/is/image/anf/KIC_339-2556-1767-900_prod1?policy=product-large" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXu9paDlQVpYUT3sTYfzYtdX4PY-QqbjQKvQ&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="blazers">
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZ6qzyashDIPnqy-VK8gT1Oe9BbpsH2-z-Q&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6IbMjJGLID0JbvtZUpUpUvxP0a2aGjP69AA&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj54rpoPwBxxTYeGfNzpAcxYQEliKr-uhs5w&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TUflf5pIM-c5SvaUgthauUPVJz-cKMc6fQ&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="sunglass">
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZB1uMwq6csennwKuBT8H_UG0zUP7rUmQ9WQ&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwFZ9bmW8vmRfPyUGV9pHdGMoLqoCQwbc4Q&usqp=CAU" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="kids">
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="poloshirt">
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery2.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery4.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery3.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center">
                                <img src="images/home/gallery1.jpg" alt="" />
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>{/*/category-tab*/}
                    <div className="recommended_items">{/*recommended_items*/}
                    <h2 className="title text-center">recommended items</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className="item active">	
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend1.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend2.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend3.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">	
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend1.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend2.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-4">
                            <div className="product-image-wrapper">
                                <div className="single-products">
                                <div className="productinfo text-center">
                                    <img src="images/home/recommend3.jpg" alt="" />
                                    <h2>$56</h2>
                                    <p>Easy Polo Black Edition</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                        <i className="fa fa-angle-left" />
                        </a>
                        <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                        <i className="fa fa-angle-right" />
                        </a>			
                    </div>
                    </div>{/*/recommended_items*/}
                </div>
                </div>
            </div>
            </section>
      </div>
    );
}
export default Home;