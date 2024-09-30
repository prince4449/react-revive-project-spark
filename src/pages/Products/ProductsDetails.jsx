import React from 'react'
import ListYourBusiness from './../../components/ListYourBusiness';
import ExpertPopUp from './../../components/ExpertPopUp';
import Footer from './../../components/Footer';
import NarrowHeader from './../../components/NarrowHeader';

const ProductsDetails = () => {
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div>
    <NarrowHeader/>
          </div>
        </div>
      </section>
      {/* END */}
      <div className="all-list-bre all-pro-bre">
        <div className="container sec-all-list-bre">
          <div className="row">
            <h2>Electricals</h2>
            <ul>
              <li>
                <a href="index">Home</a>
              </li>
              <li>
                <a href="products.html">All Category</a>
              </li>
              <li>
                <a href="all-products?category=electricals">Electricals</a>
              </li>
              <li>
                <a href="#">APPLE iPhone 12 (Blue, 128 GB)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* START */}
      <section className="biz-pro">
        <div className="container">
          <div className="row">
            <div className="col-md-5 lhs">
              <div className="bpro-sli">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* The slideshow */}
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="images/products/92311apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg"
                        alt="92311apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg"
                      />
                    </div>
                    <div className="carousel-item ">
                      <img
                        src="images/products/80142apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg"
                        alt="80142apple-iphone-12-dummyapplefsn-original-imafwg8dqq7z8cgh.jpeg"
                      />
                    </div>
                  </div>
                  {/* Left and right controls */}
                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon" />
                  </a>
                </div>
              </div>
              <div className="biz-pro-btn">
                <a
                  data-toggle="modal"
                  data-target="#quote"
                  className="btn btn1"
                >
                  Get quote
                </a>
                <a
                  target="_blank"
                  href="https://themeforest.net/item/bizbook-directory-listings-template/25391222?s_rank=1"
                  className="btn btn2"
                >
                  Buy now
                </a>
              </div>
            </div>
            <div className="col-md-7 rhs">
              <div className="pro-pri-box">
                <div className="pro-pbox-2">
                  <span className="veri">Verified</span>
                  <h1>APPLE iPhone 12 (Blue, 128 GB)</h1>
                  <span className="rat">4.0</span>
                  <span className="pro-cost">
                    $1200 <b className="pro-off">5% off</b>
                  </span>
                </div>
                <div className="pro-pbox-3 pro-pbox-com">
                  <h4>Highlights</h4>
                  <ul>
                    <li>128 GB ROM</li>
                    <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                    <li>12MP + 12MP </li>
                    <li> 12MP Front Camera</li>
                    <li>
                      A14 Bionic Chip with Next Generation Neural Engine
                      Processor
                    </li>
                    <li>Ceramic Shield Display</li>
                  </ul>
                </div>
                <div className="pro-pbox-4 pro-pbox-com">
                  <h4>Descriptions</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                    <br />
                    <br /> but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem
                    Ipsum
                  </p>
                </div>
                <div className="pro-pbox-5 pro-pbox-com">
                  <h4>Specifications</h4>
                  <ul>
                    <li>
                      <span className="pro-spe-li">In The Box</span>:
                      <span className="pro-spe-po">&nbsp;&nbsp;iPhone</span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Model Number</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp; USB-C to Lightning Cable
                      </span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Model Name</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp; Documentation
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pro-pbox-7 pro-pbox-com">
                  <h4>Tags</h4>
                  <a href="search-results?q=Iphone">Iphone</a>
                  <a href="search-results?q= mobile"> mobile</a>
                </div>
                <div className="pro-pbox-6 pro-pbox-com">
                  <h4>Created by</h4>
                  <div className="pro-bad-sml">
                    <img src="images/user/970813.jpg" alt="" loading="lazy" />
                    <h4>John Smith</h4>
                    <b>Join on Nov 2021</b>
                    <a href="profile.html" target="_blank" className="fclick">
                      &nbsp;
                    </a>
                  </div>
                </div>
                <div className="list-sh">
                  <span
                    className="share-new"
                    data-toggle="modal"
                    data-target="#sharepop"
                  >
                    <i className="material-icons">share</i> Share now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/* START */}
      <section className="eve-deta-body blog-deta-body">
        <div className="container">
          <div className="pro-rel-pro-box">
            <h4>Related Posts</h4>
            <div className="us-ppg-com us-ppg-blog">
              <ul>
                <li>
                  <div className="pro-eve-box">
                    <div>
                      <img
                        src="images/products/67931lg-108-cm-(43-inch)-ultra-hd-1.jpeg"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span>$700</span>
                      <h2>LG 108 cm (43 inch) Ultra HD (4K) LED Smart TV</h2>
                    </div>
                    <a
                      href="product/lg-108-cm--43-inch--ultra-hd--4k--led-smart-tv"
                      className="fclick"
                    >
                      &nbsp;
                    </a>
                  </div>
                </li>
                <li>
                  <div className="pro-eve-box">
                    <div>
                      <img
                        src="images/products/26209a-journey-from-grief--books.jpeg"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span>$99</span>
                      <h2>Equating the Equations of Insanity - A Journey</h2>
                    </div>
                    <a
                      href="product/equating-the-equations-of-insanity---a-journey"
                      className="fclick"
                    >
                      &nbsp;
                    </a>
                  </div>
                </li>
                <li>
                  <div className="pro-eve-box">
                    <div>
                      <img
                        src="images/products/24905samsung-6-kg-5-star-inverter.jpeg"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span>$900</span>
                      <h2>SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam</h2>
                    </div>
                    <a
                      href="product/samsung-6-kg-5-star-inverter-with-hygiene-steam"
                      className="fclick"
                    >
                      &nbsp;
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
<ListYourBusiness/>
<ExpertPopUp/>
<Footer />   
      {/* SHARE POPUP */}
      <div className="modal fade sharepop" id="sharepop">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Share now</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <input type="text" defaultValue="" id="shareurl" />
              <div className="shareurltip">
                <button onclick="shareurl()" onmouseout="shareurlout()">
                  <span className="shareurltxt" id="myTooltip">
                    Copy to clipboard
                  </span>
                  Copy text{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsDetails
