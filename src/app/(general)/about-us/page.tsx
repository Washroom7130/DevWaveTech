import Link from "next/link";


export default function AboutUs() {

    return (
        <>
{/* ...:::: Start Breadcrumb Section:::... */}
<div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Giới thiệu</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <Link href="/home">Trang chủ</Link>
                  </li>
                  <li className="active" aria-current="page">
                    Giới thiệu
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* ...:::: End Breadcrumb Section:::... */}
  {/* Start About Top */}
  <div className="about-top">
    <div className="container">
      <div className="row d-flex align-items-center justify-content-between d-sm-column">
        <div className="col-md-6">
          <div className="about-img" data-aos="fade-up" data-aos-delay={0}>
            <div className="img-responsive">
              <img src="../../../updated_asset/shop-hono/assetsimages/about/img-about.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="content" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="title">GIỚI THIỆU VỀ CỬA HÀNG THỦ CÔNG MỸ NGHỆ</h3>
            <h5 className="semi-title">
              Tâm huyết tạo nên mỗi sản phẩm độc đáo
            </h5>
            <p>
              Chúng tôi tự hào mang đến những sản phẩm thủ công mỹ nghệ tinh
              xảo, được tạo ra từ tâm huyết và kinh nghiệm của các nghệ nhân.
              Mỗi sản phẩm đều được chăm chút tỉ mỉ, phản ánh nét đẹp văn hóa và
              sự sáng tạo không ngừng nghỉ. Chúng tôi mong muốn đem lại sự khác
              biệt và giá trị nghệ thuật đến với khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End About Top */}
  {/* Start Progress Bar Section */}
  <div className="progressbar-section section-top-gap-100 section-inner-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="content" data-aos="fade-up" data-aos-delay={0}>
            <h4 className="title">Cam kết chất lượng và sáng tạo</h4>
            <p>
              Chúng tôi luôn nỗ lực không ngừng để nâng cao chất lượng sản phẩm
              và trải nghiệm dịch vụ. Qua đó, mỗi chi tiết nhỏ đều được đầu tư
              với niềm đam mê và sự sáng tạo, góp phần thể hiện giá trị độc đáo
              của nghệ thuật thủ công.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="custom-progress m-t-40">
            <div
              className="skill-progressbar"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <h6 className="font--semi-bold m-b-15">Chất lượng sản phẩm</h6>
              <div
                className="line-progressbar"
                data-percentage={90}
                data-progress-color="#b19361"
              />
            </div>
            <div
              className="skill-progressbar"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h6 className="font--semi-bold m-b-15">Sự sáng tạo</h6>
              <div
                className="line-progressbar"
                data-percentage={85}
                data-progress-color="#b19361"
              />
            </div>
            <div
              className="skill-progressbar"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h6 className="font--semi-bold m-b-15">Dịch vụ khách hàng</h6>
              <div
                className="line-progressbar"
                data-percentage={95}
                data-progress-color="#b19361"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Progress Bar Section */}
  {/* Start Service Section */}
  <div className="service-promo-section section-top-gap-100">
    <div className="service-wrapper">
      <div className="container">
        <div className="row">
          {/* Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assetsimages/icons/icon_about1.jpg" alt="" />
              </div>
              <div className="content">
                <h6 className="title">Sản phẩm độc đáo</h6>
                <p>
                  Mỗi sản phẩm được chế tác tỉ mỉ, thể hiện sự sáng tạo và đậm
                  đà bản sắc văn hóa.
                </p>
              </div>
            </div>
          </div>
          {/* Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assetsimages/icons/icon_about2.jpg" alt="" />
              </div>
              <div className="content">
                <h6 className="title">Dịch vụ tận tâm</h6>
                <p>
                  Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ và mang đến
                  trải nghiệm mua sắm tốt nhất.
                </p>
              </div>
            </div>
          </div>
          {/* Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assetsimages/icons/icon_about3.jpg" alt="" />
              </div>
              <div className="content">
                <h6 className="title">Giao hàng nhanh chóng</h6>
                <p>
                  Chúng tôi cam kết giao hàng đúng hẹn với quy trình đóng gói
                  chuyên nghiệp và an toàn.
                </p>
              </div>
            </div>
          </div>
          {/* Service Promo Single Item */}
          <div className="col-lg-3 col-sm-6 col-12">
            <div
              className="service-promo-single-item"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="image">
                <img src="../../../updated_asset/shop-hono/assetsimages/icons/icon_about4.jpg" alt="" />
              </div>
              <div className="content">
                <h6 className="title">Hỗ trợ sau bán hàng</h6>
                <p>
                  Chúng tôi luôn đồng hành cùng khách hàng với các chương trình
                  hỗ trợ và bảo hành ưu việt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}