import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import Head from "next/head";

type Product = {
    product_id: number;
    product_name: string;
    product_price: number;
    product_description: string;
    product_category: number;
    product_stock: number;
    product_image: string;
}

export const metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ',
};

export default async function Home() {
    const productData = await fetch('https://flaskbackendapi.onrender.com/data/get-products')
    const products = await productData.json();
    const productToShow = products.slice(0, 4);

    const hotProductData = await fetch('https://flaskbackendapi.onrender.com/data/get-top-products')
    const hotProducts = await hotProductData.json();

    async function addToCart(formData: FormData) {
        "use server";
        const getCookie = async (name: string) => {
            "use server";
            return (await cookies()).get(name)?.value ?? '';
        }

        const cookie = await getCookie('session');

        const id = formData.get('id')
        const quantity = Number(formData.get('quantity'));
        const itemCount = await getCookie('cartTotal');

        const res = await fetch(`https://flaskbackendapi.onrender.com/customer/add-to-cart/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `session=${cookie};`
            },
            body: JSON.stringify({ quantity }),
        });

        const response = await res.json();
        if (response.error === "User not authenticated.") {
            //console.log(response.error)
            redirect('/login')
        } else if (response.error === "Staff and admin can't use this function") {
            redirect('/home') // change this later
        } else if (response.error === "Quantity must be a positive integer and not larger than stock.") {
            revalidatePath(`/product/${id}`)
            //actionMessage = "Quantity must be a positive integer and not larger than stock."
        } else if (response.message) {
            revalidatePath(`/product/${id}`)
            //actionMessage = response.message
        }
    }

    return (
        // <>
        // <h1>Some Products</h1>
        // <ul>
        //     {productToShow.map((product) => (
        //         <><li>{product.product_id}</li>
        //             <li>{product.product_name}</li>
        //             <li>{product.product_price}</li>
        //             <li>{product.product_description}</li>
        //             <li>{product.product_category}</li>
        //             <li>{product.product_stock}</li>
        //             <li><img src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} /></li></>
        //     ))}
        // </ul>
        // <h1>Hot Products</h1>
        // <ul>
        //     {hotProducts.map((product) => (
        //         <><li>{product.product_id}</li>
        //             <li>{product.product_name}</li>
        //             <li>{product.product_price}</li>
        //             <li>{product.product_description}</li>
        //             <li>{product.product_category}</li>
        //             <li>{product.product_stock}</li>
        //             <li><img src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} /></li></>
        //     ))}
        // </ul>
        // </>
        <>
  {/* Start Hero Slider Section*/}
  <div className="hero-slider-section">
    {/* Slider main container */}
    <div className="hero-slider-active swiper-container">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Start Hero Single Slider Item */}
        <div className="hero-single-slider-item swiper-slide">
          {/* Hero Slider Image */}
          <div className="hero-slider-bg">
            <img
              src="../../../updated_asset/shop-hono/assets/images/hero-slider/home-1/hero-slider-4.jpg"
              alt=""
            />
          </div>
          {/* Hero Slider Content */}
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle" style={{ color: "white" }}>
                      Bộ sưu tập mới
                    </h4>
                    <h2 className="title" style={{ color: "white" }}>
                      MÂY TRE <br /> ĐAN
                    </h2>
                    <Link
                      href="/products?category=3"
                      className="btn btn-lg btn-outline-golden"
                    >
                      MUA NGAY{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Hero Single Slider Item */}
        {/* Start Hero Single Slider Item */}
        <div className="hero-single-slider-item swiper-slide">
          {/* Hero Slider Image */}
          <div className="hero-slider-bg">
            <img
              src="../../../updated_asset/shop-hono/assets/images/hero-slider/home-1/hero-slider-5.jpg"
              alt=""
            />
          </div>
          {/* Hero Slider Content */}
          <div className="hero-slider-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-auto">
                  <div className="hero-slider-content">
                    <h4 className="subtitle" style={{ color: "white" }}>
                      Bộ sưu tập mới
                    </h4>
                    <h2 className="title" style={{ color: "white" }}>
                      TRANG TRÍ
                      <br />
                      GỐM SỨ
                    </h2>
                    <Link
                      href="/product?category=1"
                      className="btn btn-lg btn-outline-golden"
                    >
                      MUA NGAY
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Hero Single Slider Item */}
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination active-color-golden" />
      {/* If we need navigation buttons */}
      {/* <div className="swiper-button-prev d-none d-lg-block" />
      <div className="swiper-button-next d-none d-lg-block" /> */}
    </div>
  </div>
  {/* End Hero Slider Section*/}

  {/* Start Service Section */}
  <div className="service-promo-section section-top-gap-100">
    <div className="service-wrapper">
      <div className="container">
        <div className="row">
          {/* Start Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assets/images/icons/service-promo-1.png" alt="" />
              </div>
              <div className="content">
                <h6 className="title">MIỄN PHÍ GIAO HÀNG</h6>
                <p>
                  Nhận 10% tiền hoàn lại, miễn phí vận chuyển, miễn phí trả hàng
                  và nhiều ưu đãi khác tại hơn 1000 nhà bán lẻ hàng đầu!
                </p>
              </div>
            </div>
          </div>
          {/* End Service Promo Single Item */}
          {/* Start Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assets/images/icons/service-promo-2.png" alt="" />
              </div>
              <div className="content">
                <h6 className="title">HOÀN TIỀN TRONG 30 NGÀY</h6>
                <p>
                  Chúng tôi đảm bảo khách hàng sẽ hài lòng 100% hoặc được hoàn
                  lại tiền trong vòng 30 ngày!
                </p>
              </div>
            </div>
          </div>
          {/* End Service Promo Single Item */}
          {/* Start Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assets/images/icons/service-promo-3.png" alt="" />
              </div>
              <div className="content">
                <h6 className="title">THANH TOÁN AN TOÀN</h6>
                <p>
                  Thanh toán bằng những phương thức thanh toán phổ biến và an
                  toàn nhất thế giới.
                </p>
              </div>
            </div>
          </div>
          {/* End Service Promo Single Item */}
          {/* Start Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assets/images/icons/service-promo-4.png" alt="" />
              </div>
              <div className="content">
                <h6 className="title">KHÁCH HÀNG TRUNG THÀNH</h6>
                <p>
                  Tỉ lệ hoàn tiền chỉ 1% và tỉ lệ khách hàng mua sản phẩm thứ 2
                  lên đến 30%!
                </p>
              </div>
            </div>
          </div>
          {/* End Service Promo Single Item */}
        </div>
      </div>
    </div>
  </div>
  {/* End Service Section */}

  {/* Start Banner Section */}
  <div className="banner-section section-top-gap-100 section-fluid">
    <div className="banner-wrapper">
      <div className="container-fluid">
        <div className="row mb-n6">
          <div className="col-lg-6 col-12 mb-6">
            {/* Start Banner Single Item */}
            <div
              className="banner-single-item banner-style-1 banner-animation img-responsive"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="image">
                <img
                  src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-1-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4 className="title">Chủ đề đồ gốm</h4>
                <h5 className="sub-title">Trang trí cho ngôi nhà bạn</h5>
                <Link
                  href="/products?category=1"
                  className="btn btn-lg btn-outline-golden icon-space-left"
                >
                  <span className="d-flex align-items-center">
                    KHÁM PHÁ NGAY
                    <i className="ion-ios-arrow-thin-right" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End Banner Single Item */}
          </div>
          <div className="col-lg-6 col-12 mb-6">
            <div className="row mb-n6">
              {/* Start Banner Single Item */}
              <div className="col-lg-6 col-sm-6 mb-6">
                <div
                  className="banner-single-item banner-style-2 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="image">
                    <img
                      src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-2-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Chủ đề <br />
                      trang sức
                    </h4>
                    <Link href="/products?category=5" className="link-text">
                      <span>KHÁM PHÁ</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Banner Single Item */}
              {/* Start Banner Single Item */}
              <div className="col-lg-6 col-sm-6 mb-6">
                <div
                  className="banner-single-item banner-style-2 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="image">
                    <img
                      src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-2-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Chủ đề tranh
                      <br />
                      truyền thống
                    </h4>
                    <Link href="/products?category=2" className="link-text">
                      <span>KHÁM PHÁ</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Banner Single Item */}
              {/* Start Banner Single Item */}
              <div className="col-lg-6 col-sm-6 mb-6">
                <div
                  className="banner-single-item banner-style-2 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="image">
                    <img
                      src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-2-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Chủ đề
                      <br />
                      tượng đồng
                    </h4>
                    <Link href="products?category=5" className="link-text">
                      <span>KHÁM PHÁ</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Banner Single Item */}
              {/* Start Banner Single Item */}
              <div className="col-lg-6 col-sm-6 mb-6">
                <div
                  className="banner-single-item banner-style-2 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="image">
                    <img
                      src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-2-img-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">
                      Chủ đề <br />
                      mây tre đan
                    </h4>
                    <Link href="/products?category=3" className="link-text">
                      <span>KHÁM PHÁ</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End Banner Single Item */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Banner Section */}
  <div className="product-default-slider-section section-top-gap-100 section-fluid section-inner-bg">
  {/* Start Section Content Text Area */}
  <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-content-gap">
            <div className="secton-content">
              <h3 className="section-title">MỘT SỐ SẢN PHẨM CỦA CHÚNG TÔI</h3>
              <p>
                Thêm những sản phẩm của chúng tôi vào giỏ hàng của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Section Content Text Area */}
  <div className="product-wrapper" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="product-slider-default-1row default-slider-nav-arrow">
            {/* Slider main container */}
            <div className="swiper-container product-default-slider-4grid-1row">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* End Product Default Single Item */}
                {/* Start Product Default Single Item */}
                {productToShow.map((product: Product) => (
                    <div
                    key={product.product_id}
                    className="product-default-single-item product-color--golden swiper-slide swiper-slide-active"
                    style={{ width: 270, marginRight: 30 }}
                    role="group"
                    aria-label="1 / 12"
                  >
                    <div className="image-box">
                      <a
                        href="product-details-default.html"
                        className="image-link"
                      >
                        <img
                          src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`}
                          alt={product.product_name}
                        />
                      </a>
                      {/* Overlay mới */}
                      <div className="product-overlay">
                        <Link href={`/product/${product.product_id}`} className="btn-xemthem">Xem thêm</Link>
                      </div>
                      <div className="action-link">
                        <div className="action-link-left">
                          {/* <a href="#" className="add-to-cart-btn">
                            Thêm vào giỏ
                          </a> */}
                          <form action={addToCart}>
                            <input readOnly hidden name="id" value={product.product_id} />
                            <input readOnly hidden name="quantity" value='1' />
                            <button><a>Thêm vào giỏ</a></button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="content-left">
                        <h6 className="title">
                          <Link href={`/product/${product.product_id}`}>
                            {product.product_name}
                          </Link>
                        </h6>
                      </div>
                      <div className="content-right">
                        <span className="price">{product.product_price.toLocaleString()} VND</span>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="product-default-slider-section section-top-gap-100 section-fluid">
  {/* Start Section Content Text Area */}
  <div className="section-title-wrapper" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-content-gap">
            <div className="secton-content">
              <h3 className="section-title">MỘT SỐ MẶT HÀNG HOT</h3>
              <p>Đặt hàng trước ngay để nhận ưu đãi và quà tặng độc quyền </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Section Content Text Area */}
  <div className="product-wrapper" data-aos="fade-up" data-aos-delay={200}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="product-slider-default-2rows default-slider-nav-arrow">
            {/* Slider main container */}
            <div className="swiper-container product-default-slider-4grid-2row">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper">
                {/* Start Product Default Single Item */}
                {hotProducts.map((product: Product) => (
                    <div
                      key={product.product_id}
                      className="product-default-single-item product-color--golden swiper-slide swiper-slide-active"
                      style={{ width: 270, marginRight: 30 }}
                      role="group"
                      aria-label="1 / 4"
                    >
                    <div className="image-box">
                      <Link
                        href={`/product/${product.product_id}`}
                        className="image-link"
                      >
                        <img
                          src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`}
                          alt={product.product_name}
                        />
                      </Link>
                      {/* Overlay mới */}
                      <div className="product-overlay">
                        <Link
                          href={`/product/${product.product_id}`}
                          className="btn-xemthem"
                        >
                          Xem thêm
                        </Link>
                      </div>
                      <div className="action-link">
                        <div className="action-link-left">
                        <form action={addToCart}>
                            <input readOnly hidden name="id" value={product.product_id} />
                            <input readOnly hidden name="quantity" value='1' />
                            <button><a>Thêm vào giỏ</a></button>
                          </form>
                        </div>
                        <div className="action-link-right">
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="content-left">
                        <h6 className="title">
                          <Link href={`/product/${product.product_id}`}>
                            {product.product_name}
                          </Link>
                        </h6>
                      </div>
                      <div className="content-right">
                        <span className="price">{product.product_price.toLocaleString()} VND</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Start Banner Section */}
<div className="banner-section section-top-gap-100">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 offset-xl-2">
          {/* Start Banner Single Item */}
          <div
            className="banner-single-item banner-style-3 banner-animation img-responsive"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="image">
              <img
                className="img-fluid"
                src="../../../updated_asset/shop-hono/assets/images/banner/banner-style-3-img-1.jpg"
                alt=""
              />
            </div>
            <div className="content">
              <h3 className="title">Trang trí cho ngôi nhà của bạn</h3>
              <h5 className="sub-title">Sử dụng những sản phẩm thủ công</h5>
              <Link
                href="/products"
                className="btn btn-lg btn-outline-golden icon-space-left"
              >
                <span className="d-flex align-items-center">
                  Khám phá ngay <i className="ion-ios-arrow-thin-right" />
                </span>
              </Link>
            </div>
          </div>
          {/* End Banner Single Item */}
        </div>
      </div>
    </div>
  </div>

</>

    );
}