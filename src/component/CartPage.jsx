import React, { useState } from "react";
import CartItem from "./cart/CartItem";
import OrderSummary from "./cart/OrderSummary";
import CouponInput from "./cart/CouponInput";
import FeatureIcons from "./cart/FeatureIcons";


const initialItems = [
  { id: 1, name: "Fresh Oranges", price: 11.75, quantity: 4, weight: "500 g", emoji: "🍊" },
  { id: 2, name: "Red Onion", price: 8.0, quantity: 2, weight: "500 g", emoji: "🧅" },
  { id: 3, name: "Fresh Yellow Lemon", price: 8.0, quantity: 1, weight: "1 Kg", emoji: "🍋" },
  { id: 4, name: "Pomegranate", price: 7.2, quantity: 2, weight: "500 g", emoji: "🍎" }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialItems);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + amount, 1) } : item
      )
    );
  };

  const handleRemoveItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon");
      setDiscount(0);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setCoupon("");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discount;

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Shopping Cart</h2>
        <p className="text-gray-500 text-sm text-center mb-6">Home / Shopping Cart</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left - Cart Items */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-4 bg-yellow-400 text-white font-bold p-3 rounded-t">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onChangeQty={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}

            <CouponInput
              coupon={coupon}
              setCoupon={setCoupon}
              onApply={handleApplyCoupon}
              onClear={handleClearCart}
            />
          </div>

          {/* Right - Order Summary */}
          <OrderSummary subtotal={subtotal} discount={discount} total={total} />
        </div>

        <FeatureIcons />

      </div>


    </div>
  );
};

export default CartPage;
