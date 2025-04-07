import { redirect, useSearchParams } from 'next/navigation';
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
}

type Category = {
    category_id: number;
    category_name: string;
}

export default async function Products({ searchParams }: { searchParams: { category: string } }) {

    // Extract and convert the category parameter, if present.
  const categoryValue = await Promise.resolve(searchParams);;
  const categoryParam = categoryValue?.category;

  const productData = await fetch("https://flaskbackendapi.onrender.com/data/get-products");
  const allProducts = await productData.json();

  const categoryData = await fetch("https://flaskbackendapi.onrender.com/data/get-categories");
  const categories = await categoryData.json();

  const products = categoryParam
    ? allProducts.filter(
        (product: { product_category: number }) =>
          product.product_category === parseInt(categoryParam)
      )
    : allProducts;

    const getCookie = async (name: string) => {
          return (await cookies()).get(name)?.value ?? '';
      }
      
    const cookie = await getCookie('session');
    const itemCount = await getCookie('cartTotal');

    async function addToCart(formData: FormData) {
        "use server";
        const product_id = formData.get('id');
        const quantity = Number(formData.get('quantity'));

        const res = await fetch(`https://flaskbackendapi.onrender.com/customer/add-to-cart/${product_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `session=${cookie};`
            },
            body: JSON.stringify({ quantity }),
        });

        const response = await res.json();
        if (response.error === "User not authenticated.") {
            redirect('/login')
        } else if (response.error === "Staff and admin can't use this function")
            redirect('/home') // change this later
        revalidatePath("products")
    }

    return (
        // <>
        // <h1>Product List</h1>
        // <ul>
        //     {products.map((product) => (
        //         <><li>{product.product_id}</li>
        //             <li>{product.product_name}</li>
        //             <li>{product.product_price}</li>
        //             <li>{product.product_description}</li>
        //             <li>{product.product_category}</li>
        //             <li>{product.product_stock}</li>
        //             <li><img src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} /></li></>
        //     ))}
        // </ul>

        // <h1>Category List</h1>
        // <ul>
        //     {categories.map((category) => (
        //         <><Link href={`/products?category=${category.category_id}`}>{category.category_name}</Link>
        //         </>
        //     ))}
        // </ul>

        // <form action={addToCart}>
        //     <label>ID</label>
        //     <input name='id' type='text' />
        //     <label>Quantity</label>
        //     <input name='quantity' type='number'/>
        //     <button>Submit</button>
        // </form>
        // </>

        <>
        <title>Sản phẩm</title>
        <link
            rel="stylesheet"
            href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
        />
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

<div className="breadcrumb-section breadcrumb-bg-color--golden">
    <div className="breadcrumb-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="breadcrumb-title">Cửa hàng - Danh mục sản phẩm</h3>
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
                    Danh mục sản phẩm
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="shop-section">
  <div className="container">
    <div className="row flex-column-reverse flex-lg-row">
      <div className="col-lg-3">
        {/* Start Sidebar Area */}
        <div className="siderbar-section" data-aos="fade-up" data-aos-delay={0}>
          {/* Start Single Sidebar Widget */}
          <div className="sidebar-single-widget">
            <h6 className="sidebar-title">Danh mục</h6>
            <div className="sidebar-content">
              <ul className="sidebar-menu">
                <li>
                  <Link
                    href="/products"
                    data-category="all"
                  >
                    Tất cả
                  </Link>
                </li>
                {categories.map((category) => (
                    <li key={category.category_id}>
                    <Link
                      href={`/products?category=${category.category_id}`}
                      
                      data-category={category.category_name}
                    >
                      {category.category_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>{" "}
          {/* End Single Sidebar Widget */}
          {/* Start Single Sidebar Widget */}
          <div className="sidebar-single-widget">
            <h6 className="sidebar-title">LỌC THEO GIÁ</h6>
            <div className="sidebar-content">
              <div id="slider-range" />
              <div className="filter-type-price">
                <label htmlFor="amount">Khoảng giá:</label>
                <input type="text" id="amount" />
              </div>
            </div>
          </div>{" "}
          {/* End Single Sidebar Widget */}
        </div>
        

      </div>
      <div className="col-lg-9">
        {/* Start Shop Product Sorting Section */}
        <div className="shop-sort-section">
            <div className="container">
            <div className="row">
                {/* Start Sort Wrapper Box */}
                <div
                className="sort-box d-flex justify-content-between align-items-md-center align-items-start flex-md-row flex-column"
                data-aos="fade-up"
                data-aos-delay={0}
                >
                {/* Start Sort tab Button */}
                <div className="sort-tablist d-flex align-items-center">
                    <ul className="tablist nav sort-tab-btn">
                    {/* <li>
                        <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#layout-3-grid"
                        >
                        <img src="../../../updated_asset/shop-hono/assets/images/icons/bkg_grid.png" alt="" />
                        </a>
                    </li> */}
                    </ul>
                    {/* Start Page Amount */}
                    <div className="page-amount ml-2">
                    <span>Hiển thị {products.length} sản phẩm</span>
                    </div>{" "}
                    {/* End Page Amount */}
                </div>{" "}
                {/* End Sort tab Button */}
                {/* Start Sort Select Option */}
                {/* End Sort Select Option */}
                </div>{" "}
                {/* Start Sort Wrapper Box */}
            </div>
            </div>
        </div>{" "}
        {/* End Section Content */}
            {/* Start Tab Wrapper */}
        <div className="sort-product-tab-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content tab-animate-zoom">
                  {/* Start Grid View Product */}
                  <div
                    className="tab-pane active show sort-layout-single"
                    id="layout-3-grid"
                  >
                    <div className="row">
                    {products.map((product) => (
                      <div key={product.product_id} className="col-xl-4 col-sm-6 col-12">
                        {/* Start Product Default Single Item */}
                        
                          <div
                          className="product-default-single-item product-color--golden"
                          data-category={product.product_category}
                          data-aos="fade-up"
                          data-aos-delay={0}
                          key={product.product_id}
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
                        
                        {/* End Product Default Single Item */}
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
    </div>
  </div>
</div>

        
        </>
    );
}