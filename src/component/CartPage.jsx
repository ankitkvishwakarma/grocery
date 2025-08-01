// import React, { useState } from "react";
// import CartItem from "./cart/CartItem";
// import OrderSummary from "./cart/OrderSummary";
// import CouponInput from "./cart/CouponInput";
// import FeatureIcons from "./cart/FeatureIcons";


// const initialItems = [
//   { id: 1, name: "Fresh Oranges", price: 11.75, quantity: 4, weight: "500 g", emoji: "🍊" },
//   { id: 2, name: "Red Onion", price: 8.0, quantity: 2, weight: "500 g", emoji: "🧅" },
//   { id: 3, name: "Fresh Yellow Lemon", price: 8.0, quantity: 1, weight: "1 Kg", emoji: "🍋" },
//   { id: 4, name: "Pomegranate", price: 7.2, quantity: 2, weight: "500 g", emoji: "🍎" }
// ];

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState(initialItems);
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);

//   const handleQuantityChange = (id, amount) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
//       )
//     );
//   };

//   const handleRemoveItem = id => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   const handleApplyCoupon = () => {
//     if (coupon === "DISCOUNT10") {
//       setDiscount(10);
//     } else {
//       alert("Invalid coupon");
//       setDiscount(0);
//     }
//   };

//   const handleClearCart = () => {
//     setCartItems([]);
//     setDiscount(0);
//     setCoupon("");
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const total = subtotal - discount;

//   return (
//     <div className="bg-white text-gray-800">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold mb-2 text-center">Shopping Cart</h2>
//         <p className="text-gray-500 text-sm text-center mb-6">Home / Shopping Cart</p>

//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Left - Cart Items */}
//           <div className="md:col-span-2">
//             <div className="grid grid-cols-4 bg-yellow-400 text-white font-bold p-3 rounded-t">
//               <span>Product</span>
//               <span>Price</span>
//               <span>Quantity</span>
//               <span>Subtotal</span>
//             </div>

//             {cartItems.map(item => (
//               <CartItem
//                 key={item.id}
//                 item={item}
//                 onChangeQty={handleQuantityChange}
//                 onRemove={handleRemoveItem}
//               />
//             ))}

//             <CouponInput
//               coupon={coupon}
//               setCoupon={setCoupon}
//               onApply={handleApplyCoupon}
//               onClear={handleClearCart}
//             />
//           </div>

//           {/* Right - Order Summary */}
//           <OrderSummary subtotal={subtotal} discount={discount} total={total} />
//         </div>

//         <FeatureIcons />

//       </div>


//     </div>
//   );
// };

// export default CartPage;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  changeQuantity,
  applyCoupon,
  clearCart
} from '../redux/cartSlice';

const CartPage = () => {
  const { items, discount, couponApplied } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');

  // Calculate total price and discounted total
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  // Handle quantity increment/decrement
  const handleQuantityChange = (id, amount) => {
    dispatch(changeQuantity({ id, quantity: amount }));
  };

  // Handle removing an item
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Handle applying a coupon
  const handleApplyCoupon = () => {
    dispatch(applyCoupon(couponCode.trim()));
  };

  // Handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-3 border-b">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">₹{item.price} x {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center">
                {/* Quantity buttons */}
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  +
                </button>
                {/* Remove button */}
                <button
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Coupon input */}
          <div className="mt-6">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon"
              className="border px-2 py-1 mr-2"
            />
            <button
              onClick={handleApplyCoupon}
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Apply
            </button>
            {couponApplied && (
              <p className="text-green-600 mt-2">Coupon applied! -{discount}%</p>
            )}
          </div>

          {/* Total price section */}
          <div className="mt-6">
            <p className="text-lg font-medium">Total: ₹{discountedPrice.toFixed(2)}</p>
            {discount > 0 && (
              <p className="text-sm text-gray-500 line-through">₹{totalPrice.toFixed(2)}</p>
            )}
          </div>

          {/* Clear cart */}
          <button
            onClick={handleClearCart}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;


