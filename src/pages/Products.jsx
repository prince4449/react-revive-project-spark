import React from 'react'
import ListYourBusiness from './../components/ListYourBusiness';
import ExpertPopUp from './../components/ExpertPopUp';
import Footer from './../components/Footer';
import NarrowHeader from './../components/NarrowHeader';

const Products = () => {

     const product = [
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
       {
         name: "Cotton and Accessories",
         price: "$999",
         discount: "38% off",
         productImage: "images/products/14350coupon-deals.jpg",
         authorImage: "images/user/29615rn53-themes.png",
         profileLink: "profile/rn53",
         productLink: "product-details.html",
       },
     ];
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div>
            <NarrowHeader />
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="all-list-bre all-pro-bre">
          <div className="container sec-all-list-bre">
            <div className="row">
              <h1>All Categories</h1>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="products.html">All Category</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="all-listing all-products">
          {/*FILTER ON MOBILE VIEW*/}
          <div className="fil-mob fil-mob-act">
            <h4>
              Product filters <i className="material-icons">filter_list</i>
            </h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                <div className="all-filt">
                  <span className="fil-mob-clo">
                    <i className="material-icons">close</i>
                  </span>
                  {/*START*/}
                  <div className="filt-com lhs-cate">
                    <h4>Categories</h4>
                    <div className="dropdown">
                      <select
                        onchange="ProductSubcategoryFilter(this.value);"
                        className="cat_check chosen-select"
                        name="cat_check"
                        id="cat_check"
                      >
                        <option value="">Select Category</option>
                        ?&gt;
                        <option value={15}>Clothings</option>
                        ?&gt;
                        <option value={16}>Footwear</option>
                        ?&gt;
                        <option value={17}>Shoes</option>
                        ?&gt;
                        <option value={18}>Jewellery</option>
                        ?&gt;
                        <option value={19}>Toys</option>
                        ?&gt;
                        <option value={20}>Baby care</option>
                        ?&gt;
                        <option value={21}>Fruits</option>
                        ?&gt;
                        <option value={22}>Mens</option>
                        ?&gt;
                        <option value={23}>Health</option>
                        ?&gt;
                        <option value={8}>Sports</option>
                        ?&gt;
                        <option value={7}>Education</option>
                        ?&gt;
                        <option value={6}>Electricals</option>
                        ?&gt;
                        <option value={5}>Automobilers</option>
                      </select>
                    </div>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com sub_cat_section pro-fil-sub">
                    <h4>Sub category</h4>
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={41}
                            id="Diet food"
                          />
                          <label htmlFor="Diet food">Diet food</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={40}
                            id="Health products"
                          />
                          <label htmlFor="Health products">
                            Health products
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={39}
                            id="Protein"
                          />
                          <label htmlFor="Protein">Protein</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={38}
                            id="Food"
                          />
                          <label htmlFor="Food">Food</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={37}
                            id="Tshirts"
                          />
                          <label htmlFor="Tshirts">Tshirts</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={36}
                            id="Smart watches"
                          />
                          <label htmlFor="Smart watches">Smart watches</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={35}
                            id="Camera lense"
                          />
                          <label htmlFor="Camera lense">Camera lense</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={34}
                            id="Camera light"
                          />
                          <label htmlFor="Camera light">Camera light</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={33}
                            id="Camera pouch"
                          />
                          <label htmlFor="Camera pouch">Camera pouch</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={32}
                            id="Camera holder"
                          />
                          <label htmlFor="Camera holder">Camera holder</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={31}
                            id="Fruits and vegitables"
                          />
                          <label htmlFor="Fruits and vegitables">
                            Fruits and vegitables
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={30}
                            id="Vegitables"
                          />
                          <label htmlFor="Vegitables">Vegitables</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={29}
                            id="Fruits"
                          />
                          <label htmlFor="Fruits">Fruits</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={28}
                            id="Digital products"
                          />
                          <label htmlFor="Digital products">
                            Digital products
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={27}
                            id="Digital books"
                          />
                          <label htmlFor="Digital books">Digital books</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={26}
                            id="Books"
                          />
                          <label htmlFor="Books">Books</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={25}
                            id="Jeans"
                          />
                          <label htmlFor="Jeans">Jeans</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={24}
                            id="Shirts"
                          />
                          <label htmlFor="Shirts">Shirts</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={23}
                            id="T-shirts"
                          />
                          <label htmlFor="T-shirts">T-shirts</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={22}
                            id="PC games"
                          />
                          <label htmlFor="PC games">PC games</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={21}
                            id="Playstations games"
                          />
                          <label htmlFor="Playstations games">
                            Playstations games
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={20}
                            id="Drone toys"
                          />
                          <label htmlFor="Drone toys">Drone toys</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={19}
                            id="Brain games"
                          />
                          <label htmlFor="Brain games">Brain games</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={18}
                            id="Educations toys"
                          />
                          <label htmlFor="Educations toys">
                            Educations toys
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={17}
                            id="Puma"
                          />
                          <label htmlFor="Puma">Puma</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={16}
                            id="Nike"
                          />
                          <label htmlFor="Nike">Nike</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={15}
                            id="Adidas"
                          />
                          <label htmlFor="Adidas">Adidas</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={14}
                            id="Smart Tech"
                          />
                          <label htmlFor="Smart Tech">Smart Tech</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={13}
                            id="Tablets"
                          />
                          <label htmlFor="Tablets">Tablets</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={12}
                            id="Camera"
                          />
                          <label htmlFor="Camera">Camera</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={11}
                            id="Speakers"
                          />
                          <label htmlFor="Speakers">Speakers</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={10}
                            id="Laptop"
                          />
                          <label htmlFor="Laptop">Laptop</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={9}
                            id="Smart TV"
                          />
                          <label htmlFor="Smart TV">Smart TV</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={8}
                            id="Mobiles"
                          />
                          <label htmlFor="Mobiles">Mobiles</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com pro-fil-pri">
                    <h4>Price</h4>
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="price_check"
                            defaultValue={10000}
                            className="price_check"
                            id="price_check5"
                          />
                          <label htmlFor="price_check5">Above $1000</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="price_check"
                            defaultValue={1000}
                            className="price_check"
                            id="price_check4"
                          />
                          <label htmlFor="price_check4">$501 - $1000</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="price_check"
                            defaultValue={500}
                            className="price_check"
                            id="price_check3"
                          />
                          <label htmlFor="price_check3">$251 - $500</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="price_check"
                            defaultValue={250}
                            className="price_check"
                            id="price_check2"
                          />
                          <label htmlFor="price_check2">$101 - $250</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="price_check"
                            defaultValue={100}
                            className="price_check"
                            id="price_check1"
                          />
                          <label htmlFor="price_check1">Below $100</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  <div className="filt-com pro-fil-dis">
                    <h4>Discounts</h4>
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="discount_check"
                            defaultValue={100}
                            className="discount_check"
                            id="discount_check5"
                          />
                          <label htmlFor="discount_check5">Above 70%</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="discount_check"
                            defaultValue={70}
                            className="discount_check"
                            id="discount_check4"
                          />
                          <label htmlFor="discount_check4">51% - 70%</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="discount_check"
                            defaultValue={50}
                            className="discount_check"
                            id="discount_check3"
                          />
                          <label htmlFor="discount_check3">26% - 50%</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="discount_check"
                            defaultValue={25}
                            className="discount_check"
                            id="discount_check2"
                          />
                          <label htmlFor="discount_check2">11% - 25%</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="discount_check"
                            defaultValue={10}
                            className="discount_check"
                            id="discount_check1"
                          />
                          <label htmlFor="discount_check1">Below 10%</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*START*/}
                  <div className="filt-com lhs-ads">
                    <ul>
                      <li>
                        <div className="ads-box">
                          <a href="">
                            <span>Ad</span>
                            <img
                              src="images/ads/ads1.jpg"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="ads-box">
                          <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                            <span>Ad</span>
                            <img
                              src="images/ads/32207ads.png"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                </div>
              </div>
              <div className="col-md-9">
                <div className="all-list-sh all-product-total">
                  <ul className="products-wrapper">
                    {product.map((product, index) => (
                      <li className="products-item" key={index}>
                        <div className="all-pro-box">
                          <div className="all-pro-img">
                            <img
                              src={product.productImage}
                              alt={product.name}
                            />
                          </div>
                          <div className="all-pro-aut">
                            <div className="auth">
                              <img
                                src={product.authorImage}
                                alt=""
                                loading="lazy"
                              />
                              <a
                                target="_blank"
                                href={product.profileLink}
                                className="fclick"
                              />
                            </div>
                          </div>
                          <div className="all-pro-txt">
                            <h4>{product.name}</h4>
                            <span className="pri">
                              <b className="pro-off">{product.price}</b>
                              {product.discount}
                            </span>
                            <div className="links">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#product-pop-qet"
                              >
                                Get quote
                              </a>
                            </div>
                          </div>
                          <a
                            href={product.productLink}
                            className="pro-view-full"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div id="product-pagination-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}

      {/* END */}
      {/* START */}
      <ListYourBusiness />
      <ExpertPopUp />
      <Footer />
    </>
  );
}

export default Products
