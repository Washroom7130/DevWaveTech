import Link from "next/link";


export default function ContactUs() {

    return (
        <>
  {/* ...:::: Start Breadcrumb Section:::... */}
  <div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Liên hệ</h3>
            <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
              <nav aria-label="breadcrumb">
                <ul>
                  <li>
                    <Link href="/home">Trang chủ</Link>
                  </li>
                  <li className="active" aria-current="page">
                    Liên hệ
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
  {/* ...::::Start Map Section:::... */}
  <div className="map-section" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.5169910621264!2d105.77289793596296!3d20.98348490936291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453f71578b411%3A0x457cc404378f6531!2sCMC%20University%20-%20Campus%202!5e0!3m2!1svi!2s!4v1741492566993!5m2!1svi!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/* ...::::End  Map Section:::... */}
  {/* ...::::Start Contact Section:::... */}
  <div className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          {/* Start Contact Details */}
          <div
            className="contact-details-wrapper section-top-gap-100"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            <div className="contact-details">
              {/* Start Contact Details Single Item */}
              <div className="contact-details-single-item">
                <div className="contact-details-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="contact-details-content contact-phone">
                  <a href="tel:+012345678102">+012 345 678 102</a>
                  <a href="tel:+012345678102">+012 345 678 102</a>
                </div>
              </div>
              {/* End Contact Details Single Item */}
              {/* Start Contact Details Single Item */}
              <div className="contact-details-single-item">
                <div className="contact-details-icon">
                  <i className="fa fa-globe" />
                </div>
                <div className="contact-details-content contact-phone">
                  <a href="mailto:hello@example.com">hello@example.com</a>
                  <a href="https://example.com">example.com</a>
                </div>
              </div>
              {/* End Contact Details Single Item */}
              {/* Start Contact Details Single Item */}
              <div className="contact-details-single-item">
                <div className="contact-details-icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="contact-details-content contact-phone">
                  <span>Address goes here,</span>
                  <span>street, Crossroad 123.</span>
                </div>
              </div>
              {/* End Contact Details Single Item */}
            </div>
            {/* Start Contact Social Link */}
            <div className="contact-social">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>{" "}
            {/* End Contact Social Link */}
          </div>{" "}
          {/* End Contact Details */}
        </div>
        <div className="col-lg-8">
          <div
            className="contact-form section-top-gap-100"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h3>Hãy liên lạc với chúng tôi</h3>
            <form
              id="contact-form"
            >
              <div className="row">
                <div className="col-lg-6">
                  <div className="default-form-box mb-20">
                    <label htmlFor="contact-name">Họ và tên</label>
                    <input name="name" type="text" id="contact-name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="default-form-box mb-20">
                    <label htmlFor="contact-email">Email</label>
                    <input name="email" type="email" id="contact-email" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="default-form-box mb-20">
                    <label htmlFor="contact-subject">Chủ đề</label>
                    <input name="subject" type="text" id="contact-subject" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="default-form-box mb-20">
                    <label htmlFor="contact-message">Lời nhắn của bạn</label>
                    <textarea
                      name="message"
                      id="contact-message"
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    className="btn btn-lg btn-black-default-hover"
                    type="submit"
                  >
                    GỬI
                  </button>
                </div>
                <p className="form-messege" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ...::::ENd Contact Section:::... */}
</>

    )
}