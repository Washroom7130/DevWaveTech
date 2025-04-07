import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';


type Product = {
    product_id: number;
    product_name: string;
    product_price: number;
    product_description: string;
    product_category: number;
    product_stock: number;
    product_image: string;
    category_name: string;
}

type Comment = {

    comment_text: string;
    comment_date: string;
    customer_name: string;
}

type Params = Promise<{ id: string[] }>;

let actionMessage = String();

export default async function Product({ params }: { params: Params }) {
    const { id } = await params;

    const productData = await fetch(`https://flaskbackendapi.onrender.com/data/get-product/${id}`)
    const product = await productData.json();

    if (product.error === 'Product not found or out of stock.') {
      redirect('/home')
    }

    const relatedProductData = await fetch(`https://flaskbackendapi.onrender.com/data/get-products?category_id=${product.category_name}&product_id=${id}`)
    const relatedProduct = await relatedProductData.json();
    const productToShow = relatedProduct.slice(0, 4);

    const getCookie = async (name: string) => {
        "use server";
        return (await cookies()).get(name)?.value ?? '';
    }
    
    const cookie = await getCookie('session');
    const itemCount = await getCookie('cartTotal');
    console.log('Page: ' + itemCount)

    const commentData = await fetch(`https://flaskbackendapi.onrender.com/data/get-comment/${id}`, {
        headers: {
            "Cookie": `session=${cookie};`
        }
    })
    const comments = await commentData.json();


    async function DeleteComment(formdata: FormData) {
        "use server";
        const comment_id = formdata.get('id');
        
        const res = await fetch(`https://flaskbackendapi.onrender.com/customer/comment/remove-comment/${comment_id}`, {
            method: "DELETE",
            headers: {
                "Cookie": `session=${cookie};`
            },
        });

        const response = await res.json();
        if (response.error === "User not authenticated.") {
            //console.log(response.error)
            redirect('/login')
        }
        revalidatePath(`product/${id}`)
        console.log(response)
    }

    let commentsMarkup = null;

    if (Array.isArray(comments)) {
        // If we get an array, render multiple comments
        commentsMarkup = (
        <ul className="comment" id="review-list">
            {comments.map((comment, index) => (
            <li className='comment-item' key={index}>
              <div className='review-header'>
                <span className='review-name'>{comment.customer_name}</span>
                {' - '}
                <span className='review-date'>{comment.comment_date}</span>
              </div>          
                <p className='review-content'>{comment.comment_text}</p>
                {comment.is_owner && (
                <form action={DeleteComment}>
                    <input value={comment.comment_id} readOnly name='id' hidden/>
                    <button className='delete-review-btn' type='submit'>
                      Xóa đánh giá
                    </button>
                </form>
                )}
            </li>
            ))}
        </ul>
        );
    } else if (comments && typeof comments === "object" && "message" in comments) {
        // If the data is an object with a "message" property
        commentsMarkup = <p>{comments.message}</p>;
    } else if (comments && typeof comments === "object") {
        // If data is a single comment object, wrap it in an array for uniformity
        commentsMarkup = (
        <ul className="comment" id="review-list">
            <li className='comment-item'>
            <div className='review-header'>
                <span className='review-name'>{comments.customer_name} </span>
                {' - '}
                <span className='review-date'> {comments.comment_date}</span>
              </div>          
                <p className='review-content'>{comments.comment_text}</p>
            {comments.is_owner && (
            <form action={DeleteComment}>
                <input value={comments.comment_id} readOnly name='id' hidden/>
                <button className='delete-review-btn' type='submit'>
                    Xóa đánh giá
                </button>
            </form>
            )}
            </li>
        </ul>
        );
    }

    let stock = String();

    if (product.product_stock <= 0) {
        stock = 'Hết hàng';
    } else {
        stock = `Còn hàng: ${product.product_stock}`
    }

    async function addToCart(formData: FormData) {
        "use server";
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
            actionMessage = "Số lượng phải là một số dương và không được lớn hơn số lượng tồn."
        }
    }

    async function addComment(formdata: FormData) {
        "use server";
        const comment = formdata.get('comment');

        const res = await fetch(`https://flaskbackendapi.onrender.com/customer/comment/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `session=${cookie};`
            },
            body: JSON.stringify({ comment }),
        });

        const response = await res.json();
        if (response.error === "User not authenticated.") {
            //console.log(response.error)
            redirect('/login')
        }
        revalidatePath(`product/${id}`)
        console.log(response)
    }

    return (
        // <>
        // <h1>Product Detail</h1>
        // <ul>
        //     <li>{product.product_id}</li>
        //     <li>{product.product_name}</li>
        //     <li>{product.product_price}</li>
        //     <li>{product.product_description}</li>
        //     <li>{product.product_category}</li>
        //     <li>{stock}</li>
        //     <li>
        //     <img 
        //         src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} 
        //         alt={product.product_name} 
        //     />
        //     </li>
        // </ul>

        // <h1>Comment List</h1>
        // {commentsMarkup}

        // <h1>Add to Cart</h1>
        // <form action={addToCart}>
        //     <label>Quantity</label>
        //     <input name='quantity' type='number'/>
        //     <button>Submit</button>
        // </form>
        // {actionMessage && <p>{actionMessage}</p>}

        // <h1>Add Comment</h1>
        // <form action={addComment}>
        //     <label>Comment</label>
        //     <input name='comment' type='text'/>
        //     <button>Submit</button>
        // </form>

        // <h1>Related Product</h1>
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

        // </>
    <>
    <title>{product.product_name}</title>
        <div className="breadcrumb-section breadcrumb-bg-color--golden">
            <div className="breadcrumb-wrapper">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h3 className="breadcrumb-title">{product.product_name}</h3>
                    <div className="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                        <nav aria-label="breadcrumb">
                        <ul>
                            <li>
                            <Link href="/home">Trang chủ</Link>
                            </li>
                            <li>
                            <Link href="/products">Cửa hàng</Link>
                            </li>
                            <li className="active" aria-current="page">
                            {product.product_name}
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="product-details-section">
    <div className="container">
      <div className="row">
        {/* Gallery Area */}
        <div className="col-xl-5 col-lg-6">
          <div
            className="product-details-gallery-area"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {/* Start Large Image */}
            <div className="product-large-image product-large-image-horaizontal swiper-container">
              <div className="swiper-wrapper" id="product-image">
                {/* Mặc định hiển thị ảnh gốc (sẽ được update qua JS nếu có dữ liệu từ localStorage) */}
                <div className="product-image-large-image swiper-slide zoom-image-hover img-responsive">
                  <img
                    src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} 
                    alt={product.product_name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content Area */}
        <div className="col-xl-7 col-lg-6">
          <div
            className="product-details-content-area product-details--golden"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {/* Start Product Details Text Area*/}
            <div className="product-details-text">
              {/* Sửa: thêm id cho tiêu đề */}
              <h4 className="title" id="product-title">
                {product.product_name}
              </h4>
              <div className="d-flex align-items-center">
                <a href="#review" className="customer-review ml-2">
                  Xem mọi người đánh giá
                </a>
              </div>
              {/* Sửa: thêm id cho giá sản phẩm */}
              <div className="price" id="product-price">
                {product.product_price.toLocaleString()} VND
              </div>
              <p>{product.product_description}</p>
            </div>
            {/* End Product Details Text Area*/}
            {/* Start Product Variable Area */}
            <div className="product-details-variable">
              {/* <h4 className="title">Còn hàng !</h4> */}
              {/* Product Variable Single Item */}
              <div className="variable-single-item">
                <div className="product-stock">
                  {/* <span className="product-stock-in">
                    <i className="ion-checkmark-circled" />
                  </span>{" "} */}
                  {stock}
                </div>
              </div>
              {/* Product Variable Single Item */}
              <div className="d-flex align-items-center">
                <div
                  className="product-quantity-control"
                  style={{
                    marginBottom: 15,
                    display: "flex",
                    alignItems: "center"
                  }}
                ><form action={addToCart}>
                    <label>Choose number to add</label>
                    <input
                    name='quantity'
                    type="number"
                    defaultValue={1}
                    min={1}
                    style={{ width: 150, textAlign: "center", margin: "0 10px" }}
                  /><br/><br/>
                <button>
                <div className="return-shopping-btn">
                  <a
                    className="btn btn-block btn-lg btn-black-default-hover"
                  >
                    Thêm vào giỏ hàng
                  </a>
                </div>
                </button>
                </form>
                  
                </div>
                {/* <div className="return-shopping-btn">
                  <a
                    href="#"
                    className="btn btn-block btn-lg btn-black-default-hover"
                  >
                    Thêm vào giỏ hàng
                  </a>
                </div> */}
                
              </div>
              {actionMessage}
            </div>
            
            {/* (Các phần meta, danh mục, social link giữ nguyên) */}
          </div>
          {/* End Product Variable Area */}
          {/* Start Product Details Catagories Area*/}
          <div className="product-details-catagory mb-2">
            <span className="title">Danh mục:</span>
            <ul>
              <li>
                <Link href={`/products?category=${product.product_category}`}>{product.category_name}</Link>
              </li>
            </ul>
          </div>
          {/* End Product Details Catagories Area*/}
          {/* Start Product Details Social Area*/}
          <div className="product-details-social">
            <span className="title">Chia sẻ sản phẩm này:</span>
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
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          {/* End Product Details Social Area*/}
        </div>
      </div>
    </div>
  </div>
  {/* End Product Details Section */}

  {/* Start Product Content Tab Section */}
  <div className="product-details-content-tab-section section-top-gap-100">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="product-details-content-tab-wrapper"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {/* Start Product Details Tab Button */}
            <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
              <li>
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#review"
                >
                  Đánh giá
                </a>
              </li>
            </ul>{" "}
            {/* End Product Details Tab Button */}
            <div className="tab-pane" id="review">
              <div className="single-tab-content-item">
                {/* Danh sách đánh giá */}
                {/* <ul className="comment" id="review-list"> */}
                  {/* Các review sẽ được render từ localStorage qua JS */}
                {/* </ul> */}
                {/* Form đánh giá */}
                {commentsMarkup}
                <div className="review-form">
                  <div className="review-form-text-top">
                    <h5>THÊM ĐÁNH GIÁ</h5>
                  </div>
                  <form id="review-form" action={addComment}>
                    <div className="row">
                      <div className="col-12">
                        <div className="default-form-box">
                          <label htmlFor="comment-review-text">
                            Nhận xét của bạn <span>*</span>
                          </label>
                          <textarea
                            id="comment-review-text"
                            name='comment'
                            placeholder="Nhập nhận xét"
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-md btn-black-default-hover"
                          type="submit"
                        >
                          Gửi
                        </button>
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
  </div>{" "}
  {/* End Product Content Tab Section */}

  {/* Start Product Default Slider Section */}
  <div className="product-default-slider-section section-top-gap-100 section-fluid">
    {/* Start Section Content Text Area */}
    <div
      className="section-title-wrapper"
      data-aos="fade-up"
      data-aos-delay={0}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-content-gap">
              <div className="secton-content">
                <h3 className="section-title">SẢN PHẨM LIÊN QUAN</h3>
                <p>Những sản phẩm liên quan sẽ hiển thị ở đây!</p>
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
                      <div className="product-default-single-item product-color--golden swiper-slide"
                      style={{ width: 270, marginRight: 30 }}
                      role="group"
                      aria-label="1 / 4">
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
                        <div className="action-link">
                          <div className="action-link-left">
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
                          <span className="price">{product.product_price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* End Product Default Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>

    );

}