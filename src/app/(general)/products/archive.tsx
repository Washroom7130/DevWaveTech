// import { redirect, useSearchParams } from 'next/navigation';
// import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache';
// import Link from 'next/link';

// type Product = {
//     product_id: number;
//     product_name: string;
//     product_price: number;
//     product_description: string;
//     product_category: number;
//     product_stock: number;
//     product_image: string;
// }

// type Category = {
//     category_id: number;
//     category_name: string;
// }

// export default async function Products({ searchParams }: { searchParams?: { category?: string } }) {

//     // Extract and convert the category parameter, if present.
//   const categoryValue = await Promise.resolve(searchParams);;
//   const categoryParam = categoryValue?.category;

//   const productData = await fetch("https://flaskbackendapi.onrender.com/data/get-products");
//   const allProducts = await productData.json();

//   const categoryData = await fetch("https://flaskbackendapi.onrender.com/data/get-categories");
//   const categories = await categoryData.json();

//   const products = categoryParam
//     ? allProducts.filter(
//         (product: { product_category: number }) =>
//           product.product_category === parseInt(categoryParam)
//       )
//     : allProducts;

//     const getCookie = async (name: string) => {
//           return (await cookies()).get(name)?.value ?? '';
//       }
      
//     const cookie = await getCookie('session');

//     async function addToCart(formData: FormData) {
//         "use server";
//         const product_id = formData.get('id');
//         const quantity = Number(formData.get('quantity'));

//         const res = await fetch(`https://flaskbackendapi.onrender.com/customer/add-to-cart/${product_id}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Cookie": `session=${cookie};`
//             },
//             body: JSON.stringify({ quantity }),
//         });

//         const response = await res.json();
//         if (response.error === "User not authenticated.") {
//             //console.log(response.error)
//             redirect('/login')
//         } else if (response.error === "Staff and admin can't use this function")
//             redirect('/home') // change this later
//         revalidatePath("products")
//         console.log(response)
//     }

//     return (
//         <>
//         <h1>Product List</h1>
//         <ul>
//             {products.map((product) => (
//                 <><li>{product.product_id}</li>
//                     <li>{product.product_name}</li>
//                     <li>{product.product_price}</li>
//                     <li>{product.product_description}</li>
//                     <li>{product.product_category}</li>
//                     <li>{product.product_stock}</li>
//                     <li><img src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} /></li></>
//             ))}
//         </ul>

//         <h1>Category List</h1>
//         <ul>
//             {categories.map((category) => (
//                 <><Link href={`/products?category=${category.category_id}`}>{category.category_name}</Link>
//                 </>
//             ))}
//         </ul>

//         <form action={addToCart}>
//             <label>ID</label>
//             <input name='id' type='text' />
//             <label>Quantity</label>
//             <input name='quantity' type='number'/>
//             <button>Submit</button>
//         </form>
//         </>
//     );
// }