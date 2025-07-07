import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Checkout = () => {
  const [selectedMethod, setSelectedMethod] = useState("paypal");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
    save: true,
  });

  const subtotal = 85.4;
  const discount = 10;
  const total = subtotal - discount;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleConfirm = () => {
    alert(`Payment Method: ${selectedMethod}\nTotal: $${total}`);
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Checkout
      </motion.h2>
      <p className="text-gray-500 text-sm text-center mb-6">
        Home / Shopping Cart / Checkout
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Payment Method Section */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Select Payment Method</h3>

          {/* Radio Options */}
          {["paypal", "visa", "gpay", "cod", "newcard"].map((method) => (
            <motion.label
              key={method}
              className="flex items-center gap-3 border rounded p-3 mb-3 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                type="radio"
                name="payment"
                value={method}
                checked={selectedMethod === method}
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              {method === "paypal" && <span>Paypal</span>}
              {method === "visa" && <span>VISA **** 8047</span>}
              {method === "gpay" && <span>Google Pay</span>}
              {method === "cod" && <span>Cash On Delivery</span>}
              {method === "newcard" && <span>Add New Credit/Debit Card</span>}
            </motion.label>
          ))}

          {/* Animate Card Form */}
          <AnimatePresence>
            {selectedMethod === "newcard" && (
              <motion.div
                className="p-4 border rounded bg-gray-50 space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <label className="block text-sm mb-1">Card Holder Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                    placeholder="Ex. John Doe"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Card Number *</label>
                  <input
                    type="text"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleInputChange}
                    placeholder="4716 9627 1635 8047"
                    className="border p-2 w-full rounded"
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm mb-1">Expiry Date *</label>
                    <input
                      type="text"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm mb-1">CVV *</label>
                    <input
                      type="password"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="000"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="save"
                    checked={cardDetails.save}
                    onChange={handleInputChange}
                  />
                  Save card for future payments
                </label>

                <motion.button
                  className="bg-green-600 text-white px-4 py-2 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add Card
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Order Summary */}
        <motion.div
          className="bg-white p-6 rounded shadow"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Items</span><span>9</span></div>
            <div className="flex justify-between"><span>Sub Total</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$0.00</span></div>
            <div className="flex justify-between"><span>Taxes</span><span>$0.00</span></div>
            <div className="flex justify-between text-green-600"><span>Coupon Discount</span><span>-${discount}</span></div>
            <hr />
            <div className="flex justify-between font-bold"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
          <motion.button
            onClick={handleConfirm}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Confirm Payment
          </motion.button>
        </motion.div>
      </div>

      {/* Features Below */}
      <motion.div
        className="flex justify-around text-center my-10 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { icon: "🚚", title: "Free Shipping", desc: "Above $50" },
          { icon: "💳", title: "Flexible Payment", desc: "Secure Options" },
          { icon: "🕑", title: "24×7 Support", desc: "Online All Days" },
        ].map((item, i) => (
          <div key={i}>
            <p className="text-2xl">{item.icon}</p>
            <p className="font-bold">{item.title}</p>
            <p className="text-gray-500 text-xs">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Checkout;
