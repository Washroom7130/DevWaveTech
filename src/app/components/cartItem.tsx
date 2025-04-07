// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import { DeleteCartItem } from "./deleteCartItemfunc";

// // Types for cart data
// type CartItemType = {
//   MaSP: number;
//   SoLuong: number;
//   TenSP: string;
//   TotalCost: number;
// };

// type CartData = {
//   MaGioHang: number;
//   items: CartItemType[];
// };

// // Helper functions to get and set a cookie
// function getCookie(name: string): string | null {
//   if (typeof document === "undefined") return null;
//   const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//   return match ? match[2] : null;
// }

// function setCookie(name: string, value: string, days = 1) {
//   if (typeof document === "undefined") return;
//   const expires = new Date(Date.now() + days * 864e5).toUTCString();
//   document.cookie = `${name}=${value}; expires=${expires}; path=/`;
// }

// export function CartItem() {
//   const [cart, setCart] = useState<CartData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");
//   const [totalItems, setTotalItems] = useState<number>(0);
//   const [totalCost, setTotalCost] = useState<number>(0);

//   // Helper: Calculate total items from cart data.
//   const calculateTotalItems = (items: CartItemType[]): number =>
//     items.reduce((total, item) => total + item.SoLuong, 0);

//   // Helper: Calculate total cost from cart data.
//   const calculateTotalCost = (items: CartItemType[]): number =>
//     items.reduce((sum, item) => sum + item.TotalCost, 0);

//   async function fetchCart() {
//     setLoading(true);
//     try {
//       const res = await fetch("https://flaskbackendapi.onrender.com/customer/get-cart", {
//         credentials: "include",
//       });
//       if (!res.ok) {
//         throw new Error("Failed to fetch cart data");
//       }
//       const data: CartData = await res.json();
//       setCart(data);
//       const newTotal = calculateTotalItems(data.items);
//       const newTotalCost = calculateTotalCost(data.items);
//       setTotalItems(newTotal);
//       setTotalCost(newTotalCost);
//       setCookie("cartTotal", newTotal.toString());
//       setCookie("cartTotalCost", newTotalCost.toString());
//     } catch (err: any) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // Fetch cart on mount.
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   // Poll cookie value every second and refresh cart if either total changes.
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const cookieTotal = getCookie("cartTotal");
//       const cookieCost = getCookie("cartTotalCost");
//       if (
//         (cookieTotal && Number(cookieTotal) !== totalItems) ||
//         (cookieCost && Number(cookieCost) !== totalCost)
//       ) {
//         fetchCart();
//       }
//     }, 1000);
//     return () => clearInterval(intervalId);
//   }, [totalItems, totalCost]);

//   // Client function to handle delete item action
//   const handleDelete = async (itemId: number, currentQuantity: number) => {
//     // Create a FormData object with required values.
//     const formData = new FormData();
//     formData.append("id", itemId.toString());
//     // Here, you might want to delete the item entirely, so quantity can be set to 0.
//     formData.append("quantity", "0");
//     const response = await DeleteCartItem(formData);
//     if (response.message) {
//       // Refresh the cart state after successful deletion.
//       await fetchCart();
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!cart) return <div>Your cart is empty</div>;

//   return (
//     // <div ref={dropdownRef}>
//     //   <button onClick={toggleDropdown}>
//     //     {isOpen ? "Hide Cart" : `Cart (${totalItems} items)`}
//     //   </button>
//     //   {isOpen && (
//     //     <div>
//     //       {loading ? (
//     //         <div>Refreshing cart...</div>
//     //       ) : (
//     //         <div>
//     //           <h3>Shopping Cart (ID: {cart.MaGioHang})</h3>
//     //           {cart.items.length > 0 ? (
//     //             <ul>
//     //               {cart.items.map((item, index) => (
//     //                 <li key={index}>
//     //                   <strong>{item.TenSP}</strong> – Quantity: {item.SoLuong} - Cost: {item.TotalCost} 
//     //                   {/* Delete button calls handleDelete */}
//     //                   <button
//     //                     onClick={() =>
//     //                       handleDelete(item.MaSP, item.SoLuong)
//     //                     }
//     //                   >
//     //                     Delete item
//     //                   </button>
//     //                 </li>
//     //               ))}
//     //             </ul>
//     //           ) : (
//     //             <p>Your cart is empty.</p>
//     //           )}
//     //         </div>
//     //       )}
//     //     </div>
//     //   )}
//     // </div>

//     <>
//       {loading ? (
//         <h3>Refreshing cart...</h3>
//       ) : (
//         <div>
//           {cart.items.length > 0 ? ( 
//             cart.items.map((item, index) => (
//               <li key={index} className="offcanvas-cart-item-single">
//                 <div className="offcanvas-cart-item-block">
//                 <a href="#" className="offcanvas-cart-item-image-link">
//                   <img
//                     src={`https://flaskbackendapi.onrender.com/placeholder`}
//                     alt=""
//                     className="offcanvas-cart-image"
//                   />
//                 </a>
//                   <div className="offcanvas-cart-item-content">
//                     <a href={`/product/${item.MaSP}`} className="offcanvas-cart-item-link">
//                       {item.TenSP}
//                     </a>
//                     <div className="offcanvas-cart-item-details">
//                         <span className="offcanvas-cart-item-details-quantity">
//                           <span className="quantity-value">{item.SoLuong}</span>
//                         </span>
//                         <span className="offcanvas-cart-item-details-price">{item.TotalCost}</span>
//                       </div>
//                     </div>
//                 </div>
//                 <div className="offcanvas-cart-item-delete text-right">
//                   <a className="delete-cart-item" onClick={() => handleDelete(item.MaSP, item.SoLuong)}>
//                     <i className="fa fa-trash-o" />
//                   </a>
//                 </div>
//               </li>
//             ))
//          ) : (<h3>Cart is empty</h3>)}
//         </div>
//       )}
//     </>

//     // <li className="offcanvas-cart-item-single">
//     //   <div className="offcanvas-cart-item-block">
//     //     <a href="#" className="offcanvas-cart-item-image-link">
//     //       <img
//     //         src="assets/images/product/default/home-1/default-1.jpg"
//     //         alt=""
//     //         className="offcanvas-cart-image"
//     //       />
//     //     </a>
//     //     <div className="offcanvas-cart-item-content">
//     //       <a href="#" className="offcanvas-cart-item-link">
//     //         Car Wheel
//     //       </a>
//     //       <div className="offcanvas-cart-item-details">
//     //         <span className="offcanvas-cart-item-details-quantity">
//     //           <button className="quantity-decrease">-</button>
//     //           <span className="quantity-value">1</span>
//     //           <button className="quantity-increase">+</button>
//     //         </span>
//     //         <span className="offcanvas-cart-item-details-price">$49.00</span>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="offcanvas-cart-item-delete text-right">
//     //     <a href="#" className="delete-cart-item">
//     //       <i className="fa fa-trash-o" />
//     //     </a>
//     //   </div>
//     // </li>

//   );
// }
