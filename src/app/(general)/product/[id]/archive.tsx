// import { redirect } from 'next/navigation';
// import { cookies } from 'next/headers';
// import { revalidatePath } from 'next/cache';


// type Product = {
//     product_id: number;
//     product_name: string;
//     product_price: number;
//     product_description: string;
//     product_category: number;
//     product_stock: number;
//     product_image: string;
// }

// type Comment = {

//     comment_text: string;
//     comment_date: string;
//     customer_name: string;
// }

// export default async function Product({ params }: { params: {id: string}}) {

//     const { id } = await params;

//     const productData = await fetch(`https://flaskbackendapi.onrender.com/data/get-product/${id}`)
//     const product = await productData.json();

//     const relatedProductData = await fetch('https://flaskbackendapi.onrender.com/data/get-products')
//     const relatedProduct = await relatedProductData.json();
//     const productToShow = relatedProduct.slice(0, 6);

//     const getCookie = async (name: string) => {
//         return (await cookies()).get(name)?.value ?? '';
//     }
    
//     const cookie = await getCookie('session');

//     const commentData = await fetch(`https://flaskbackendapi.onrender.com/data/get-comment/${id}`, {
//         headers: {
//             "Cookie": `session=${cookie};`
//         }
//     })
//     const comments = await commentData.json();


//     async function DeleteComment(formdata: FormData) {
//         "use server";
//         const comment_id = formdata.get('id');
        
//         const res = await fetch(`https://flaskbackendapi.onrender.com/customer/comment/remove-comment/${comment_id}`, {
//             method: "DELETE",
//             headers: {
//                 "Cookie": `session=${cookie};`
//             },
//         });

//         const response = await res.json();
//         if (response.error === "User not authenticated.") {
//             //console.log(response.error)
//             redirect('/login')
//         }
//         revalidatePath(`product/${id}`)
//         console.log(response)
//     }

//     let commentsMarkup = null;

//     if (Array.isArray(comments)) {
//         // If we get an array, render multiple comments
//         commentsMarkup = (
//         <ul>
//             {comments.map((comment, index) => (
//             <li key={index}>
//                 <p>{comment.comment_text}</p>
//                 <p>{comment.comment_date}</p>
//                 <p>{comment.customer_name}</p>
//                 {comment.is_owner && (
//                 <form action={DeleteComment}>
//                     <input value={comment.comment_id} readOnly name='id' hidden/>
//                     <button type='submit'>
//                         Delete Comment
//                     </button>
//                 </form>
//                 )}
//             </li>
//             ))}
//         </ul>
//         );
//     } else if (comments && typeof comments === "object" && "message" in comments) {
//         // If the data is an object with a "message" property
//         commentsMarkup = <p>{comments.message}</p>;
//     } else if (comments && typeof comments === "object") {
//         // If data is a single comment object, wrap it in an array for uniformity
//         commentsMarkup = (
//         <ul>
//             <li>
//             <p>{comments.comment_text}</p>
//             <p>{comments.comment_date}</p>
//             <p>{comments.customer_name}</p>
//             {comments.is_owner && (
//             <form action={DeleteComment}>
//                 <input value={comments.comment_id} readOnly name='id' hidden/>
//                 <button type='submit'>
//                     Delete Comment
//                 </button>
//             </form>
//             )}
//             </li>
//         </ul>
//         );
//     }

//     let stock = String();

//     if (product.product_stock <= 0) {
//         stock = 'Out of stock';
//     } else {
//         stock = `Stock: ${product.product_stock}`
//     }

//     async function addToCart(formData: FormData) {
//         "use server";
//         const quantity = Number(formData.get('quantity'));

//         const res = await fetch(`https://flaskbackendapi.onrender.com/customer/add-to-cart/${id}`, {
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
//         } else if (response.error === "Staff and admin can't use this function") {
//             redirect('/home') // change this later
//         }
            
//         revalidatePath(`/product/${id}?refreshCart=1`)
//         console.log(response)
//     }

//     async function addComment(formdata: FormData) {
//         "use server";
//         const comment = formdata.get('comment');

//         const res = await fetch(`https://flaskbackendapi.onrender.com/customer/comment/${id}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Cookie": `session=${cookie};`
//             },
//             body: JSON.stringify({ comment }),
//         });

//         const response = await res.json();
//         if (response.error === "User not authenticated.") {
//             //console.log(response.error)
//             redirect('/login')
//         }
//         revalidatePath(`product/${id}`)
//         console.log(response)
//     }

//     return (
//         <>
//         <h1>Product Detail</h1>
//         <ul>
//             <li>{product.product_id}</li>
//             <li>{product.product_name}</li>
//             <li>{product.product_price}</li>
//             <li>{product.product_description}</li>
//             <li>{product.product_category}</li>
//             <li>{stock}</li>
//             <li>
//             <img 
//                 src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} 
//                 alt={product.product_name} 
//             />
//             </li>
//         </ul>

//         <h1>Comment List</h1>
//         {commentsMarkup}

//         <h1>Add to Cart</h1>
//         <form action={addToCart}>
//             <label>Quantity</label>
//             <input name='quantity' type='number'/>
//             <button>Submit</button>
//         </form>

//         <h1>Add Comment</h1>
//         <form action={addComment}>
//             <label>Comment</label>
//             <input name='comment' type='text'/>
//             <button>Submit</button>
//         </form>

//         <h1>Related Product</h1>
//         <ul>
//             {productToShow.map((product) => (
//                 <><li>{product.product_id}</li>
//                     <li>{product.product_name}</li>
//                     <li>{product.product_price}</li>
//                     <li>{product.product_description}</li>
//                     <li>{product.product_category}</li>
//                     <li>{product.product_stock}</li>
//                     <li><img src={`https://flaskbackendapi.onrender.com/data/images/${product.product_image}`} /></li></>
//             ))}
//         </ul>

//         </>
//     );

// }